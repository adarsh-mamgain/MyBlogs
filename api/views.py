import os
import logging
from django.shortcuts import HttpResponse
from rest_framework import viewsets
from api.serializers import BlogSerializer
from api.models import Blog
from django.views import View
# Create your views here.


class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()


class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    build`).
    """
    index_file_path = os.path.join('build', 'index.html')

    def get(self, request):
        try:
            with open(self.index_file_path, encoding="utf-8") as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead after
                running `yarn start` on the frontend/ directory
                """,
                status=501,
            )
