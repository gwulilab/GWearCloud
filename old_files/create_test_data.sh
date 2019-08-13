#!/usr/bin/env bash

declare -a id_data_0=(12.1 12.4 12.8 12.4 11.8 11.9 11.6 12.2)
declare -a id_data_1=(5.6 4.5 5.4 5.3 4.6 4.9 5.4 6.2 5.8 5.7)

influx -execute 'CREATE DATABASE test'

for val in ${id_data_0[@]};
do
    echo "Adding: $val"
    influx -database 'test' -execute "INSERT sensordata,region=us-west,id=0 value=$val"
    sleep 5
done

for val in ${id_data_1[@]};
do
    echo "Adding: $val"
    influx -database 'test' -execute "INSERT sensordata,region=us-west,id=1 value=$val"
    sleep 5
done

