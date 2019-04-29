# api/urls.py
from django.urls import include, path

urlpatterns = [
    #user can modify their jobs 
    path('users/', include('users.urls')),
    #login & register
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls'))
]