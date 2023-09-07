
import csv
import json
 

functionChoice = input("What function would you like to perform?\n 1: CSV to JSON \n 2: Email Generator" )
 
# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
     
    # create a dictionary
    data = {}
     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        i = 0
        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
            data[i] = rows
            i += 1
           
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code
 
# Decide the two file paths according to your
# computer system
csvFilePath = input("Enter file name: ")
jsonFilePath = input("Enter export file name: ")
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)