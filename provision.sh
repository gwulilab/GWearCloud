#!/bin/sh

# ========= Installing InfluxDB ==========
wget https://dl.influxdata.com/influxdb/releases/influxdb_1.2.4_amd64.deb
dpkg -i influxdb_1.2.4_amd64.deb

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
wget https://s3-us-west-2.amazonaws.com/grafana-releases/release/grafana_4.3.1_amd64.deb
apt-get install -y adduser libfontconfig
dpkg -i grafana_4.3.1_amd64.deb

# ========= Starts Grafana ==============
/bin/systemctl enable grafana-server
/bin/systemctl start grafana-server
/bin/systemctl daemon-reload
