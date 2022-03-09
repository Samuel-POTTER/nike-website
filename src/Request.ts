import axios from 'axios'

export const getShoes = async () => {
    const res = await axios('https://nike-products.p.rapidapi.com/shoes/men-shoes', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'nike-products.p.rapidapi.com',
            'x-rapidapi-key': '6613f48683msha6096af27abd66fp120c9ajsne53c611c85b1'
        }
    })
    return res.data
}