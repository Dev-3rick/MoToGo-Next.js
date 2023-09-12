import axios from 'axios'

export const api = axios.create({
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'https://back-end-moto-go.fly.dev/api'
            : 'https://back-end-moto-go.fly.dev/api',
})
