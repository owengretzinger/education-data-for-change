window.onload = function () {
    let scoreData = [];
    let scoreStats = {};
    let schoolFuse = [];
    let headers = [];

    // use fetch to load csv file from url
    fetch("datasets/scores.csv")
        .then(response => response.text())
        .then(data => {
            // split the data into rows
            let rows = data.split("\n");
            headers = rows[0].split(",");



            scoreStats = setUpAverages(headers);

            // match the headers to the data
            for (let i = 1; i < rows.length; i++) {
                let row = rows[i].split(",");
                let score = {};

                let city = row[14];
                // check if scoreStats has city
                if (!scoreStats[city]) {
                    scoreStats[city] = setUpAverages(headers);
                }

                if (schoolFuse.indexOf(row[4]) === -1) {
                    schoolFuse.push(row[4]);
                }

                for (let j = 0; j < row.length; j++) {
                    score[headers[j]] = row[j];
                    var value = parseInt(row[j]);

                    if (!isNaN(value)) {
                        scoreStats[headers[j]] += value;
                        scoreStats[headers[j] + "amount"]++;

                        scoreStats[city][headers[j]] += value;
                        scoreStats[city][headers[j] + "amount"]++;

                    }
                }
                scoreData.push(score);
            }

            for (let i of headers) {
                scoreStats[i] /= scoreStats[i + "amount"];
                delete scoreStats[i + "amount"];

                for (let j in scoreStats) {
                    if (typeof scoreStats[j] === "object") {
                        scoreStats[j][i] /= scoreStats[j][i + "amount"];
                        delete scoreStats[j][i + "amount"];
                    }
                }
            }

            schoolFuse = new Fuse(schoolFuse);
        });



    let city = document.getElementById("city-input");

    city.addEventListener("input", function () {
        let input = city.value;
        let res = schoolFuse.search(input)
        document.getElementById("schoolResult").innerText = res[0].item;
        
        let avg = setUpAverages(headers);
        
        let lowInc = 0;

        for (let i of scoreData) {
            if (i["School Name"] === res[0].item) {
                for (let j of headers) {
                    let value = parseInt(i[j]);
                    if (!isNaN(value)) {
                        avg[j] += value;
                        avg[j + "amount"]++;
                    }
                }

                lowInc = parseInt(i["Percentage of School-Aged Children Who Live in Low-Income Households"]);
            }
        }
        
        let relevant = [
            "Percentage of Grade 3 Students Achieving the Provincial Standard in Reading",
            "Percentage of Grade 3 Students Achieving the Provincial Standard in Writing",
            "Percentage of Grade 3 Students Achieving the Provincial Standard in Mathematics",
            "Percentage of Grade 6 Students Achieving the Provincial Standard in Reading",
            "Percentage of Grade 6 Students Achieving the Provincial Standard in Writing",
            "Percentage of Grade 6 Students Achieving the Provincial Standard in Mathematics",
            "Percentage of Grade 9 Students Achieving the Provincial Standard in Academic Mathematics",
            "Percentage of Grade 9 Students Achieving the Provincial Standard in Applied Mathematics",
        ];
        
        let totalAvg = 0;
        let count = 0;
        let cityAvg = 0;
        let cityAvgCount = 0;
        let ontarioAvg = 0;
        let ontarioAvgCount = 0;
        
        let cityName = "";
        for(let i of scoreData){
            if(i["School Name"] === res[0].item){
                cityName = i["City"];
                break;
            }
        }

        
        document.getElementById("cityResult").innerText = cityName;

        for (let i of relevant) {
            if (!isNaN(avg[i]) && avg[i] !== 0) {
                avg[i] /= avg[i + "amount"];
                totalAvg += avg[i];
                count++;
            }
            if (!isNaN(scoreStats[cityName][i]) && scoreStats[cityName][i] !== 0) {
                cityAvg += scoreStats[cityName][i];
                cityAvgCount++;
            }
            if (!isNaN(scoreStats[i]) && scoreStats[i] !== 0) {
                ontarioAvg += scoreStats[i];
                ontarioAvgCount++;
            }
            
        }

        totalAvg /= count;
        cityAvg /= cityAvgCount;
        ontarioAvg /= ontarioAvgCount;

        document.getElementById("schoolCirc").style = "--value:" + Math.round(totalAvg);
        document.getElementById("schoolCirc").innerText = totalAvg.toFixed(1) + "%";
        
        document.getElementById("cityCirc").style = "--value:" + Math.round(cityAvg);
        document.getElementById("cityCirc").innerText = cityAvg.toFixed(1) + "%";
        
        document.getElementById("ontarioCirc").style = "--value:" + Math.round(ontarioAvg);
        document.getElementById("ontarioCirc").innerText = ontarioAvg.toFixed(1) + "%";
        
        
        lowInc = 100-lowInc;
        document.getElementById("schoolCircInc").style = "--value:" + Math.round(lowInc);
        document.getElementById("schoolCircInc").innerText = lowInc.toFixed(1) + "%";
        
        let lowIncCity = scoreStats[cityName]["Percentage of School-Aged Children Who Live in Low-Income Households"];
        lowIncCity = 100-lowIncCity;
        document.getElementById("cityCircInc").style = "--value:" + Math.round(lowIncCity);
        document.getElementById("cityCircInc").innerText = lowIncCity.toFixed(1) + "%";
        
        let lowIncOntario = scoreStats["Percentage of School-Aged Children Who Live in Low-Income Households"];
        lowIncOntario = 100-lowIncOntario;
        document.getElementById("ontarioCircInc").style = "--value:" + Math.round(lowIncOntario);
        document.getElementById("ontarioCircInc").innerText = lowIncOntario.toFixed(1) + "%";

    });
}

function setUpAverages(headers) {
    let obj = {};
    for (let i of headers) {
        obj[i] = 0;
        obj[i + "amount"] = 0;
    }
    return obj;
}