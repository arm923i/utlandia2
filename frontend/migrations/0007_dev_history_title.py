# Generated by Django 3.1.5 on 2021-03-03 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0006_remove_dev_history_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='dev_history',
            name='title',
            field=models.CharField(blank=True, max_length=150, verbose_name='Название'),
        ),
    ]
