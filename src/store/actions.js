import axios from 'axios'

export const getProductResults = ({ commit }, query) => {
    axios.get(`https://aix.salesfire.co.uk/api/searcha?client_id=3f32397c-21c6-47e5-9ebd-e9865ea03470&query=${query}&limit=20&page=1`)
    .then(response => {
        commit('SET_PRODUCTS', response.data)
        console.log(response.data)
    })
}