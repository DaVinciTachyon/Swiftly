from rest_framework import viewsets
from .models import Order, PickUpLocation, User, AllItem
from .serializers import OrderSerializer, PickUpLocationSerializer, UserSerializer, AllItemSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class PickUpLocationViewSet(viewsets.ModelViewSet):
    queryset = PickUpLocation.objects.all()
    serializer_class = PickUpLocationSerializer

class AllItemViewSet(viewsets.ModelViewSet):
    queryset = AllItem.objects.all()
    serializer_class = AllItemSerializer