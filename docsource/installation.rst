Installation
============

The following installation guide is meant to install the full GWearCloud stack. The two main components of the GWear system, the REST API and the data visualisation, is set up on AWS using the following steps. Note that all resources can be set up with the AWS Free Tier.

Prerequisites
-------------
This user manual assumes the following:

* The implementer has a valid AWS account
* The implementer has prior knowledge of Android app development
* The implementer has prior knowledge of git and GitHub

S3 Bucket Setup
---------------
For the CloudFormation template to work, there needs to be a valid S3 bucket to pull the Lambda deployment package from. If you are deploying your system on us-east-1 (N. Virginia), then the template already is linking to a valid S3 bucket. If you are deploying to any other region, the following instructions can be used to set up the bucket.

Creating the Bucket
~~~~~~~~~~~~~~~~~~~
First, download the latest Lambda deployment zip files from https://github.com/gwulilab/GWearCloud/releases. The files should be named “GWearCloud-GET.zip” and “GWearCloud-POST.zip”.

Navigate to Amazon S3 and click “Create bucket”: https://s3.console.aws.amazon.com/s3

Type in a bucket name and remember it for the next step. Choose the same region as the one you will be deploying GWearCloud. Then click “Next”.

Leave all “Configure options” settings default. Click “Next”.

Uncheck “Block all public access”. Click “Next”.

Review all of your settings and click “Create bucket”.

Adding the Deployables
~~~~~~~~~~~~~~~~~~~~~~
Click “Upload”.

In the next window, add both the “GWearCloud-GET.zip” and “GWearCloud-POST.zip” files. Then click “Next”.

Under “Manage public permissions” select “Grant public read access to this object(s)”. Click “Upload”.

If everything was done correctly, you should see a screen similar to above.

CloudFormation
--------------
Navigate to https://console.aws.amazon.com/cloudformation/ to access the CloudFormation console.

Click on “Create new stack”.

Select “Upload a template to Amazon S3” and browse for the GWear.json template file. Then click “Next”.

Enter your desired stack name for your REST API. Then fill out the parameters for your stack. The most important to fill out is the “S3BucketNameParam” if you had to create a new bucket for your region. Then click “Next”.

Edit the stack settings as desired. Then click “Next”. The default settings are fine for most cases.

The final window summarises the stack you are about to create. If you are satisfied with every setting, click “Create”.

PostgreSQL Setup
----------------
Currently, the generated database instance does not automatically create a database table or schema. The following should be set up manually using a SQL client (such as pgadmin: https://www.pgadmin.org/).

Table Name: patient_data

Schema:

Data Visualisation (Grafana) Setup
----------------------------------
