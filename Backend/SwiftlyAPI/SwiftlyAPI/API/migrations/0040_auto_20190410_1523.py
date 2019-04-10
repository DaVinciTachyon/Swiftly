# Generated by Django 2.2 on 2019-04-10 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0039_auto_20190410_1320'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='drop_off_coordinates',
        ),
        migrations.RemoveField(
            model_name='pickuplocation',
            name='coordinates',
        ),
        migrations.RemoveField(
            model_name='user',
            name='home_coordinates',
        ),
        migrations.AddField(
            model_name='order',
            name='drop_off_address',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='order',
            name='drop_off_latitude',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='order',
            name='drop_off_longitude',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='pickuplocation',
            name='address',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='pickuplocation',
            name='latitude',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='pickuplocation',
            name='longitude',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='user',
            name='home_address',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='user',
            name='home_latitude',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='user',
            name='home_longitude',
            field=models.FloatField(default=0.0),
        ),
    ]
