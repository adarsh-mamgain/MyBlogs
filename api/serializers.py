from rest_framework import serializers
from api.models import Blog


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id', 'title', 'markdown', 'date', 'time', 'publish', 'slug', 'author')
