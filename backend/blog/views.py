from django.shortcuts import render
from blog.models import Blog
# Create your views here.


def show_blog(request, slug_id):
    blog = Blog.objects.get(slug=str(slug_id))
    return render(request, 'blog/blogpost.html', {
        "blog": blog
    })


# def show_day(request, year, month, day):
#     return render(request, 'blog/blogspot', {
#         "year": year, "month": month, "day": day
#     })
