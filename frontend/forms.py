from django import forms
from phonenumber_field.formfields import PhoneNumberField

from .models import Lead


class LeadForm(forms.ModelForm):
    lead_name = forms.CharField(
        label='',
        required=False,
        widget=forms.TextInput(attrs={'class': 'input lead_name',
                                      'name': "form[]",
                                      'autocomplete': "off",
                                      'type': "text",
                                      'data-value': "Ваше Имя",
                                      'data-error': "Error",

                                      })

    )
    phone_number = PhoneNumberField(
        label='',
        required=True,
        widget=forms.TextInput(attrs={'class': 'input _phone _req phone_number',
                                      'name': "form[]",
                                      'autocomplete': "off",
                                      'type': "tel",
                                      'data-value': "Ваш номер телефона",
                                      'data-error': "Enter correct number, please",
                                      'class': 'input _phone _req phone_number',
                                      })

    )

    class Meta:
        model = Lead
        fields = ['phone_number', 'lead_name']


class LeadFlatForm(forms.ModelForm):
    CHOICES = (
        ('wb', 'WhiteBox'),
        ('bs', 'Base'),

    )
    CHOICES2 = (
        ('fl', '100% оплата'),
        ('t24', 'Рассрочка до 24 месяцев'),

    )
    phone_number = PhoneNumberField(
        label='',
        required=True,
        widget=forms.TextInput(attrs={'class': 'input _phone _req phone_number',
                                      'name': "form[]",
                                      'autocomplete': "off",
                                      'type': "text",
                                      'data-value': "Ваш номер телефона",
                                      'data-error': "Enter correct number, please",
                                      })

    )
    # complectation = forms.ChoiceField(
    #     label='',
    #     choices=CHOICES,
    #     widget=forms.RadioSelect,
    #
    # )
    pay_type = forms.ChoiceField(
        required=False,
        label='',
        choices=CHOICES2,
        initial='fl',
        widget=forms.RadioSelect,
    )
    plan_price = forms.CharField(
        label='',
        required=False,
    )
    plan_type = forms.CharField(
        label='',
        required=False,
    )
    plan_number = forms.CharField(
        label='',
        required=False,
    )
    plan_section = forms.CharField(
        label='',
        required=False,
    )
    plan_floor = forms.CharField(
        label='',
        required=False,
    )
    class Meta:
        model = Lead
        fields = ['phone_number', 'pay_type', 'plan_price', 'plan_type', 'plan_number']
