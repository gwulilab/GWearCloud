#!/usr/bin/env bash

# ========= Installing InfluxDB ==========
wget https://dl.influxdata.com/influxdb/releases/influxdb_1.6.4_amd64.deb
dpkg -i influxdb_1.6.4_amd64.deb

# ========= Starts InfluxDB ==============
systemctl enable influxdb
systemctl start influxdb
systemctl status influxdb

# ========= Configuring InfluxDB =========
# 1. Set auth-enabled = true
sed 's/auth-enabled = false/auth-enabled = true/g' /etc/influxdb/influxdb.conf

# 2. Create InfluxDB user
influx -execute 'CREATE USER "influx" WITH PASSWORD "influx_pass" WITH ALL PRIVILEGES'

systemctl restart influxbd

# ========= Installing Grafana ==========
wget https://s3-us-west-2.amazonaws.com/grafana-releases/release/grafana_5.3.2_amd64.deb
apt install -y libfontconfig
dpkg -i grafana_5.3.2_amd64.deb

# ========= Starts Grafana ==============
/bin/systemctl enable grafana-server
/bin/systemctl start grafana-server
/bin/systemctl daemon-reload
