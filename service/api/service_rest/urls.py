from django.urls import path

from .views import (
    list_technicians,
    delete_technician,
    list_appointments,
    delete_appointment,
    finish_appointment,
    cancel_appointment
)

urlpatterns = [
    path(
        "technicians/",
        list_technicians,
        name="list_create_technician"
    ),
    path(
        "technicians/<int:pk>/",
        delete_technician,
        name="delete_technician"
    ),
    path(
        "appointments/",
        list_appointments,
        name="list_create_appointment"
    ),
    path(
        "appointments/<int:pk>/",
        delete_appointment,
        name="delete_appointment"
    ),
    path(
        "appointments/<int:pk>/finish/",
        finish_appointment,
        name="finish_appointment"
    ),
    path("appointments/<int:pk>/cancel/",
        cancel_appointment,
        name="cancel_appointment"
    )
]
