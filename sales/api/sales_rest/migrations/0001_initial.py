# Generated by Django 4.0.3 on 2023-12-19 19:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('sold', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=500)),
                ('phone_number', models.CharField(max_length=30, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Salesperson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('employee_id', models.CharField(help_text='Please enter the unique 4-digit employee id.', max_length=4, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('automobile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sale', to='sales_rest.automobilevo')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sale', to='sales_rest.customer')),
                ('salesperson', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sale', to='sales_rest.salesperson')),
            ],
        ),
    ]