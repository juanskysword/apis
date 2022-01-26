

const leia =document.getElementById("Leia")

const residents = document.getElementById("res");


function save (){
    axios
    .get ("https://swapi.dev/api/planets/2")

    .then(res => {
         console.log(res.data.residents)
         const pop = res.data.residents
         for (let i = 0; i < pop.length; i++) {

            axios
            .get(`${pop[i]}`)
            .then(res => {
                const body =document.body;
                const h2 = document.createElement("h2")
                let name = document.createTextNode(`${res.data.name}`);
                h2.appendChild(name);
                body.appendChild(h2);
            })
         }
        })
}
        //  console.log (pop[i])
    
       

        
residents.addEventListener('click', save);