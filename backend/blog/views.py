from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from blog.serializers import BlogSerializer
from blog.models import Blog
import os
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
# Create your views here.


class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()


class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)
        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
