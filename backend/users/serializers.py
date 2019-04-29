# users/serializers.py
from rest_framework import serializers
from . import models

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Jobs
        fields = ('title', 'details')