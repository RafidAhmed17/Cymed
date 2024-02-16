# User endpoints

from django.urls import path, include
from . import views

urlpatterns = [

# ================= User APIs ==================

    path('userdashboard', views.userDashboard),

]