import sqlite3
from sqlite3 import Error

def create_connection(path):
    connection = None
    try:
        connection = sqlite3.connect(path)
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection

def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
    except Error as e:
        print(f"The error '{e}' occurred")

def execute_read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Error as e:
        print(f"The error '{e}' occurred")

def query(SQL_query, dataset="scores"):
    connection = create_connection(f"datasets/{dataset}.sqlite")
    return execute_read_query(connection, SQL_query)

def get_suspensions_over_time():
    q = "select " + "".join([f"round(avg(`20{i+7:02d}-20{i+8:02d} Suspension Rate`),2)," for i in range(12)])[:-1] + " from suspensions;"
    return list(query(q, "suspensions")[0])

def get_gifted():
    q = "select `School Name`, `Percentage of Students Identified as Gifted` from scores where `Percentage of Students Identified as Gifted` = 5  order by `Percentage of Students Identified as Gifted` desc limit 5;"
    return query(q, "scores")