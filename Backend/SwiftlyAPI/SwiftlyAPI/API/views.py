from rest_framework import viewsets, permissions
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from .models import Order, PickUpLocation, User, AllItem, Cart, OrderItem, LocationItem
from .serializers import OrderSerializer, GroupSerializer, PickUpLocationSerializer, UserSerializer, AllItemSerializer, CartSerializer, OrderItemSerializer, LocationItemSerializer#, NewUserSerializer
from django.contrib.auth.models import Group
from rest_framework.permissions import AllowAny
import json
from django.http import JsonResponse
from .forms import UserCreationForm, UserChangeForm

# from rest_framework.authentication import SessionAuthentication, BasicAuthentication 

# class CsrfExemptSessionAuthentication(SessionAuthentication):

#     def enforce_csrf(self, request):
#         return  # To not perform the csrf check previously happening

# authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)

def register(request): #does it work?
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            username = form.cleaned_data['username']
            password1 = form.cleaned_data['password1']
            password2 = form.cleaned_data['password2']
            if(password1 == password2):
                User.objects.create_user(email, username, password1)
                id = User.objects.filter(email__exact=email).values('id')
                return JsonResponse({'id':id})
    return JsonResponse({'id':-1})

def orderIdItems(request):
    if request.method == 'POST':
        id = request.params['id']
        items = {}  
        items['items'] = []  
        for item in OrderItemViewSet.queryset:
            if(item.order_id == id):
                items['items'].append({  
                    'id': item.id,
                    'order_id': item.order_id,
                    'item_id': item.item_id,
                    'quantity': item.quantity
                })
        return JsonResponse(items)
    return JsonResponse({'id':-1})

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