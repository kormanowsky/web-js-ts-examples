from datetime import datetime

from django.shortcuts import render, redirect

def congratulation_view(request):
    return render(request, 'congratulation.html', {'year': datetime.now().year + 1})

def form_accept_view(request):
    if request.method == 'POST':
        print('Got form', request.POST)
        return redirect('/')

    return 'Not Found'