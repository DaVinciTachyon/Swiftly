# Generated by Django 2.1.7 on 2019-03-22 17:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0009_auto_20190322_1738'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_staff',
        ),
    ]
