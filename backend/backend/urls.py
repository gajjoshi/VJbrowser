
from django.contrib import admin
from django.urls import path
from backend import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('crawler/', views.crawler),  # Updated: Replace create_user with authenticate_user

]
