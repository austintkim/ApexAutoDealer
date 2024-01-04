from django.db import migrations


statuses = ["Created", "Canceled", "Finished"]


def up(apps, schema):
    Status = apps.get_model("service_rest", "Status")
    for id, status in enumerate(statuses):
        Status.objects.create(
            id=id,
            name=status,
        )


def down(apps, schema):
    Status = apps.get_model("service_rest", "Status")
    Status.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(up, down)
    ]
