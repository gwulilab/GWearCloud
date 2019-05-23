import requests
import json

import time
import random

url = 'https://213xjpuh93.execute-api.us-east-1.amazonaws.com/beta'
data = {
    'id': 1,
    'timestamp': [
        1549775369
    ],
    'mac': 'abc123',
    'sensor': 'test_sensor',
    'value': [
        9.6
    ],
    'metric': 'test_metric'
}
headers = {
    'Content-Type': 'application/json',
    'x-api-key':'TuAVwnAabd7MmZQ2fCVAX1KPCO1xXm7h6Of6cE9c'
}

try:
    r = requests.get(url, headers=headers)

    print(r.status_code)

    if r.status_code == requests.codes.ok:
        print(r.content)
    else:
        print("Failure")

    r = requests.post(url, headers=headers, data=json.dumps(data))

    print(r.status_code)

    if r.status_code == requests.codes.ok:
        print(r.content)
    else:
        print("Failure")

    # # Add new row to the database
    # insert_statement = "INSERT INTO patient_data (time, pt_no, sensor_val) VALUES (%d, 1, %.2f);" % (int(time.time()), random.uniform(11.5, 12.5))
    # cursor.execute(insert_statement)

except Exception as e:
    print e
