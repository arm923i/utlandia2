from django.contrib import admin
from modeltranslation.admin import TranslationAdmin, TabbedTranslationAdmin, TranslationTabularInline
from seo.admin import ModelInstanceSeoInline
from .models import Lead, FlatsList, Floor, Dev_category, Dev_history, Documents, Gallery_docs, \
    Section, WidgetBlock, ImageBlock, HeaderBlock


# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('title',)
#     prepopulated_fields = {'slug': ('title',)}


@admin.register(FlatsList)
class FlatsAdmin(admin.ModelAdmin):
    list_display = ('number', 'property_type', 'price_m2', 'price', 'floor',
                    'type', 'square_total', 'rooms', 'img_url', 'status', 'section')
    prepopulated_fields = {'slug': ('type',)}
    list_filter = ('status', 'rooms', 'floor', 'property_type', 'section')

    search_fields = ('status', 'number')

    ordering = ('property_type', 'floor', 'type')


@admin.register(Dev_history)
class Dev_historyAdmin(admin.ModelAdmin):
    list_display = ('category', 'title', 'created_at', 'video_url')

    list_filter = ('category', 'created_at')

    search_fields = ('category', 'created_at')

    ordering = ('-created_at',)


@admin.register(Dev_category)
class Dev_categoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ('title', 'percent')


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('lead_name', 'phone_number')


@admin.register(Floor)
class FloorAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('number',)}
    list_display = ('number',)


# class SnippetAdmin(admin.ModelAdmin):
#     list_display = ('title', 'slug', 'body')


class GalleryDocumentsInline(admin.TabularInline):
    fk_name = 'document'
    model = Gallery_docs
    extra = 1


# class GalleryBlocksInline(admin.StackedInline):
#     fk_name = 'block'
#     model = Gallery_blocks
#     extra = 1
#
#
# class Big_textInline(TranslationTabularInline):
#     fk_name = 'block'
#     model = Big_text
#     extra = 1
#
#
# class Small_textInline(TranslationTabularInline):
#     fk_name = 'block'
#     model = Small_text
#     extra = 1


@admin.register(Documents)
class DocumentsAdmin(TranslationAdmin):
    inlines = [GalleryDocumentsInline, ]
    prepopulated_fields = {'slug': ('title',)}

    class Media:
        js = (
            'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }

class ImageBlockInline(admin.StackedInline):
    fk_name = 'block'
    model = ImageBlock
    extra = 0


class HeaderBlockInline(TranslationTabularInline):
    fk_name = 'block'
    model = HeaderBlock
    extra = 0


class WidgetBlockInline(TranslationTabularInline):
    fk_name = 'block'
    model = WidgetBlock
    extra = 0


@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    group_fieldsets = True
    inlines = [ImageBlockInline, HeaderBlockInline, WidgetBlockInline, ]

    class Media:
        js = (
            'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }
