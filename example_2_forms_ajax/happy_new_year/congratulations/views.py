from datetime import datetime
from json import loads

from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

def congratulation_view(request):
    return render(request, 'congratulation.html', {'year': datetime.now().year + 1})

def form_accept_view(request):
    if request.method == 'POST':
        print('Got form', request.POST)
    
    return redirect('/')


@csrf_exempt
def form_accept_json_view(request):
    if request.method == 'POST':
        print('Got body', loads(request.body))

    return redirect('/')