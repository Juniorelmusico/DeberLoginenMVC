from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    id_user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='tasks', null=True)

    def __str__(self):
        return self.title
    
class User(models.Model):
    username = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    is_admin = models.BooleanField(default=False)
    
    

    def __str__(self):
        return self.username