from rest_framework import serializers
from django.contrib.auth.models import Group
from .models import Order, PickUpLocation, User, AllItem, Cart, OrderItem, LocationItem

#class NewUserSerializer(serializers.HyperlinkedModelSerializer):
#    class Meta:
#        model = User
#        fields = ('email', 'username', 'alias', 'first_name', 'last_name', 'avatar', 'groups')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'id', 'email', 'username', 'alias', 'first_name', 'last_name', 'aboutme', 'avatar', 'date_joined', 'is_active', 'is_staff', 'is_available', 'home_coordinates', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class CartSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cart
        fields = ('id', 'user_id', 'item_id', 'quantity')

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('url', 'id', 'user_id', 'driver_id', 'gross_cost', 'delivery_cost', 'net_cost', 'pick_up_location_id', 'drop_off_coordinates')

class OrderItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('id', 'order_id', 'item_id', 'quantity')

class PickUpLocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PickUpLocation
        fields = ('url', 'id', 'coordinates', 'phone_number', 'is_open', 'is_active')

class LocationItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LocationItem
        fields = ('id', 'location_id', 'item_id', 'quantity')

class AllItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AllItem
        fields = ('url', 'id', 'image', 'name', 'cost')