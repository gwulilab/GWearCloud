import psycopg2
import time
import random

conn_string = "dbname='gwear' user='gwear' host='gwear.cudt3dgpksxl.us-east-1.rds.amazonaws.com' port='5432' password='Prisms123!' sslmode='disable'"

try:
    conn = psycopg2.connect(conn_string)

    print "Database connection successful!"

    cursor = conn.cursor()

    # Print out the current database
    print "Current Database:"

    cursor.execute("""SELECT * from patient_data""")
    rows = cursor.fetchall()
    
    for row in rows:
        print row


    # Add new row to the database
    insert_statement = "INSERT INTO patient_data (time, pt_no, sensor_val) VALUES (%d, 1, %.2f);" % (int(time.time()), random.uniform(11.5, 12.5))
    cursor.execute(insert_statement)

    # Print out the new database
    print "New Database:"

    cursor.execute("""SELECT * from patient_data""")
    rows = cursor.fetchall()

    for row in rows:
        print row

    commit = raw_input("Do you want to commit this change?").lower()

    if (commit == 'y'):
        conn.commit()

    # Close the connections when done
    cursor.close()
    conn.close()
except Exception as e:
    print e
