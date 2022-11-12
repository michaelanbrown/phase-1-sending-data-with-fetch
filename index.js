const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
         'Content-type': 'application/json',
         'Accept': 'application/json'
        },
        body:  JSON.stringify({
         name: `${name}`,
         email: `${email}`
        })
     })
     .then(function(res) {
        return res.json();
     })
     .then(function(object) {
        const idValue = document.createElement('div');
        idValue.innerHTML = `${object.id}`;
        document.body.appendChild(idValue);
        console.log(object);
     })
     .catch(function (error) {
        // alert('Bad things!');
        const catchMessage = document.createElement('div');
        catchMessage.innerHTML = 'Unauthorized Access';
        document.body.appendChild(catchMessage);
        console.log(error.message);
     });
}