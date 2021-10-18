# from django.contrib.sitemaps import Sitemap
# from django.shortcuts import reverse
# from .models import Category
#
#
# class StaticViewSitemap(Sitemap):
#     priority = 0.7
#     changefreq = 'never'
#
#
#     def items(self):
#         return ['home']
#
#
#     def location(self, item):
#         return reverse(item)



from seo.sitemaps import UrlSeoSitemap

...

sitemaps = {
    'pages': UrlSeoSitemap
}