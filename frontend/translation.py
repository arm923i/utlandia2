from modeltranslation.decorators import register
from modeltranslation.translator import TranslationOptions

from .models import  HeaderBlock, WidgetBlock, Documents




@register(HeaderBlock)
class Small_textTranslationOptions(TranslationOptions):
    fields = ('title', 'text')

@register(WidgetBlock)
class Big_textTranslationOptions(TranslationOptions):
    fields = ('title', 'text')

@register(Documents)
class Big_textTranslationOptions(TranslationOptions):
    fields = ('title',)