import matplotlib.pyplot as plt
from pylab import rcParams
from queries import *
import csv

def suspension_rate_over_time():
    x_axis = [f"20{i+8:02d}" for i in range(12)]
    y_axis = get_suspensions_over_time()
    rcParams['figure.figsize'] = 20, 12
    plt.plot(x_axis, y_axis)
    
    plt.title('Suspension Rate Over Time')
    plt.xlabel('Year')
    plt.ylabel('Suspension Rate (%)')
    plt.savefig('images/suspension_rate_over_time.png')

def highest_gifted_percent():
    data = {'Zion Heights Middle School':50, 'W H Morden Public School':48, 'Ashton Meadows Public School':40,
            'The Woodlands Secondary School':40, 'John G Althouse Middle School':40}
    keys = (["\n".join(x.split()) for x in list(data.keys())])
    values = list(data.values())
    rcParams['figure.figsize'] = 20, 12
    plt.bar(keys, values,width = 0.4)
    plt.xlabel("")
    plt.ylabel("Percentage of Students Identified as Gifted")
    plt.title("Highest Percentage of Students Identified as Gifted")
    plt.savefig('images/highest_gifted_percent.png')

def best_worst_EQAO():
    keys = (["\n".join(x.split()) for x in ['Kapapamahchakwew Wandering Spirit Scho JuniorSenior','Central Public School','Princess Elizabeth Public School','Applewood Public School','Whitney Junior Public School',"�cole �l�mentaire catholique L'�toile-de-l'Est"]])
    values = [15.5,15.67,19.5,97.33,97.33,97.5]
    rcParams['figure.figsize'] = 20, 12
    plt.bar(keys, values,width = 0.4)
    plt.xlabel("")
    plt.ylabel("Average EQAO Score")
    plt.title("Best & Worse Average EQAO Scores")
    plt.savefig('images/best_worst_EQAO.png')

def low_income():
    with open(r'datasets\low_income_3.csv', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        x = []
        y = []
        for row in reader:
            x.append(100-int(row[0]))
            y.append(int(row[1]))
        rcParams['figure.figsize'] = 20, 12
        plt.scatter(x,y)
        plt.xlabel("Percentage of Children Who Live in Low-Income Households")
        plt.ylabel("Percentage of Grade 3 Students Achieving the Provincial Standard in Reading")

        plt.title("Income vs. Achievement of Reading Standard")
        plt.savefig('images/low_income.png')


font = {'size'   : 15}
plt.rc('font', **font)

# highest_gifted_percent()
# suspension_rate_over_time()
#best_worst_EQAO()
#low_income()