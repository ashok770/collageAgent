from langgraph.graph import StateGraph, START, END

from state.case_state import CaseState

from agents.intake import intake_agent
from agents.classification import classification_agent

builder = StateGraph(CaseState)

builder.add_node("intake", intake_agent)
builder.add_node("classification", classification_agent)

builder.add_edge(START, "intake")
builder.add_edge("intake", "classification")
builder.add_edge("classification", END)

graph = builder.compile()