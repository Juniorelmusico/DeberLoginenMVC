from rest_framework.response import Response  # Corregido: Importar Response desde DRF
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task, User
from .serializer import UserSerializer
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import check_password  # Para verificar contraseñas encriptadas
from django.core.exceptions import MultipleObjectsReturned

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    
    def get_queryset(self):
        id_user = self.request.query_params.get('id_user')
        if id_user:
            return Task.objects.filter(id_user=id_user)  # Usa el nombre correcto del campo
        return Task.objects.none()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

@api_view(["POST"])
def validate_user(request):
    username = request.data.get("username")
    password = request.data.get("password")

    if not username or not password:
        return Response({"success": False, "message": "Username and password are required"}, status=400)

    try:
        user = User.objects.get(username=username)
        if (password == user.password):
            user_data = UserSerializer(user).data
            return Response({"success": True, "message": "User authenticated", "data": user_data})
        else:
            return Response({"success": False, "message": "Invalid credentials"}, status=401)
    except User.DoesNotExist:
        return Response({"success": False, "message": "Invalid credentials"}, status=401)
    except MultipleObjectsReturned:
        return Response({"success": False, "message": "Multiple users with same username"}, status=500)