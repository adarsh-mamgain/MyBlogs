from django.urls import path
from frontend import views

app_name = 'frontend'

urlpatterns = [
  path('', views.home, name="home"),
  path('blog', views.home, name="blog"),
  path('blog/<slug:slug>', views.home, name="getblog"),
  path('create-blog', views.home, name="create-blog"),
]
