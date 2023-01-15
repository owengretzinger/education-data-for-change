import csv

output_file = r"C:\Users\12896\Important\Programming\Personal\DeltaHacks\datasets\csv\student_info.csv"

for i in range(4):
    input_file = r"C:\Users\12896\Important\Programming\Personal\DeltaHacks\datasets\csv\student_info_" + str(i + 2017) + "_" + str(i + 2018) + ".csv"
    year = i + 2018
    with open(input_file, 'r') as input_csv, open(output_file, 'a', newline='') as output_csv:
        reader = csv.reader(input_csv)
        writer = csv.writer(output_csv)

        
        header = next(reader)
        writer.writerow([])

        
        for row in reader:
            cleaned_row = [cell.replace("%", "") for cell in row]
            cleaned_row.append(year)
            writer.writerow(cleaned_row)

