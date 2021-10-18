from datetime import date
from tempfile import NamedTemporaryFile
from urllib.request import urlopen
import random
from django.core.files import File
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.urls import reverse
from django.utils.text import slugify
from phonenumber_field.modelfields import PhoneNumberField

# from django.utils.text import slugify



class Lead(models.Model):
    # CHOICES = (
    #     ('wb', 'WhiteBox'),
    #     ('bs', 'Base'),
    #
    # )
    CHOICES2 = (
        ('fl', '100% оплата'),
        ('t24', 'Рассрочка до 24 месяцев'),

    )
    lead_name = models.CharField('Имя', max_length=150, default='no name', blank=True, null=True)
    phone_number = models.CharField('Номер телефона', max_length=15)
    complectation = models.CharField('Комплектация', max_length=150,  blank=True, null=True)
    pay_type = models.CharField('Способ оплаты', max_length=150, blank=True, null=True, choices=CHOICES2)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата добавления', blank=True, null=True)
    plan_price = models.CharField('Цена', max_length=150, default='no name', blank=True, null=True)
    plan_type = models.CharField('Тип', max_length=150, default='no name', blank=True, null=True)
    plan_number = models.CharField('Номер', max_length=150, default='no name', blank=True, null=True)
    plan_section = models.CharField('Секция', max_length=150, default='no name', blank=True, null=True)
    plan_floor = models.CharField('Этаж', max_length=150, default='no name', blank=True, null=True)

    def __str__(self):
        return self.lead_name + self.phone_number


    class Meta:
        verbose_name = 'Лид'
        verbose_name_plural = 'Лиды'



class Dev_category(models.Model):
    title = models.CharField('Название', max_length=150, blank=True)
    percent = models.IntegerField(
        default=1,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(0)
        ]
    )
    slug = models.SlugField(max_length=150, blank=True)


    def __str__(self):
        return self.title


    # def get_absolute_url(self):
    #     return reverse('title', kwargs={"url": self.slug})

    class Meta:
        verbose_name = 'Категория работ'
        verbose_name_plural = 'Категории работы'


class Dev_history(models.Model):
    category = models.ForeignKey(Dev_category, on_delete=models.PROTECT)

    title = models.CharField('Название', max_length=150, default='без названия')
    created_at = models.DateTimeField( verbose_name='Дата публикации')
    video_url = models.URLField('Ссылка на видео', default=' ', null=True, blank=True)
    slug = models.SlugField( max_length=150, default=' no slug')
    
    

        

    def __str__(self):
        return self.title

    # def get_absolute_url(self):
    #     return reverse('title', kwargs={"url": self.slug})

    class Meta:
        verbose_name = 'Ход строительства'
        verbose_name_plural = 'Ход строительства'


class AdvantageUnit(models.Model):
    title = models.CharField('Заголовок', max_length=150, blank=True, null=True)
    description = models.TextField('Описание', blank=True)


class Advantage(models.Model):
    type = models.CharField('Тип', max_length=150)
    title = models.CharField('Заголовок', max_length=150, blank=True)
    description = models.TextField('Описание', blank=True, null=True)
    advantage_mother = models.ForeignKey('AdvantageUnit', on_delete=models.PROTECT)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Преимущество'
        verbose_name_plural = 'Преимущества'


class FlatsList(models.Model):
    idx_flatris = models.CharField('ID', max_length=100)
    number = models.CharField('Номер', max_length=100)
    section = models.IntegerField('секция', default=0)
    property_type = models.CharField('Тип помещения', max_length=100)
    price_m2 = models.IntegerField('Цена за м2')
    price = models.FloatField('Цена', blank=True, default=0)
    floor = models.IntegerField('Этаж')
    type = models.CharField('Планировка', max_length=50)
    square_total = models.FloatField('Площадь')
    rooms = models.CharField('Кол-во комнат', max_length=100)
    img_file = models.ImageField('Картинка', upload_to='flats/', null=True, blank=True)
    img_url = models.URLField('Ссылка на картинку', default=' ', null=True, blank=True)
    status = models.CharField('Статус', max_length=50)
    path = models.CharField('Path', max_length=2000, blank=True, null=True)
    slug = models.SlugField(max_length=300, unique=True)



    def __str__(self):
        return self.type

    # def save(self, *args, **kwargs):
    #     if self.img_url and not self.img_file:
    #         img_temp = NamedTemporaryFile(delete=True)
    #         img_temp.write(urlopen(self.img_url).read())
    #         img_temp.flush()
    #         self.img_file.save(f"image_{self.pk}", File(img_temp))
    #     super(FlatsList, self).save(*args, **kwargs)


    class Meta:
        verbose_name = 'Планировка'
        verbose_name_plural = 'Планировки'


class Floor(models.Model):
    number = models.IntegerField('Номер этажа')
    # name = models.CharField('Название класса', max_length=50, default='floor')
    path = models.TextField('Path', blank=True, null=True)
    slug = models.SlugField(max_length=150, unique=True, blank=True)


class Documents(models.Model):
    title = models.CharField('Название', max_length=150)
    slug = models.SlugField(max_length=150, unique=True, blank=True)
    date_received = models.DateField('Дата публикации', blank=True, default=date.today)


    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('document_detail', kwargs={"url": self.slug})

    class Meta:
        verbose_name = 'Документ'
        verbose_name_plural = 'Документы'




#
# class Block_custom(models.Model):
#     type = models.CharField('Тип', max_length=150)
#
#
#
#     class Meta:
#         verbose_name = 'Кастомный блок'
#         verbose_name_plural = 'Кастомные блоки'
#
#     def __str__(self):
#         return self.type

# class Small_text(models.Model):
#     title = models.CharField('Название', max_length=150, blank=True, null=True)
#     text = models.CharField('Маленький текст', max_length=300, blank=True, null=True)
#     block = models.ForeignKey(Block_custom, on_delete=models.CASCADE, related_name='small_text', blank=True, null=True)
#
#     class Meta:
#         verbose_name = 'Маленькое текстовое поле'
#         verbose_name_plural = 'Маленькие текстовые поля'
#
# class Big_text(models.Model):
#     title = models.CharField('Название', max_length=150, blank=True, null=True)
#     text = models.TextField('Большой текст', blank=True, null=True)
#     block = models.ForeignKey(Block_custom, on_delete=models.CASCADE, related_name='big_text', blank=True, null=True)
#
#     class Meta:
#         verbose_name = 'Большое текстовое поле'
#         verbose_name_plural = 'Большие текстовые поля'
#


class Gallery_docs(models.Model):
    image = models.ImageField(upload_to='%Y/%m/%d/')
    document = models.ForeignKey(Documents, on_delete=models.CASCADE, related_name='docs_images')

    class Meta:
        verbose_name = 'Галерея документов'
        verbose_name_plural = 'Галерея документов'


# class Gallery_blocks(models.Model):
#
#     title = models.CharField('Тех Тайтл', max_length=150, blank=True, null=True)
#     image = models.ImageField(upload_to='%Y/%m/%d/', blank=True, null=True)
#     block = models.ForeignKey(Block_custom, on_delete=models.CASCADE, related_name='block_images', blank=True, null=True)
#
#     class Meta:
#         verbose_name = 'Галерея блоков'
#         verbose_name_plural = 'Галерея блоков'



# class TitleBlock(models.Model):
#     title_block = models.CharField('Заголовок', max_length=300)
#     content_block = models.TextField('Текст',)
#
#
#     class Meta:
#         verbose_name = 'Блок Заголовка'
#         verbose_name_plural = 'Блоки заголовков'
#
#     def __str__(self):
#         return self.title_block
#
# class ImageBlock(models.Model):
#     title = models.CharField('Название', max_length=150)
#     image_block = models.ImageField(upload_to='%Y/%m/%d/', blank=True, null=True)
#
#
#
#     class Meta:
#         verbose_name = 'Блок Изображения'
#         verbose_name_plural = 'Блоки изображений'
#
#     def __str__(self):
#         return self.title
#
#
#
#
# class Section(models.Model):
#     type = models.CharField('Тип', max_length=150)
#     title_block = models.ForeignKey(TitleBlock, on_delete=models.PROTECT, blank=True)
#     image_block = models.ForeignKey(ImageBlock, on_delete=models.PROTECT, blank=True)
#
#
#     class Meta:
#         verbose_name = 'Секция'
#         verbose_name_plural = 'Секции'
#
#     def __str__(self):
#         return self.type
#
# class WidgetBlock(models.Model):
#     title_widget = models.CharField('Заголовок', max_length=300)
#     content_widget = models.TextField('Текст',)
#     block = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='widget_block', blank=True, null=True)
#
#     class Meta:
#         verbose_name = 'Блок виджетаа'
#         verbose_name_plural = 'Блоки виджетов'
#
#     def __str__(self):
#         return self.title_widget
class Section(models.Model):
    type = models.CharField('Тип', max_length=150)



    class Meta:
        verbose_name = 'Section'
        verbose_name_plural = 'Section'

    def __str__(self):
        return self.type

class HeaderBlock(models.Model):
    title = models.CharField('Название', max_length=150, blank=True, null=True)
    text = models.TextField('Текст', blank=True, null=True)
    block = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='header_block', blank=True, null=True)

    class Meta:
        verbose_name = 'HeaderBlock'
        verbose_name_plural = 'HeaderBlock'

class WidgetBlock(models.Model):
    title = models.CharField('Название', max_length=150, blank=True, null=True)
    text = models.TextField('Большой текст', blank=True, null=True)
    icon = models.FileField(upload_to='%Y/%m/%d/', blank=True, null=True)
    block = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='widget_block', blank=True, null=True)

    class Meta:
        verbose_name = 'WidgetBlock'
        verbose_name_plural = 'WidgetBlock'



class ImageBlock(models.Model):


    image = models.ImageField(upload_to='%Y/%m/%d/', blank=True, null=True)
    block = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='image_block', blank=True, null=True)

    class Meta:
        verbose_name = 'ImageBlock'
        verbose_name_plural = 'ImageBlock'
