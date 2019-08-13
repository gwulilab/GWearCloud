Stack Components
================

Amazon CloudFormation
---------------------
This allows us to store the cloud stack as code, making it easily reproducible and editable on a large scale. Each cloud stack component is described as a JSON object, which is then read by CloudFormation to generate full cloud system.

Amazon Lambda
-------------

Amazon S3
---------
This is used to host the Lambda function deployable ZIP files. These deployables are used by the CloudFormation template to automatically set up Amazon Lambda.

Amazon EC2
----------


Amazon RDS
----------

Amazon API Gateway
------------------

Amazon ECS
----------
