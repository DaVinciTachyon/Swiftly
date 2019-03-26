from rest_framework import serializers
from .models import Order, PickUpLocation, User, AllItem

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'id', 'email', 'username', 'alias', 'first_name', 'last_name', 'aboutme', 'avatar', 'date_joined', 'is_active', 'is_staff', 'is_driver', 'is_available', 'home_coordinates', 'cart', 'groups')

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('url', 'id', 'user_id', 'driver_id', 'items', 'gross_cost', 'delivery_cost', 'net_cost', 'pick_up_location_id', 'drop_off_coordinates')

class PickUpLocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PickUpLocation
        fields = ('url', 'id', 'coordinates', 'phone_number', 'items')

class AllItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AllItem
        fields = ('url', 'id', 'image', 'name', 'cost')