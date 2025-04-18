async function fetchData() {

    try {

        const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!res.ok) {
            throw new Error("No se ha podido acceder a los datos");k
        };

        const data = await res.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.querySelector('#pokemonSprite');

        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';

    } catch (error) {
        
        console.error(error);
    
    };

};


/*fetch(`https://pokeapi.co/api/v2/${pokemonName}`)
.then(res => {

    if (!res.ok) {
        throw new Error("No se pudo acceder a la información")
    }

    const data = res.json();

    return data;

})
.then(data => {

    const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.querySelector('#pokemonSprite');

    imgElement.src = pokemonSprite;
    imgElement.style.display = 'block';
    
})
.catch(error => console.error(error))*/