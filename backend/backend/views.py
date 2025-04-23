from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def crawler(request):
    if request.method == 'POST':
        # Simulate a payment check
        # In a real application, you would check the payment status here
        return JsonResponse({'status': 'success', 'message': 'Payment is successful'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)
from django.contrib.auth.models import User