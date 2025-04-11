import json

obj = '''{"id": "gen-1744379857-aa7qBnMEr97GE6JuNdks", "provider": "Chutes", "model": "meta-llama/llama-4-maverick", "object": "chat.completion", "created": 1744379857, "choices": [{"logprobs": null, "finish_reason": "stop", "native_finish_reason": "stop", "index": 0, "message": {"role": "assistant", "content": "I'm just a language model, I don't have feelings or emotions, but I'm functioning properly and ready to help! How can I assist you today?", "refusal": null, "reasoning": null}}], "usage": {"prompt_tokens": 37, "completion_tokens": 30, "total_tokens": 67}}'''

print(json.loads(obj))