# users/views.py
from rest_framework import generics

from . import models
from . import serializers
from rest_auth.models import TokenModel
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
import json

class JobListView(generics.ListCreateAPIView):
    queryset = models.Jobs.objects.all()
    serializer_class = serializers.JobSerializer

"""
getJobs support 3 methods: GET, POST, DELETE
GET : get the jobs belong to the user with a authetication token
POST: inset a new job to belong to the user with a authetication token
DELETE: delete a job with a provided job id only when the job belongs to the user
"""
@csrf_exempt
def getJobs(request,key):
    result = TokenModel.objects.filter(key = key)
    if(len(result)==0):
        return JsonResponse({'success':0,'msg':'Token not found'})
    #token found --> user found
    user = result[0].user

    if request.method == 'GET':
        jobs = models.Jobs.objects.filter(user = user)
        output = []
        for job in jobs:
            jd = model_to_dict(job,fields=['title','details','id'])
            output.append(jd)
        return JsonResponse({'success':1,'jobs':output})
    
    elif request.method == 'POST':
        newData = json.loads(request.body.decode())
        if('title' in newData and 'details' in newData):
            job = models.Jobs(title=newData['title'],details=newData['details'],user=user)
            job.save()
            return JsonResponse({'success':1})
        else:
            return JsonResponse({'success':0,'msg':'fill in all fields'})
        
    elif request.method == 'DELETE':
        job = json.loads(request.body.decode())
        jobToDel = models.Jobs.objects.filter(id=job['id'],user=user)
        if(len(jobToDel)==0):
            return JsonResponse({'success':0,'msg':"Job not found"})
        else:
            jobToDel.delete()
            return JsonResponse({'success':1})