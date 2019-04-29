# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    name = models.CharField(blank=True, max_length=255)

    def __str__(self):
        return self.username

class Jobs(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    details = models.TextField()
    def __str__(self):
        return self.user.username+"___"+self.title