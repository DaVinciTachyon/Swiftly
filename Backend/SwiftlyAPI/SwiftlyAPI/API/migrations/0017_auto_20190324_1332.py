# Generated by Django 2.1.7 on 2019-03-24 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0016_auto_20190324_1328'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='home_coordinates',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AddField(
            model_name='user',
            name='is_available',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='is_driver',
            field=models.BooleanField(default=False),
        ),
    ]
