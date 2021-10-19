from django.urls import path
from blog import views

app_name = 'blog'

urlpatterns = [
    path('<slug:slug_id>', views.show_blog, name="show_blog"),
    # path('<int:year>-<int:month>-<int:day>', views.show_day, name="show_day"),
    # path('<int:year>', views.show_year, name="show_year"),
    # path('<int:year>-<int:month>', views.show_month, name="show_month"),
]
