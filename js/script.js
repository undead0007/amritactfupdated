

function showhint1() {
    alert("You can use the inspector.");
}
function showhint2() {
    alert("Light ain't speaking english, but something near it.Need a translation to figure out what it is.");
}
function showhint3(){
    alert("Use exiftool to view the metadata.")
}
function showhint4(){
    alert("Use grep command.")
}
function getMD5(string) {
            return CryptoJS.MD5(string).toString();
        }
            let hashes=["f5d43814942169ed6e0d3233652b7d0f","8bfa203539ba1bad27407614832279b4","dfc1b7d52c1ae85857d0a542cca242d4", "7ec7b2a72f82ea4d298c8c3bc30f9d1d","5b0eac084edead758ff25fd9c9b2c0d0","a5e9177e3840bf89dbc464182396d431"]

            function submit_p(inputNumber) {
                const flag = document.getElementById("question" + inputNumber).value;
                let flagFound = false;
            
                for (let j = 0; j < hashes.length; j++) {
                    if (getMD5(flag) === hashes[j]) {
                        //alert("hooyah for Flag " + inputNumber);
                        flagFound = true;
                        document.getElementById("flagNumber").innerText = inputNumber;
                        document.getElementById("flagFoundMessage").style.display = "block";
                        setTimeout(function() {
                            document.getElementById("flagFoundMessage").style.display = "none";
                        }, 6000);
                        break; 
                        }
                }
            
                if (!flagFound) {
                    document.getElementById("flagNumber").innerText = inputNumber;
                    document.getElementById("flagNotFoundMessage").style.display = "block";
                    setTimeout(function() {
                        document.getElementById("flagNotFoundMessage").style.display = "none";
                    }, 6000);
                }
            }
            
    
   



            
            var dataset = [
                [41, 42, 43, 44, 45, 0], // keep the zero here
                [10, 9, 8, 7, 6, 0],
                [21, 16, 23, 1, 15, 0],
                [71, 12, 13, 17, 25, 0],
                [31, 5, 23, 24, 10, 0],
                [11, 2, 13, 41, 15, 0],
                [31, 5, 23, 24, 10, 0],
                [11, 2, 13, 41, 15, 0],
            ]

            function getBarChartData(i) {
                return barChartData = {
                    labels: ['Easy1', 'Easy2', 'Medium3', 'Hard4', 'Hard5'],
                    datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: [
                            '#17b06b', '#17b06b', '#ffce56', '#ef121b', '#ef121b'
                        ],
                        borderColor: [
                            '#17b06b', '#17b06b', '#ffce56', '#ef121b', '#ef121b'
                        ],
                        borderWidth: 1,
                        data: dataset[i - 1]
                    }]

                };
            }

            window.onload = function() {
                var numcharts = 8;
                for (let i = 1; i <= numcharts; i++) {
                    var ctx = document.getElementById('problem_id_' + i + '_chart').getContext('2d');
                    window.myBar = new Chart(ctx, {
                        type: 'bar',
                        data: getBarChartData(i),
                        options: {
                            tooltips: {
                                enabled: false,
                            },
                            responsive: false,
                            legend: {
                                display: false,
                            },
                            scales: {
                                yAxes: [{
                                    display: false
                                }],
                                xAxes: [{
                                    display: false
                                }]
                            }
                        }
                    });
                    myBar.canvas.parentNode.style.width = '80px';
                    myBar.canvas.parentNode.style.height = '20px';
                }
            };
