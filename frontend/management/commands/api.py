

import requests
import json
import sys
import os
import django
from django.core.management.base import BaseCommand
from django.template.defaultfilters import slugify


class ImportFlatris(BaseCommand):

    def handle(self=None, rex=None):
        sys.path.append('')
        os.environ['DJANGO_SETTINGS_MODULE'] = 'utlandia_to.settings'
        django.setup()

        from frontend.models import FlatsList

        url = 'https://flatris.com.ua/api/v1/flats'

        api_param = {
            'gproject_id': '669',
            'building_id': '1520',
            'chess_api_login': 'td@tomin.family',
            'chess_api_key': 'a0d157db40836291979d4691694f2b2bb8af8bfa',

        }

        response = requests.get(
            url,
            params=api_param
        )

        # FlatsList.objects.all().delete()
        
        # for i in json.loads(response.text)['data']['flats']:
        #     FlatsList(
        #         idx_flatris=i['id_custom'],
        #         number=i['number'],
        #         property_type=i['property_type'],
        #         price_m2=i['price_m2'],
        #         price=i['price'],
        #         floor=i['floor'],
        #         type=i['type'],
        #         section=i['section'],
        #         square_total=i['square_total'],
        #         img_url=i['img'],
        #         rooms=i['rooms'],
        #         status=i['status'],
        #         slug=slugify(i['id_custom']),
        #         path=i['comment']
        #     ).save()
        FlatsList.objects.all().delete()
        flats_update = []
        for i in json.loads(response.text)['data']['flats']:
            # img_data = requests.get(i['img']).content
            # ile = open(i['id_custom'] + '.jpg', 'wb')

            k = FlatsList(
                idx_flatris=i['id_custom'],
                number=i['number'],
                property_type=i['property_type'],
                price_m2=i['price_m2'],
                price=i['price'],
                floor=i['floor'],
                type=i['type'],
                section=i['section'],
                square_total=i['square_total'],
                img_url=i['img'],
                rooms=i['rooms'],
                status=i['status'],
                slug=slugify(i['id_custom']),
                path=i['comment'],
            )
            flats_update.append(k)

        FlatsList.objects.bulk_create(flats_update)