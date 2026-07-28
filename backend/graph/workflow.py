from langgraph.graph import StateGraph, START, END

from state.case_state import CaseState
from agents.intake import intake_agent

# Create Graph
builder = StateGraph(CaseState)

# Add Nodes
builder.add_node("intake", intake_agent)

# Define Flow
builder.add_edge(START, "intake")
builder.add_edge("intake", END)

# Compile Graph
graph = builder.compile()