from django.urls import path
from frontend import views
from django.contrib.sitemaps.views import sitemap
from api.sitemaps import BlogSitemap
from django.views.generic.base import TemplateView

app_name = 'frontend'

sitemaps = {
    'blog':BlogSitemap
}

urlpatterns = [
    path('', views.home, name="home"),
    path('blog', views.home, name="blog"),
    path('blog/<slug:slug>', views.home, name="getblog"),
    path('create-blog', views.home, name="create-blog"),
    path('robots.txt', TemplateView.as_view(template_name="frontend/robots.txt", content_type="text/plain")),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
]
