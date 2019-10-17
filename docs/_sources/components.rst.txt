Stack Components
================

Amazon CloudFormation
---------------------
This allows us to store the cloud stack as code, making it easily reproducible and editable on a large scale. Each cloud stack component is described as a JSON object, which is then read by CloudFormation to generate full cloud system.

Amazon EC2
----------
This is AWS's virtual server and computing service. It is the underlying resource behind most computing services that AWS offers. GWearCloud does not directly interact with EC2 instances, but rather uses services that help to automate and manage EC2 instances.

Amazon Lambda
-------------
Amazon Lambda is a serverless computing service, meaning that it will generate a new virtual server to perform a function, and then shut down the server when done. This allows for lower costs, as well as scalability. This is used for each API behaviour code, as well as CloudFormation setup scripts. 

Amazon ECS
----------
This is used to create containerised apps that are run on an Amazon EC2 instance. Containerisation allows for distributed computing, as well as scalable app proceses.

Amazon S3
---------
This is used to host the Lambda function deployable ZIP files. These deployables are used by the CloudFormation template to automatically set up Amazon Lambda.

Amazon RDS
----------
This is a service that allows for a managed relational database. In the case of GWearCloud, RDS is used for a PostgreSQL database that contains all the sensor data.

Amazon API Gateway
------------------
API Gateway is the main way to interact with the database, a decision made for security. By providing an abstracton layer from directly using SQL, GWearCloud prevents malicious database actions.
