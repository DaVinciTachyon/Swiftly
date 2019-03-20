from rest_framework import serializers
from .models import Orders, PickUpLocations, LocationItems, OrderItems#, Accounts

class AccountsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Accounts
        fields = ('username', 'user_type', 'password', 'email', 'first_name', 'last_name', 'avalability', 'date_joined', 'eircode')
        #card_details

class OrdersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Orders
        fields = ('user_id', 'driver_id', 'gross_cost', 'delivery_cost', 'net_cost', 'pick_up_location_id', 'drop_off_eircode')
        #items

class PickUpLocationsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PickUpLocations
        fields = ('eircode', 'phone_number')
        #items

class LocationItemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LocationItems
        fields = ('name', 'quantity', 'item_cost')
        #items

class OrderItemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OrderItems
        fields = ('item_id', 'quantity', 'total_cost')
        #items