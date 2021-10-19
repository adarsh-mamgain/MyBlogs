from django.contrib import admin
from django.db import models
from blog.models import Blog

# Register your models here.


class BlogAdmin(admin.ModelAdmin):
    readonly_fields = ("author",)
    list_display = ("id", "title", "date", "slug")
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Blog, BlogAdmin)
