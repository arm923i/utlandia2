# Generated by Django 3.1.5 on 2021-03-04 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0008_auto_20210304_1528'),
    ]

    operations = [
        migrations.AddField(
            model_name='dev_history',
            name='slug',
            field=models.SlugField(default=123, max_length=150),
            preserve_default=False,
        ),
    ]
