from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager, PermissionsMixin)
from django.db import models
from django.utils import timezone
from django.contrib import admin

class UserManager(BaseUserManager):
    def create_user(self, email, username, password, alias=None):
        if not email:
            raise ValueError("You have not entered an email.")
        if not username:
            raise ValueError("You have not entered a username.")
        if not password:
            raise ValueError("You have not entered a password.")
        if not alias:
            alias = username
        
        user = self.model(
             email = self.normalize_email(email),
             username = username,
             alias = alias)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, password, alias=None):
        user = self.create_user(email, username, password, alias)
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user
    
class User(AbstractBaseUser, PermissionsMixin, models.Model):
    #url = models.ForeignKey('User', on_delete=models.SET_NULL, null=True)
    email = models.EmailField(verbose_name='email address', unique=True)
    username = models.CharField(max_length=25, unique=True, default='')
    alias = models.CharField(max_length=40, default='')
    first_name = models.CharField(max_length=40, default='')
    last_name = models.CharField(max_length=40, default='')
    aboutme = models.CharField(max_length=140, default='')
    avatar = models.ImageField(blank=True, null=True)
    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_driver = models.BooleanField(default=False)
    is_available = models.BooleanField(default=False)
    home_coordinates = models.CharField(max_length=30, default='')
    cart = models.ForeignKey('Item', on_delete=models.SET_NULL, null=True)
    #card details

    objects = UserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return "@{}".format(self.username)
    
    def get_short_name(self):
        return self.alias

    def get_long_name(self):
        return "{} @{}".format(self.alias, self.username)

class Order(models.Model):
    user_id = models.IntegerField()
    driver_id = models.IntegerField()
    items = models.ForeignKey('Item', on_delete=models.SET_NULL, null=True)
    gross_cost = models.FloatField()
    delivery_cost = models.FloatField()
    net_cost = models.FloatField()
    pick_up_location_id = models.IntegerField()
    drop_off_coordinates = models.CharField(max_length=30, default='')

    class Meta:
        ordering = ('id',)

class PickUpLocation(models.Model):
    coordinates = models.CharField(max_length=30, default='')
    phone_number = models.IntegerField()
    items = models.ForeignKey('Item', on_delete=models.SET_NULL, null=True)
    
    class Meta:
        ordering = ('id',)

class AllItem(models.Model):
    image = models.ImageField(blank=True, null=True)
    name = models.TextField()
    cost = models.FloatField()
    
    class Meta:
        ordering = ('id',)

class Item(models.Model):
    item_id = models.IntegerField(primary_key=True, unique=True)
    quantity = models.IntegerField()
    
    class Meta:
        ordering = ('item_id',)