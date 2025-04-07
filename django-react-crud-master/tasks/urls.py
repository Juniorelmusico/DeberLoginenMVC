from django.urls import include, path
from rest_framework import routers
from tasks import views
from .views import validate_user

router = routers.DefaultRouter()
router.register(r"tasks", views.TaskView, "tasks")
router.register(r"users", views.UserView, "users")

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("api/v1/validate_user/", validate_user, name="validate_user"),  # Nueva ruta para validate_user
]