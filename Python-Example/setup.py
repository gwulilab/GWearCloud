# -*- coding: utf-8 -*-

from setuptools import setup, find_packages


with open('README.md') as f:
    readme = f.read()

with open('LICENSE') as f:
    license = f.read()

setup(
    name='pythonexample',
    version='0.1.0',
    description='Example of writing to PostgreSQL with Python',
    long_description=readme,
    author='Nam Tran',
    author_email='tranngocnam97@gmail.com',
    url='https://github.com/omn0mn0m/GWearCloud',
    license=license,
    packages=find_packages(exclude=('tests', 'docs'))
)
