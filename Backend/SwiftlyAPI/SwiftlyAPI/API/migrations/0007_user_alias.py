# Generated by Django 2.1.7 on 2019-03-22 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0006_remove_user_alias'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='alias',
            field=models.CharField(default='', max_length=40),
        ),
    ]
