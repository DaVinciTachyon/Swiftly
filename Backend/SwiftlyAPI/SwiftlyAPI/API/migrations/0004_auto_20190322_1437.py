# Generated by Django 2.1.7 on 2019-03-22 14:37

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0009_alter_user_last_name_max_length'),
        ('API', '0003_customuser_availability'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('username', models.CharField(max_length=25, unique=True)),
                ('alias', models.CharField(max_length=40)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='groups',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='user_permissions',
        ),
        migrations.RemoveField(
            model_name='orders',
            name='drop_off_eircode',
        ),
        migrations.RemoveField(
            model_name='pickuplocations',
            name='eircode',
        ),
        migrations.AddField(
            model_name='orders',
            name='drop_off_coordinates',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AddField(
            model_name='pickuplocations',
            name='coordinates',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]
