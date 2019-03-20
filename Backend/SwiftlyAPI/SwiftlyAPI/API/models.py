#from django.contrib.auth import get_user_model
from django.db import models

class Accounts(models.Model):
    id = models.AutoField(primary_key = True, unique = True)
    author = models.ForeignKey(
      #get_user_model(), #how to
      on_delete = models.CASCADE
    )
    user_type = models.CharField(max_length=30)
    availability = models.BooleanField(default=False)
    eircode = models.CharField(max_length=7)
    #card details
    date_joined = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ('date_joined',)

class Orders(models.Model):
    id = models.AutoField(primary_key = True, unique = True)
    user_id = models.IntegerField()
    driver_id = models.IntegerField()
    #items
    gross_cost = models.FloatField()
    delivery_cost = models.FloatField()
    net_cost = models.FloatField() #grossCost + deliveryCost
    pick_up_location_id = models.IntegerField()
    drop_off_eircode = models.CharField(max_length=7)

    class Meta:
        ordering = ('id',)

class PickUpLocations(models.Model):
    id = models.AutoField(primary_key = True, unique = True)
    eircode = models.CharField(max_length=7)
    phone_number = models.IntegerField()
    #items
    
    class Meta:
        ordering = ('id',)

class LocationItems(models.Model):#in a specific location
    id = models.AutoField(primary_key = True, unique = True)
    name = models.TextField()
    quantity = models.IntegerField()
    item_cost = models.IntegerField()
    
    class Meta:
        ordering = ('id',)

class OrderItems(models.Model):#for an order
    id = models.AutoField(primary_key = True, unique = True)
    item_id = models.IntegerField()
    quantity = models.IntegerField()
    total_cost = models.IntegerField()
    
    class Meta:
        ordering = ('id',)