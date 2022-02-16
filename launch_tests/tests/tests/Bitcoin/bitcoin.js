

let bitcoin = fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
.then(result => result.json())
.then(result => {
    return {
        valeurs: Object.values(result.bpi),
        dates: Object.keys(result.bpi),
    };
})
console.log(bitcoin);


let tauxChange = fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
.then(result => result.json())
console.log(tauxChange.usd);


Promise.all([bitcoin, tauxChange])
.then(([bitcoin, tauxChange]) => {

    console.log(tauxChange.usd);
    let data = {
        labels: bitcoin.dates,
        datasets: [{
            label: 'Cours du bitcoin sur le dernier mois en euros',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            // devrait etre tauxChange.usd à la place du 2
            data: bitcoin.valeurs.map(val => val * 2),
        }]
    };
    
    let config = {
        type: 'line',
        data: data,
        options: {}
    };

    new Chart(
        document.getElementById('chart'),
        config
    );  
});
