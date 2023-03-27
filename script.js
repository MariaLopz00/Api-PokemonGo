

const apiPoke = async () => {

    try {

        const abilityColors={
            blaze:"linear-gradient(0deg, rgba(245,0,0,0.9780287114845938) 0%, rgba(245,106,0,1) 100%)",
            overgrow: "linear-gradient(0deg, rgba(0,245,148,0.9780287114845938) 0%, rgba(0,245,45,1) 100%) ",
            torrent: "linear-gradient(0deg, rgba(34,105,195,1) 0%, rgba(45,161,253,1) 100%)",
            "shield-dust":"linear-gradient(0deg, rgba(120,8,175,0.9780287114845938) 0%, rgba(245,0,231,1) 100%)",
        }

        let targeta = ' <div class="row row-cols-1 row-cols-md-4 g-4 " >'


        for (let i = 1; i < 50; i++) {

             let promesa = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
             const respuesta = await promesa.json();


                const habilidad= respuesta.abilities[0].ability.name;

                console.log(habilidad);

                const estilo= abilityColors[habilidad];

                const styleTodo=  "linear-gradient(38deg, rgba(0,212,148,1) 0%, rgba(112,0,212,1) 100%)"
                
                targeta +=

                ` 
    
                    <div class="col   square has-transition"  tabindex="0">
                        <div class="card" style="background: ${(estilo)?  estilo: styleTodo  } ;" >
                            <img src="${respuesta.sprites.front_default}" style="width: 100px;" class="card-img-top" alt="...">
                            <div class="card-body">
                                <strong><h5 class="card-title" style="color: black;"> Nombre: ${respuesta.name}</h5></strong>
                                <h5  style="color: #727272;"> Habilidades: ${respuesta.abilities[0].ability.name} </h5>
                            </div>
                        </div>
                    </div>
    
    
                 `

        }
        targeta += '</div>'

        document.getElementById('targeta').innerHTML = targeta;


    } catch (error) {
        console.log(`Error: ${error}`)
    }

}
apiPoke()