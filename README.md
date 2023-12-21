# CarCar

Team:

* Austin - Service
* Peace - Sales

## Design

![Alt text](image-2.png)

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice
Sales microservice was created to handle the sales of any automobile in the CarCar inventory. A pollor is utilized to retrive information about the inventory which is stored in the Automobile Value Object model. These APIs allow the user to create an instance of a salesperson, customer, and a sale which requires the the price of the transaction, the salesperson completing the sale, the customer, and the automobile of purchase.

**Sales API**

| Action | Method | URL|
| ------ | ------ | -- |


| List automobile | GET | http://localhost:8090/api/sales/automobiles/ |
**Response Example**
{
	"automobiles": [
		{
			"vin": "1C3CC5FB2AN120174",
			"sold": false,
			"id": 1
		},
        .
        .
        .
        .
	]
}
| Details of a specific automobile | GET | http://localhost:8090/api/sales/automobiles/1C3CC5FB2AN120174/ |
**Response Example**
{
	"automobiles": {
		"vin": "1C3CC5FB2AN120174",
		"sold": false
	}
}


| List salespeople | GET | http://localhost:8090/api/salespeople/ |
**Response Example**
{
	"salespeople": [
		{
			"first_name": "Sherry",
			"last_name": "Clemons",
			"employee_id": "shcl",
			"id": 1
		},
		{
			"first_name": "Laura ",
			"last_name": "Reeves",
			"employee_id": "lare",
			"id": 2
		},
        .
        .
        .
        .
	]
}
| Create a salesperson | POST | http://localhost:8090/api/salespeople/ |
**Data Posted Example**
{
    "first_name": "Sherry",
    "last_name": "Clemons",
	"employee_id": "shcl"
}
**Response Example**
{
	"first_name": "Sherry",
	"last_name": "Clemons",
	"employee_id": "shcl",
	"id": 1
}
| Delete a salesperson | DELETE | 	http://localhost:8090/api/salespeople/id/ |
**Response Example (Upon deletion)**
{
	"deleted": true
}
**Response Example (After deletion)**
{
	"deleted": false
}


| List customers | GET | http://localhost:8090/api/customers/ |
**Response Example**
{
	"customers": [
		{
			"first_name": "Amy",
			"last_name": "Johnson",
			"address": "AB12 apple street",
			"phone_number": "8033333333",
			"id": 1
		}
        .
        .
        .
        .
	]
}
| Create a customer | POST | http://localhost:8090/api/customers/ |
**Data Posted Example**
{
    "first_name": "Amy",
	"last_name": "Johnson",
	"address": "AB12 apple street",
	"phone_number": 8033333333
}
**Response Example**
{
    "first_name": "Amy",
    "last_name": "Johnson",
    "address": "AB12 apple street",
    "phone_number": "8033333333",
    "id": 1
}
| Delete a customer | DELETE | 	http://localhost:8090/api/customers/id/ |
**Response Example (Upon deletion)**
{
	"deleted": true
}
**Response Example (After deletion)**
{
	"deleted": false
}


| List sales | GET | http://localhost:8090/api/sales/ |
**Response Example**
{
	"sales": [
		{
			"price": 8000,
			"automobile": {
				"vin": "1C3CC5FB2AN120174",
				"sold": false,
				"id": 1
			},
			"salesperson": {
				"first_name": "Sherry",
				"last_name": "Clemons",
				"employee_id": "shcl",
				"id": 1
			},
			"customer": {
				"first_name": "Amy",
				"last_name": "Johnson",
				"address": "AB12 apple street",
				"phone_number": "8033333333",
				"id": 1
			}
		},
		.
        .
        .
        .
    ]
}
| Create a sale | POST | http://localhost:8090/api/sales/ |
**Data Posted Example**
{
	"customer":1,
	"salesperson": 1,
	"automobile": "1C3CC5FB2AN",
  "price": 8000
}
**Response Example**
{
    "price": 8000,
    "automobile": {
        "vin": "1C3CC5FB2AN120174",
        "sold": false,
        "id": 1
    },
    "salesperson": {
        "first_name": "Sherry",
        "last_name": "Clemons",
        "employee_id": "shcl",
        "id": 1
    },
    "customer": {
        "first_name": "Amy",
        "last_name": "Johnson",
        "address": "AB12 apple street",
        "phone_number": "8033333333",
        "id": 1
    }
}
| Delete a sale | DELETE | 	http://localhost:8090/api/sales/id/ |
**Response Example (Upon deletion)**
{
	"deleted": true
}
**Response Example (After deletion)**
{
	"deleted": false
}

## Value Object
In refernce to the attached diagram, the value object for this microservice is the AutomobileVO. 
