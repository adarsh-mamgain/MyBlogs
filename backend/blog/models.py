from django.db import models
from django.utils import timezone
from django.utils.text import slugify
# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=100)
    markdown = models.TextField()
    date = models.DateField(default=timezone.now)
    time = models.TimeField(default="00:00:00")
    slug = models.SlugField(primary_key=True, max_length=200)
    author = models.CharField(default="Adarsh Mamgain", max_length=50)

    def __str__(self):
        return f"{self.title} {self.date} {self.time} {self.slug}"

    def save(self, *args, **kwargs):
        self.slug = slugify(str(self.date) + "-" + self.title)
        super().save(*args, **kwargs)
