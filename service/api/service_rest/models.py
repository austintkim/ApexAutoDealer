from django.core.exceptions import ObjectDoesNotExist
from django.db import models

class Status(models.Model):
    """
    The status model provides a status to an appointment, which will by default be Created (when appointment is first created), Finished, or Canceled.

    Status is a Value Object and, therefore, does not have a direct URL to view it.
    """

    id = models.PositiveSmallIntegerField(primary_key = True)
    name = models.CharField(max_length=8, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("id",) # Default ordering for Status
        verbose_name_plural = "statuses" # Fix the pluralization

class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=4)

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

class Appointment(models.Model):

    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="Created")
        appointment = cls(**kwargs)
        appointment.save()
        return appointment

    date_time = models.DateTimeField()
    reason = models.CharField(max_length=200)
    status = models.ForeignKey(
        Status,
        related_name="appointments",
        on_delete=models.PROTECT,
    )
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField (max_length=200)
    special_vip = models.CharField (max_length=3, null=True)
    technician = models.ForeignKey(
        Technician,
        related_name = "appointments",
        on_delete = models.CASCADE,
    )

    def finish(self):
        status = Status.objects.get(name="Finished")
        self.status = status
        self.save()

    def cancel(self):
        status = Status.objects.get(name="Canceled")
        self.status = status
        self.save()
