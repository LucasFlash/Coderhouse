let contenedor = document.getElementById("contenedor");



fetch('servicios.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((prod) => {
            let {id, nombre, precio} = prod
            contenedor.innerHTML +=  `
            <div class="card border-primary mb-3 text-center" style="max-width: 15rem; margin:4px">
                <div class="card-header name" style="max-width: 15rem; margin:4px">${nombre}</div>
                <div class="card-body">
                    <h4 class="card-title">$${precio}</h4>
                    </div>
            </div>
            
            `
        })
    })
    .catch((error) => {
        console.log(error)

    });
    
