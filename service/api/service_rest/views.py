from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    TechnicianDetailEncoder,
    AppointmentDetailEncoder
)

from .models import AutomobileVO, Technician, Appointment



@require_http_methods(["GET", "POST"])
def list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianDetailEncoder,
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def delete_technician(request, pk):
    if request.method == "DELETE":
        try:
            Technician.objects.get(id=pk)
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status = 400
            )
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentDetailEncoder
        )
    else:
        content = json.loads(request.body)

        try:
            technician_id = content["technician"]
            technician = Technician.objects.get(id = technician_id)
            content["technician"] = technician


        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status = 400
            )

        try:
            appointment_vin = content["vin"]
            AutomobileVO.objects.get(vin = appointment_vin, sold = True)
            content["special_vip"] = "Yes"

        except AutomobileVO.DoesNotExist:
            content["special_vip"] = "No"


        appointment = Appointment.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False
        )


@require_http_methods(["DELETE"])
def delete_appointment(request, pk):
    if request.method == "DELETE":
        try:
            Technician.objects.get(id=pk)
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status = 400
            )
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["PUT"])
def finish_appointment(request, pk):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=pk)
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid appointment id"},
                status = 400
            )
    appointment.finish()

    return JsonResponse(
        appointment,
        encoder=AppointmentDetailEncoder,
        safe=False,
    )


@require_http_methods(["PUT"])
def cancel_appointment(request, pk):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=pk)
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid appointment id"},
                status = 400
            )
    appointment.cancel()

    return JsonResponse(
        appointment,
        encoder=AppointmentDetailEncoder,
        safe=False,
    )
