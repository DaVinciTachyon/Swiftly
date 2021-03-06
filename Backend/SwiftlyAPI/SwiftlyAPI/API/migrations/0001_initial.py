# Generated by Django 2.1.7 on 2019-03-20 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LocationItems',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('name', models.TextField()),
                ('quantity', models.IntegerField()),
                ('item_cost', models.IntegerField()),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='OrderItems',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('item_id', models.IntegerField()),
                ('quantity', models.IntegerField()),
                ('total_cost', models.IntegerField()),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('user_id', models.IntegerField()),
                ('driver_id', models.IntegerField()),
                ('gross_cost', models.IntegerField()),
                ('delivery_cost', models.IntegerField()),
                ('net_cost', models.IntegerField()),
                ('pick_up_location_id', models.IntegerField()),
                ('drop_off_eircode', models.CharField(max_length=7)),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='PickUpLocations',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('eircode', models.CharField(max_length=7)),
                ('phone_number', models.IntegerField()),
            ],
            options={
                'ordering': ('id',),
            },
        ),
    ]
