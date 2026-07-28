from graph.workflow import graph

initial_state = {
    "complaint": """
Yesterday I lost ₹5000 from my SBI account through Google Pay.
I never approved the transaction.
""",
    "agent_logs": []
}

result = graph.invoke(initial_state)

print("\n========== FINAL STATE ==========\n")

for key, value in result.items():
    print(f"{key}: {value}")