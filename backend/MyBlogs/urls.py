"""MyBlogs URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from blog import views

router = routers.DefaultRouter()
router.register(r'blog', views.BlogView, 'Blog')

urlpatterns = [
    path('administrator/', admin.site.urls, name="administrator"),
    path('api/', include(router.urls), name="api"),
    re_path(r'^(?:.*)/?$', views.FrontendAppView.as_view(), name="index"),
    path('', views.FrontendAppView.as_view(), name="index")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
