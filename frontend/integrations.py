import requests


def send_to_roistat(form, request):
    _f = form.cleaned_data
    fields = ['plan_section', 'plan_floor', 'plan_type', 'plan_price']
    comment = []
    for i in fields:
        if i in _f:
            comment.append(f'{i} ------- {_f[i]}')

    roistat_data = {
        'roistat': request.COOKIES['roistat_visit'] if 'roistat_visit' in request.COOKIES else 'nocookie',
        'key': 'NDEzYjFmZTExMTM0NzY0NmQxNjA0ODBlYjEzNjcwYjY6MTEwNDg3',
        'title': f"U2 {_f['lead_name']}" if 'lead_name' in _f else 'заявка U2',
        'comment': str(comment),
        'name': _f['lead_name'] if 'lead_name' in _f else 'no name',
        # 'email': 'test email',
        'phone': _f['phone_number'].as_e164 if 'phone_number' in _f else '',
        'is_need_callback': '0',
        'callback_phone': '0',
        'sync': '0',
        'is_need_check_order_in_processing': '1',
        'is_need_check_order_in_processing_append': '1',
        'is_skip_sending': '0',
        'fields': {
            # '751139': _f['plan_section'] if 'plan_section' in _f else 'бананів нема',
            # '751141': _f['plan_floor'] if 'plan_floor' in _f else 'бананів нема',
            # '751143': _f['plan_type'] if 'plan_type' in _f else 'бананів нема',
            # '751137': _f['plan_price'] if 'plan_price' in _f else 'бананів нема',
        }
    }
    requests.get('https://cloud.roistat.com/api/proxy/1.0/leads/add?', params=roistat_data)
