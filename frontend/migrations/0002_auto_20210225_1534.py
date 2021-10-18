# Generated by Django 3.1.5 on 2021-02-25 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flatslist',
            name='idx_flatris',
            field=models.CharField(max_length=100, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='flatslist',
            name='number',
            field=models.CharField(max_length=100, verbose_name='Номер'),
        ),
        migrations.AlterField(
            model_name='flatslist',
            name='path',
            field=models.CharField(blank=True, max_length=2000, null=True, verbose_name='Path'),
        ),
        migrations.AlterField(
            model_name='flatslist',
            name='property_type',
            field=models.CharField(max_length=100, verbose_name='Тип помещения'),
        ),
        migrations.AlterField(
            model_name='flatslist',
            name='rooms',
            field=models.CharField(max_length=100, verbose_name='Кол-во комнат'),
        ),
    ]