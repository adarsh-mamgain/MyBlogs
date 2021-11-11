from django.contrib.sitemaps import Sitemap
from api.models import Blog
 
 
class BlogSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.8
    protocol = 'https'

    def items(self):
        return Blog.objects.filter(publish=True)

    def lastmod(self, obj):
        return obj.date
        
    def location(self,obj):
        return f"/blog/{obj.slug}"