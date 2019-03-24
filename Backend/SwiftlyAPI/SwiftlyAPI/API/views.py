from rest_framework import viewsets
from .models import Orders, PickUpLocations, User#, LocationItems, OrderItems
from .serializers import OrdersSerializer, PickUpLocationsSerializer, UserSerializer#, LocationItemsSerializer, OrderItemsSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

class PickUpLocationsViewSet(viewsets.ModelViewSet):
    queryset = PickUpLocations.objects.all()
    serializer_class = PickUpLocationsSerializer

"""class LocationItemsViewSet(viewsets.ModelViewSet):
    queryset = LocationItems.objects.all()
    serializer_class = LocationItemsSerializer

class OrderItemsViewSet(viewsets.ModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer"""