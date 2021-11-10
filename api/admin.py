from django.contrib import admin
from api.models import Blog

# Register your models here.


class BlogAdmin(admin.ModelAdmin):
    readonly_fields = ("author",)
    list_display = ("id", "title", "date", "time", "slug", "publish")
    prepopulated_fields = {"slug": ("title",)}


admin.site.register(Blog, BlogAdmin)
