# Generated by Django 4.1.7 on 2025-04-07 04:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_alter_user_email_alter_user_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='id_user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='tasks.user'),
        ),
    ]
