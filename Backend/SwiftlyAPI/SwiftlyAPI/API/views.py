from rest_framework import viewsets
from .models import Order, PickUpLocation, User, AllItem, Cart, OrderItem, LocationItem
from .serializers import OrderSerializer, PickUpLocationSerializer, UserSerializer, AllItemSerializer, CartSerializer, OrderItemSerializer, LocationItemSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class PickUpLocationViewSet(viewsets.ModelViewSet):
    queryset = PickUpLocation.objects.all()
    serializer_class = PickUpLocationSerializer

class LocationItemViewSet(viewsets.ModelViewSet):
    queryset = LocationItem.objects.all()
    serializer_class = LocationItemSerializer

class AllItemViewSet(viewsets.ModelViewSet):
    queryset = AllItem.objects.all()
    serializer_class = AllItemSerializer