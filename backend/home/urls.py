from django.urls import path
from home import views
# from .sitemaps import ArticleSitemap
# from django.contrib.sitemaps.views import sitemap
from django.views.generic.base import TemplateView

app_name = 'home'

# sitemaps = {
#     'blog': ArticleSitemap
# }

urlpatterns = [
    path('', views.index, name='index'),
    # path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    path("robots.txt", TemplateView.as_view(template_name="home/robots.txt", content_type="text/plain")),
]
