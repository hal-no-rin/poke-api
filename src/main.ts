const axios = require('axios')

const getUser = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1')

        console.log(response.data.name)
    } catch (error) {
        console.error(error)
    }
}

getUser()