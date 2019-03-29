from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import UserCreationForm, UserChangeForm
from .models import User, Order, PickUpLocation, AllItem, Cart, OrderItem, LocationItem

class UserAdmin(UserAdmin):
    add_form = UserCreationForm
    form = UserChangeForm
    model = User
    list_display = ['email', 'username',]

admin.site.register(User, UserAdmin)
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(PickUpLocation)
admin.site.register(LocationItem)
admin.site.register(AllItem)