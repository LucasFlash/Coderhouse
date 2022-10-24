
let container1 = document.getElementById("container1");

fetch('../json/listado.json')
            .then( (res) => res.json())
            .then( (prod) => {
                    let {id, nombre, precio, tiempo, dispositivos, descuentoapp} = prod[0]
                    container1.innerHTML +=  `
                    <div class="card border-primary mb-3 text-center" style="max-width: 15rem; margin:4px">
                        <div class="card-header name" style="max-width: 15rem; margin:4px">${nombre}</div>
                            <div class="card-body">
                            <h3 class="card-title">Tiempo de Transmisión Diaria</h3>
                            <h4 class="card-title">${tiempo} Hs</h4>
                            </div>
                            <div class="card-body">
                            <h3 class="card-title">Dispositivos</h3>
                            <h4 class="card-title">${dispositivos}</h4>
                            </div>
                            <div class="card-body">
                            <h3 class="card-title">% Descuento en la App Móvil</h3>
                            <h4 class="card-title">${descuentoapp} %</h4>
                            </div>                        
                            </div>
                    
                    `
                
            })
            .catch((error) => {
                console.log(error)
        
});


let container2 = document.getElementById("container2");

        fetch('../json/listado.json')
                        .then( (res) => res.json())
                        .then( (prod) => {
                                let {id, nombre, precio, tiempo, dispositivos, descuentoapp} = prod[1]
                                container2.innerHTML +=  `
                                <div class="card border-primary mb-3 text-center" style="max-width: 15rem; margin:4px">
                                    <div class="card-header name" style="max-width: 15rem; margin:4px">${nombre}</div>
                                        <div class="card-body">
                                        <h3 class="card-title">Tiempo de Transmisión Diaria</h3>
                                        <h4 class="card-title">${tiempo} Hs</h4>
                                        </div>
                                        <div class="card-body">
                                        <h3 class="card-title">Dispositivos</h3>
                                        <h4 class="card-title">${dispositivos}</h4>
                                        </div>
                                        <div class="card-body">
                                        <h3 class="card-title">% Descuento en la App Móvil</h3>
                                        <h4 class="card-title">${descuentoapp} %</h4>
                                        </div>                        
                                        </div>
                                
                                `
                            
                        })
                        .catch((error) => {
                            console.log(error)
                    
});


let container3 = document.getElementById("container3");

fetch('../json/listado.json')
            .then( (res) => res.json())
            .then( (prod) => {
                    let {id, nombre, precio, tiempo, dispositivos, descuentoapp} = prod[2]
                    container3.innerHTML +=  `
                    <div class="card border-primary mb-3 text-center" style="max-width: 15rem; margin:4px">
                        <div class="card-header name" style="max-width: 15rem; margin:4px">${nombre}</div>
                            <div class="card-body">
                            <h3 class="card-title">Tiempo de Transmisión Diaria</h3>
                            <h4 class="card-title">${tiempo} Hs</h4>
                            </div>
                            <div class="card-body">
                            <h3 class="card-title">Dispositivos</h3>
                            <h4 class="card-title">${dispositivos}</h4>
                            </div>
                            <div class="card-body">
                            <h3 class="card-title">% Descuento en la App Móvil</h3>
                            <h4 class="card-title">${descuentoapp} %</h4>
                            </div>                        
                            </div>
                    
                    `
                
            })
            .catch((error) => {
                console.log(error)
        
});
