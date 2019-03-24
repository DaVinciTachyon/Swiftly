from rest_framework import serializers
from .models import Orders, PickUpLocations, User#, LocationItems, OrderItems

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'alias', 'first_name', 'last_name', 'aboutme', 'avatar', 'date_joined', 'is_active', 'is_staff', 'is_driver', 'is_available', 'home_coordinates')

class OrdersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Orders
        fields = ('user_id', 'driver_id', 'items', 'gross_cost', 'delivery_cost', 'net_cost', 'pick_up_location_id', 'drop_off_coordinates')

class PickUpLocationsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PickUpLocations
        fields = ('coordinates', 'phone_number', 'items')

"""class LocationItemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LocationItems
        fields = ('name', 'quantity', 'item_cost')

class OrderItemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OrderItems
        fields = ('item_id', 'quantity', 'total_cost')"""