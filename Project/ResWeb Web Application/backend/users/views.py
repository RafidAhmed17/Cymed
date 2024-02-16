#=============== Django Imports ===============

# from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect

#======== Rest Framework Imports ==========

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

#=============== Models ================

from django.contrib.auth.models import User

#================== Serializers ===============

from .serializers import GetUserSerializer

#=============== API Views ==================


@api_view(['GET'])
def userDashboard(request):
    userid = request.user.id
    user = User.objects.filter(id=userid)
    print(userid)

    if user.exists():
        serializer = GetUserSerializer(user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)
