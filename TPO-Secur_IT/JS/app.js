
    let url = 'https://randomuser.me/api/?results=3' //variable donde hacemos referencia al origen de los datos
    fetch(url) //solicitud a la url (promesa)
        .then(res => res.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
        .then(data => {
            let author = data.results
            let output = ""
            author.forEach(function (lists) {
                output += `
                <div>
                    <div>
                        <dl class="list-group">
                            <dt><img src="${lists.picture.large}"></dt>
                            <dt>Nombre: ${lists.name.first}</dt>
                            <dt>Celular:${lists.cell}</dt>
                            <dt>Email:${lists.email}</dt>
                            <dt>Pais: ${lists.location.city}</dt>
                            <dt>Ciudad: ${lists.location.country}</dt>
                        </dl>
                    </div>
                </div> `
            })
            document.getElementById('output').innerHTML = output
        })
        .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch


       