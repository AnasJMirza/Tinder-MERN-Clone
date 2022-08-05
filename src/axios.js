import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-anas.herokuapp.com/',
});

export default instance;