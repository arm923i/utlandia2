from django import template
from frontend.models import Section
from itertools import chain

register = template.Library()


# values = Small_text.objects.select_related('block').values() | Big_text.objects.select_related('block').values() | Gallery_blocks.objects.select_related('block').values()



# def get_content(type):
#
#
#     return {i.title: i.text for i in Block_custom.objects.get(type=type).big_text.all()} \
#           | {i.title: i.text for i in Block_custom.objects.get(type=type).small_text.all()} \
#           | {i.title: i.image for i in Block_custom.objects.get(type=type).block_images.all()}

@register.inclusion_tag('frontend/inc/_block_ti.html')
def show_block_ti(type):
    content = Section.objects.get(type=type)
    context = {
        "header": content.header_block.get(block=content.pk),
        "image": content.image_block.get(block=content.pk).image,
    }
    return context

@register.inclusion_tag('frontend/inc/_block_tiw.html')
def show_block_tiw(type):

    content = Section.objects.get(type=type)
    context = {
        "header": content.header_block.get(block=content.pk),
        "image": content.image_block.get(block=content.pk).image,
        "widget_list": content.widget_block.all(),
    }
    return context

@register.inclusion_tag('frontend/inc/_block_twp.html')
def show_block_twp(type):
    content = Section.objects.get(type=type)
    context = {
        "header": content.header_block.get(block=content.pk),
        "image": content.image_block.get(block=content.pk).image,
        "widget_list": content.widget_block.all(),
    }
    return context
#
@register.inclusion_tag('frontend/inc/_block_itw.html')
def show_block_itw(type):
    content = Section.objects.get(type=type)
    context = {
        "header": content.header_block.get(block=content.pk),
        "image": content.image_block.get(block=content.pk).image,
        "widget_list": content.widget_block.all(),
    }
    return context

@register.inclusion_tag('frontend/inc/_block_main.html')
def show_block_main(type):
    content = Section.objects.get(type=type)
    context = {
        "header": content.header_block.get(block=content.pk),
        "image": content.image_block.get(block=content.pk).image,
    }
    return context
@register.inclusion_tag('frontend/inc/_block_icons_place.html')
def show_block_icons_place(type):
    content = Section.objects.get(type=type)
    context = {
        "header": content.header_block.get(block=content.pk),
        "widget_list": content.widget_block.all(),
    }
    return context


@register.inclusion_tag('frontend/inc/_block_tabs.html')
def show_block_tabs(type):
    content = Section.objects.get(type=type)
    context = {
        "widget_list": content.widget_block.all(),

    }
    return context
