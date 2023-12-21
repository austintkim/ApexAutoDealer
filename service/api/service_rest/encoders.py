from common.json import ModelEncoder

from .models import Technician, Appointment


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id", "id"]


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "special_vip",
        "technician"
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
    }
    def get_extra_data(self, o):
        return {"status": o.status.name}
