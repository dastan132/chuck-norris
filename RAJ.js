document.querySelector('.get-facts').addEventListener('click', getFacts);

function getFacts(e){
    // //console.log('get facts');
    // const number = document.querySelector('input[type = "number"]').value;
    // //console.log(number);

    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", `https://api.irkfdb.in/fact/random/${number}`, true);
    // xhr.setRequestHeader('Authorization', 'Bearer ' + 'PSWAFX43EVP0U0VsKcsWDdwXFxhD90baBJndHllD');


    // xhr.onload = function (){
    //     if(this.status === 200){
    //         const response = JSON.parse(this.responseText);
    //         console.log(response);
    //     }
    // }
    fetch('https://www.omdbapi.com/?s=inception', {
        method: 'GET',
        headers: {
            'apikey': '8de5d0cf',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.text())
    .then((response) => updateResponse(response))
    .catch(error => console.error(error));

    e.preventDefault();
}