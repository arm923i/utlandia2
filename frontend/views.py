import json
import requests
from django.http import HttpResponse, HttpResponseRedirect
from django.db.models import Q
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse, reverse_lazy
from django.views.decorators.cache import cache_page
from django.views.decorators.csrf import csrf_protect, requires_csrf_token, csrf_exempt
from django.views.generic import TemplateView, CreateView
from django.db.models import Min, Max


from .integrations import send_to_roistat
from .management.commands.api import ImportFlatris

from .models import FlatsList, Floor, Dev_history, Dev_category, Documents, Lead
from .forms import LeadForm, LeadFlatForm

@cache_page(60 * 15)
@csrf_exempt
def index(request):
    floor_list = Floor.objects.all()
    context = {'floor_list': floor_list}

    return render(request, 'frontend/index.html', context)


def get_floor(request, floor, section_number):
    flats_list = FlatsList.objects.filter(
        Q(property_type='flat', floor=floor) | Q(property_type='commercial', floor=floor))
    min_square = flats_list.aggregate(Min('square_total'))
    max_square = flats_list.aggregate(Max('square_total'))
    min_rooms = flats_list.aggregate(Min('rooms'))
    max_rooms = flats_list.aggregate(Max('rooms'))
    flats_sold = flats_list.filter(Q(status='Продано') | Q(status='Резерв'))
    flats_list_section1 = flats_list.filter(section=1)
    flats_list_section2 = flats_list.filter(section=2)
    context = {
        'flats_list': flats_list,
        'flats_list_section1': flats_list_section1,
        'flats_list_section2': flats_list_section2,
        'floor_number': str(floor),
        'section_number': str(section_number),
        'flats_info': {
            'min_square': round(min_square['square_total__min']),
            'max_square': round(max_square['square_total__max']),
            'min_rooms': min_rooms['rooms__min'],
            'max_rooms': max_rooms['rooms__max'],
            'flats_sold_section1': flats_sold.filter(section=1),
            'flats_sold_section2': flats_sold.filter(section=2),
        }
    }
    return render(request, 'frontend/floor_plan.html', context)

@csrf_exempt
def get_flat(request, flat_id):
    if request.method == 'POST':
        form = LeadFlatForm(request.POST)

        if form.is_valid():

            Lead.objects.create(**form.cleaned_data)
            send_to_roistat(form, request)
            return render(request, 'frontend/thanks.html')
        else:
            form.clean()
    else:
        form = LeadFlatForm()
    # flats_item = FlatsList.objects.get(idx_flatris=flat_id)
    flats_item = get_object_or_404(FlatsList, idx_flatris=flat_id)

    context = {
        'flats_item': flats_item,
        'form': LeadFlatForm(),
    }

    return render(request, 'frontend/flat_detail.html', context)

@cache_page(60 * 15)
@csrf_protect
def contacts(request):
    return render(request, 'frontend/contacts.html')

@cache_page(60 * 15)
@csrf_protect
def docs(request):
    docs_list = Documents.objects.all()
    context = {
        'docs_list': docs_list,
    }
    return render(request, 'frontend/docs.html', context)


def document_detail(request, url):
    docs_list = Documents.objects.all()
    context = {
        'docs_list': docs_list,
        'opened_doc': url,
    }
    return render(request, 'frontend/docs_detail.html', context)


def constructions(request):
    # dev_history_list = Dev_history.objects.all()
    context = {
        'dev_history_list': Dev_history.objects.all().order_by('-created_at'),
        'dev_category_list': Dev_category.objects.all(),
    }
    return render(request, 'frontend/constructions.html', context)

@cache_page(60 * 15)
@csrf_protect
def parking(request):
    floor_list = Floor.objects.all()
    context = {'floor_list': floor_list}
    return render(request, 'frontend/parking.html', context)

@cache_page(60 * 15)
@csrf_protect
def commercial(request):
    floor_list = Floor.objects.all()
    context = {'floor_list': floor_list}
    return render(request, 'frontend/commercial.html', context)

@cache_page(60 * 15)
@csrf_protect
def storeroom(request):
    floor_list = Floor.objects.all()
    context = {'floor_list': floor_list}
    return render(request, 'frontend/storeroom.html', context)

@cache_page(60 * 15)
@csrf_protect
def about(request):
    return render(request, 'frontend/about.html')

@csrf_exempt
def get_thanks(request):
    if request.method == 'POST':
        form = LeadForm(request.POST)
        if form.is_valid():
            form.save()

            send_to_roistat(form, request)

            return render(request, 'frontend/thanks.html')

        else:
            form.clean()

    return HttpResponseRedirect('/#form')


# class Index(ListView):
#     model = Category
#     template_name = 'frontend/index.html'
#     context_object_name = 'category_list'

# def index(request):
#     output = _('StatusMsg')
#     return HttpResponse(output)
# class Worker(TemplateView):
#     template_name = 'main/worker.js'
#     content_type = 'text/javascript'

def import_flatris(request):
    ImportFlatris.handle()

    return HttpResponseRedirect('/admin/frontend/flatslist/')
