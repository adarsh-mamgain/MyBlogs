from django.contrib import admin
from blog.models import Blog

# Register your models here.


class BlogAdmin(admin.ModelAdmin):
    readonly_fields = ("author",)
    list_display = ("title", "date", "time", "slug")
    prepopulated_fields = {"slug": ("title",)}


admin.site.register(Blog, BlogAdmin)
