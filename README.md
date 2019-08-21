# GWearCloud
These are the supporting files needed to set up the GWearCloud system. Use of this system requires a free-tier AWS account at minimum.

## What is Included
The releases on this repo contain every file that is needed to set up GWearCloud. A description of each included file can be found below.

### GWearCF.json
CloudFormation template to set up the entire system. This file should be run on your account.

### GWearCloud-GET.zip
Lambda function code for the REST API GET request. This archive should be uploaded to an [Amazon S3](https://aws.amazon.com/s3/) bucket on your account.

### GWearCloud-POST.zip
Lambda function code for the REST API POST request. This archive should be uploaded to an [Amazon S3](https://aws.amazon.com/s3/) bucket on your account.

### Source code (.zip and .tar.gz)
Every file in the repository in archive form.

## Installation
Full installation instructions can be found [in the wiki](https://github.com/gwulilab/GWearCloud/wiki/Installation).

## Example REST API Data Body
```json
{
    "metric" : "test_measurement",
    "sensor" : "test_sensor",
    "id" : 1,
    "value" : 12.5,
    "mac" : "abc123",
    "timestamp" : 1566364870
}
```

## Contributing
Coming soon.
