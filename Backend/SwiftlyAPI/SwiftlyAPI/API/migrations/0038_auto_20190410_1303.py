# Generated by Django 2.2 on 2019-04-10 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0037_auto_20190410_1246'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='drop_off_coordinates',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AlterField(
            model_name='pickuplocation',
            name='coordinates',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AlterField(
            model_name='user',
            name='home_coordinates',
            field=models.CharField(default='', max_length=150),
        ),
    ]
