fetch('https://example.com/weather') // update this url
    .then(response => response.json())
    .then(data => {
        // process the weather data
        console.log(data);
    })
    .catch(error => {
        console.log('Error', error);
    });

//-------------------

fetch('https://api.example.com/articles', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    }
})
    .then(response => response.json())
    .then(data => {
        // process the article data
        console.log(data);
    })
    .catch(error => {
        console.log('Error:', error)
    })


//--------

fetch('https://example.com/data') 
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Error', error);
    });


//-----------

const data = { name: 'John', age: 25};

fetch('https://api.example.com/users', {
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
        console.log('User created: ', data);
    })
    .catch(error => {
        console.log('Error', error);
    })

//----------------------------

fetch('https://api.example.com/data')
    .then(response => {
        if (response.ok) {
            console.log('Request Successful');
        } else {
            console.log('Request failed with status', response.status);
        }
        console.log('Response headers', response.headers);
        return response.json()
    })
    .then(data => {
        console.log('Response data', data);
    }) 
    .catch(error => {
        console.log('Error', error)
    });

//------------------------

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log('Parsed data'. data);
        console.log('Specific value', data.key);
    })
    .catch(error => {
        console.log('Error', error);
    })