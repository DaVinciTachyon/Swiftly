# Generated by Django 2.2 on 2019-04-10 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0038_auto_20190410_1303'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='has_driver',
        ),
        migrations.AddField(
            model_name='order',
            name='is_open',
            field=models.BooleanField(default=False),
        ),
    ]