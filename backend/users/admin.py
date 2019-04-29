# users/admin.py
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser,Jobs

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'username', 'name']

admin.site.register(CustomUser, CustomUserAdmin)


class JobsAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'details') # add this

# Register your models here.
admin.site.register(Jobs, JobsAdmin) # add this