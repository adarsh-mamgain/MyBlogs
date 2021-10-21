from django.shortcuts import render
from rest_framework import viewsets
from blog.serializers import BlogSerializer
from blog.models import Blog
# Create your views here.


class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
