from django.contrib import admin
from .models import Task, User
# Register your models here.
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'done')
    search_fields = ('title',)
    list_filter = ('done',)
    ordering = ('-id',)
    model = Task
admin.site.register(Task, TaskAdmin)

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email')
    search_fields = ('username',)
    model = User
admin.site.register(User, UserAdmin)
