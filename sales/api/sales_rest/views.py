from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from django.http import JsonResponse
from .models import AutomobileVO, Salesperson, Customer, Sale
import json


class AutomobileVOListEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold", "id"]

@require_http_methods(["GET"])
def api_list_autoVO(request):

    if request.method == "GET":
        autovo = AutomobileVO.objects.all()
        return JsonResponse(
            {"autovo": autovo},
            encoder=AutomobileVOListEncoder,
            safe=False
        )


class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id"
        ]


class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer"

    ]
    encoders = {
        "automobile": AutomobileVOListEncoder(),
        "salesperson": SalespersonListEncoder(),
        "customer": CustomerListEncoder()
    }





@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):

    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonListEncoder,
            safe=False
        )

    else:
        content = json.loads(request.body)
        salespeople = Salesperson.objects.create(**content)
        return JsonResponse(
            salespeople,
            encoder=SalespersonListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_salesperson(request, id):
    if request.method == "DELETE":
        count, _ = Salesperson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customers(request):

    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
            safe=False
        )

    else:
        content = json.loads(request.body)
        customers = Customer.objects.create(**content)
        return JsonResponse(
            customers,
            encoder=CustomerListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_customer(request, id):
    if request.method == "DELETE":
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):

    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleListEncoder,
            safe=False
        )

    else:
        content = json.loads(request.body)
        # Get the Automobile object and put it in the content dict
        try:

            automobileID = content["automobile"]
            automobile = AutomobileVO.objects.get(id=automobileID)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile id"},
                status=400,
            )

        # Get the Salesperson object and put it in the content dict
        try:
            salespersonID = content["salesperson"]
            salesperson = Salesperson.objects.get(id=salespersonID)
            print(salesperson)
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson id"},
                status=400,
            )

        # Get the Customer object and put it in the content dict
        try:
            customerID = content["customer"]
            customer = Customer.objects.get(id=customerID)
            print(customer)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer id"},
                status=400,
            )

        sales = Sale.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SaleListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_sale(request, id):
    if request.method == "DELETE":
        count, _ = Sale.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})