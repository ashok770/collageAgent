from tools.llm import llm

from prompts.classification_prompt import CLASSIFICATION_PROMPT

from state.case_state import CaseState

from utils.json_parser import parse_json

from utils.logger import (
    log_header,
    log_section,
    log_success,
    log_data,
)


def classification_agent(state: CaseState):

    log_header("Classification Agent")

    structured_case = f"""
Complaint: {state.get("complaint")}

Amount: {state.get("amount")}

Bank: {state.get("bank_name")}

Fraud Type: {state.get("fraud_type")}

Transaction Channel: {state.get("transaction_channel")}

Transaction Date: {state.get("transaction_date")}
"""

    log_section("Structured Case")
    log_data(structured_case)

    response = llm.invoke([
        ("system", CLASSIFICATION_PROMPT),
        ("human", structured_case),
    ])

    log_section("LLM Response")
    log_data(response.content)

    data = parse_json(response.content)

    state["category"] = data.get("category")
    state["assigned_department"] = data.get("assigned_department")
    state["classification_confidence"] = data.get("classification_confidence")

    # overwrite reasoning with latest agent reasoning
    state["reasoning"] = data.get("reasoning")

    state["agent_logs"].append(
        "✅ Classification Agent completed: Complaint classified successfully."
    )

    log_success("Classification completed.")

    return state