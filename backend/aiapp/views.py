from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .ai import ai
import json

@csrf_exempt
def index(request):

    if request.method == "POST":
        try:
            body = json.loads(request.body)
            prompt = body.get("prompt")
            language = body.get("language")
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON", "status": "error"}, status=400)
        data = {
            'message': ai(prompt, language),
            'status': 'success',
            }
        return JsonResponse(data)
    
    data = {
    'message': ai("india"),
    'status': 'success',
    }
    return JsonResponse(data)