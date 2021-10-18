"""utlandia_to URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
import debug_toolbar
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.i18n import i18n_patterns


from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
# from frontend.sitemaps import StaticViewSitemap
from django.urls import path, include, re_path
# from frontend import views as home_views
from django.contrib.sitemaps import views as sitemap_views
from frontend.sitemaps import sitemaps
from django.views.generic import TemplateView


# sitemaps = {'static': StaticViewSitemap}

# urlpatterns = [
#     path('', include('frontend.urls')),
#     path('sitemap.xml/', sitemap, {'sitemaps': sitemaps}),
#     path('admin/', admin.site.urls),
#
#
#
# ]
#
# home_patterns = ([
#     path('', home_views.index, name='home'),
#
# ], 'home')
#
# urlpatterns += i18n_patterns(
#     path('', include(home_patterns, namespace='home')),
# )


urlpatterns = i18n_patterns(
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    re_path(r'rosetta/', include('rosetta.urls')),
    url(r'^sitemap\.xml$', sitemap_views.index, {'sitemaps': sitemaps}, name='sitemap'),
    url(r'^sitemap-(?P<section>\w+)\.xml$', sitemap_views.sitemap, {'sitemaps': sitemaps},
        name='django.contrib.sitemaps.views.sitemap'),
    path(
        "robots.txt",
        TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),
    ),
)

# if 'rosetta' in settings.INSTALLED_APPS:
#     urlpatterns += [
#         re_path(r'rosetta/', include('rosetta.urls'))
#     ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += path('__debug__/', include(debug_toolbar.urls)),