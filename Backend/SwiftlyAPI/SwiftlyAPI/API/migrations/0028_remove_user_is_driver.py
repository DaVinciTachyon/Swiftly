# Generated by Django 2.1.7 on 2019-04-01 09:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0027_auto_20190401_0908'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_driver',
        ),
    ]