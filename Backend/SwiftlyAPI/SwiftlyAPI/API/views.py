from rest_framework import viewsets, permissions
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from .models import Order, PickUpLocation, User, AllItem, Cart, OrderItem, LocationItem
from .serializers import OrderSerializer, GroupSerializer, PickUpLocationSerializer, UserSerializer, AllItemSerializer, CartSerializer, OrderItemSerializer, LocationItemSerializer#, NewUserSerializer
from django.contrib.auth.models import Group
from rest_framework.permissions import AllowAny

#class NewUserViewSet(GenericViewSet,   # generic view functionality
#                    CreateModelMixin,  # handles POSTs
#                    permissions.AllowAny): #handles permission
#    queryset = User.objects.all()
#    serializer_class = NewUserSerializer
#    permission_classes = (permissions.AllowAny,)

from django.http import HttpResponse
from .forms import UserCreationForm, UserChangeForm

def register(request):
    if request.method == 'GET':
            form = UserCreationForm()
    else:
        form = UserCreationForm(request.POST)
        # If data is valid, proceeds to create a new post and redirect the user
        #if form.is_valid():
        #    content = form.cleaned_data['content']
        #    created_at = form.cleaned_data['created_at']
        #    post = m.Post.objects.create(content=content,
        #                                created_at=created_at)
        #    return HttpResponseRedirect(reverse('post_detail',
        #                                        kwargs={'post_id': post.id}))
        return HttpResponseRedirect(reverse, kwargs={'id': 4})
    return render(request, 'register/register_form_upload.html', {
        'form': form,
    })
    #form = UserCreationForm()
    #return HttpResponse(form)

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