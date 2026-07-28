from typing import TypedDict, Optional


class CaseState(TypedDict):
    # Citizen Complaint
    complaint: str

    # Intake Agent
    amount: Optional[float]
    bank_name: Optional[str]
    fraud_type: Optional[str]
    transaction_channel: Optional[str]
    transaction_date: Optional[str]

    # Classification Agent
    category: Optional[str]
    classification_confidence: Optional[float]

    # Duplicate Agent
    duplicate_score: Optional[float]

    # Evidence Agent
    evidence_status: Optional[str]

    # Risk Agent
    risk_score: Optional[int]
    priority: Optional[str]

    # Routing Agent
    assigned_department: Optional[str]

    # Explainability
    reasoning: dict

    # Timeline
    agent_logs: list[str]