# Generated by Django 2.1.7 on 2019-03-22 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0008_remove_user_coordinates'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='alias',
            field=models.CharField(max_length=40),
        ),
    ]