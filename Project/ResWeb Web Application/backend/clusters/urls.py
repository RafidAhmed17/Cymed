# Cluster endpoints

from django.urls import path, include
from . import views

urlpatterns = [

    # ========== Cluster APIs ================
    path('createcluster', views.createCluster),
    path('clusterdetails', views.clusterDetails),
    path('search', views.clusterDataSearch),



]