from django.db import models
from django.urls import reverse
# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateField(default=None)
    time = models.TimeField(default=None)
    slug = models.SlugField(primary_key=True)
    author = models.CharField(default="Adarsh Mamgain", max_length=50)

    def __str__(self):
        return f"{self.title} {self.date} {self.time} {self.slug}"

    def get_absolute_url(self):
        return reverse('show_blog', kwargs={'slug': self.slug})