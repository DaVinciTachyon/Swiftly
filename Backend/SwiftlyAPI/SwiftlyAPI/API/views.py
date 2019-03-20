from rest_framework import viewsets
from .models import Orders, PickUpLocations, LocationItems, OrderItems#, Accounts
from .serializers import OrdersSerializer, PickUpLocationsSerializer, LocationItemsSerializer, OrderItemsSerializer#, AccountsSerializer

class AccountsViewSet(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountsSerializer

class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

class PickUpLocationsViewSet(viewsets.ModelViewSet):
    queryset = PickUpLocations.objects.all()
    serializer_class = PickUpLocationsSerializer

class LocationItemsViewSet(viewsets.ModelViewSet):
    queryset = LocationItems.objects.all()
    serializer_class = LocationItemsSerializer

class OrderItemsViewSet(viewsets.ModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer