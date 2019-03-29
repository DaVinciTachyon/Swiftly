# Generated by Django 2.1.7 on 2019-03-25 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0020_auto_20190325_1153'),
    ]

    operations = [
        migrations.CreateModel(
            name='AllItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('name', models.TextField()),
                ('cost', models.FloatField()),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('item_id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('quantity', models.IntegerField()),
            ],
            options={
                'ordering': ('item_id',),
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('driver_id', models.IntegerField()),
                ('gross_cost', models.FloatField()),
                ('delivery_cost', models.FloatField()),
                ('net_cost', models.FloatField()),
                ('pick_up_location_id', models.IntegerField()),
                ('drop_off_coordinates', models.CharField(default='', max_length=30)),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='PickUpLocation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coordinates', models.CharField(default='', max_length=30)),
                ('phone_number', models.IntegerField()),
            ],
            options={
                'ordering': ('id',),
            },
        ),
        migrations.RemoveField(
            model_name='orders',
            name='items',
        ),
        migrations.RemoveField(
            model_name='pickuplocations',
            name='items',
        ),
        migrations.DeleteModel(
            name='LocationItems',
        ),
        migrations.DeleteModel(
            name='OrderItems',
        ),
        migrations.DeleteModel(
            name='Orders',
        ),
        migrations.DeleteModel(
            name='PickUpLocations',
        ),
    ]