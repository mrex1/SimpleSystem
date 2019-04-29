from django.urls import include, path

from . import views

urlpatterns = [
    path('jobs/', views.JobListView.as_view()),
    #key is the authentication token received after user login
    path('jobs/<slug:key>', views.getJobs),
]