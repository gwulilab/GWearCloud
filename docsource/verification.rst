Verification
============
The following steps can be completed to verify the various components of the GWearCloud ecosystem.

REST API
--------
As the purpose of this guide is system verification, we will be using API Gateway test functions rather than using a proper gateway device and sensor.

Navigate to the API Gateway console, and you should find a generated GWearCloudAPI. Select this.

Under `Resources`, select the `POST` action under `/patient-data`.

Click `Test`.

For the Request Body, enter the following test data:

::
    {
        "metric" : "test_measurement",
        "sensor" : "test_sensor",
        "id" : 1,
        "value" : 12.5,
        "mac" : "abc123",
        "timestamp" : 1566364870
    }

Click `Test`. A successful POST operation should return the following response body:

::
    {
    "statusCode": 200,
        "body": {
            "message": "ok"
        }
    }

Under `Resources`, select the `GET` action under `/patient-data`.

Click `Test` and then click `Test`. A successful GET operation should return the following response body:

::
    [
        {
            "id": 1,
            "timestamp": "1566364870",
            "mac": "abc123",
            "sensor": "test_sensor",
            "value": "12.5",
            "metric": "test_measurement"
        }
    ]

Grafana
-------
TODO
