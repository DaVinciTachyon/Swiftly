from rest_framework import viewsets
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from .models import Order, PickUpLocation, User, AllItem, Cart, OrderItem, LocationItem
from .serializers import OrderSerializer, GroupSerializer, PickUpLocationSerializer, UserSerializer, AllItemSerializer, CartSerializer, OrderItemSerializer, LocationItemSerializer
from django.contrib.auth.models import Group ####

class UserViewSet(GenericViewSet,   # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,    # handles GETs for 1
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):   # handles GETs
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(GenericViewSet,   # generic view functionality
                     RetrieveModelMixin,    # handles GETs for 1
                     ListModelMixin):   # handles GETs
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class OrderViewSet(GenericViewSet,   # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,    # handles GETs for 1
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):   # handles GETs
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemViewSet(GenericViewSet,   # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,    # handles GETs for 1
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):   # handles GETs
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class PickUpLocationViewSet(GenericViewSet,   # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,    # handles GETs for 1
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):   # handles GETs
    queryset = PickUpLocation.objects.all()
    serializer_class = PickUpLocationSerializer

class LocationItemViewSet(GenericViewSet,   # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,    # handles GETs for 1
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):   # handles GETs
    queryset = LocationItem.objects.all()
    serializer_class = LocationItemSerializer

class AllItemViewSet(GenericViewSet,   # generic view functionality
                     CreateModelMixin,  # handles POSTs
                     RetrieveModelMixin,    # handles GETs for 1
                     UpdateModelMixin,  # handles PUTs and PATCHes
                     ListModelMixin):   # handles GETs
    queryset = AllItem.objects.all()
    serializer_class = AllItemSerializer