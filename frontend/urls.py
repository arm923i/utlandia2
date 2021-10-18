from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='home'),
    path('contacts/', contacts, name='contacts'),
    path('docs/', docs, name='docs'),
    path('constructions/', constructions, name='constructions'),
    path('parking/', parking, name='parking'),
    path('commercial/', commercial, name='commercial'),
    path('storeroom/', storeroom, name='storeroom'),
    path('about/', about, name='about'),
    path('docs/<str:url>/', document_detail, name='document_detail'),
    path('thanks/', get_thanks, name='thanks'),
    path('floor<int:floor>/section<int:section_number>/', get_floor, name='get_floor'),
    path('flat<int:flat_id>/', get_flat, name='flat'),
    path('import_flatris/', import_flatris),

]
