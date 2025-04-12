from aiapp.ai import ai
import json


data = ai("history")


objs = json.loads(data)

for obj in objs:
    print(obj["question"])
    print("new")

