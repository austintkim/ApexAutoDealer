# Generated by Django 4.0.3 on 2023-12-19 02:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_alter_appointment_date_time_alter_status_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='date_time',
            field=models.DateTimeField(),
        ),
    ]
