from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from .models import Movie, Genre

# Create your views here.
# We create functions that take the request form the user.
# and emits a response. 

def index(request):
    return render (request, 'views/index.html')



"""
    read all: Movie.objects.all()
    get by id: MOvie.objects.get(id=1)
    filter: Movie.objects.filter
"""

def catalog(request):
    movies = Movie.objects.all() # read the movies tables
    titles = ', '.join([m.title for m in movies])
    return render(request, 'views/catalogtest.html', { 'title': 'FROM BACKED', 'movies': movies})


def test(request):
    return HttpResponse("This is a test page!")


def developer(request):
    return HttpResponse("<hr><center><h1>Oliver Heyer<h1><center><hr>")

def details(request, movie_id):
    try:

        movie = Movie.objects.get(id=movie_id) # read that movie
        return render(request, 'views/details.html', { "id": movie_id, "movie":movie })
    except Movie.DoesNotExist:
        raise Http404() # raise 404 error