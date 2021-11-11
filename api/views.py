from rest_framework import viewsets
from api.serializers import BlogSerializer
from api.models import Blog
from django.views import View
# Create your views here.


class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.filter(publish=True)
    lookup_field = 'slug'
