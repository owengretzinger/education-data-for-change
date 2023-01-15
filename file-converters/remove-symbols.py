import csv

filename = r'C:\Users\12896\Important\Programming\Personal\DeltaHacks\datasets\suspensions.csv'
output_filename = r'C:\Users\12896\Important\Programming\Personal\DeltaHacks\datasets\clean-suspensions.csv'

with open(filename, 'r') as input_file:
    with open(output_filename, 'w', newline='') as output_file:
        reader = csv.reader(input_file)
        writer = csv.writer(output_file)

        for row in reader:
            row = [element.replace('%', '').replace('<', '') for element in row]
            writer.writerow(row)
