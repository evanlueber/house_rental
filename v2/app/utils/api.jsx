import axios from 'axios'

const uri = 'http://localhost:5000';

const login = async (email, password) => {
    const res = await axios.post(`${uri}/login`, {
        email: email,
        password: password
    })

    return res;
}

const register = async (email, password, name, address, city, postalCode) => {
    const res = await axios.post(`${uri}/register`, {
        email: email,
        password: password,
        name: name,
        address: address,
        city: city,
        postalCode: postalCode
    })

    return res;
}

const getEntrys = async () => {
    const res = await axios.get(`${uri}/entrys`)

    return res.data.entrys;
}

const getEntry = async (id) => {
    const res = await axios.get(`${uri}/entry/${id}`)

    return res;
}

const getEntrysByUserId = async (userId) => {
    const res = await axios.get(`${uri}/entrys/${userId}`)

    return res;
}

const createEntry = async (title, description, amenities, price, rooms, postal, city, address, image, userId) => {
    try {
        const res = await axios.post(`${uri}/entry`, {
            title: title,
            description: description,
            amenities: amenities,
            price: price,
            rooms: rooms,
            postal: postal,
            city: city,
            address: address,
            image: image,
            userId: userId
        });

        if (res.status === 200) {
            return res.data;
        } else {
            throw new Error(`Failed to create entry: ${res.statusText}`);
        }
    } catch (error) {
        console.error('Error creating entry:', error.message);
        throw error; 
    }
}


const api = {
    login,
    register,
    getEntrys,
    getEntry,
    getEntrysByUserId,
    createEntry
}

export default api;