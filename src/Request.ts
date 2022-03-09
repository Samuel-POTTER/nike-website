import axios from 'axios'

export const getShoes = async () => {
    const res = await axios('https://nike-products.p.rapidapi.com/shoes/men-shoes', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'nike-products.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.REACT_APP_NIKE_KEY}`
        }
    })
    return res.data
}