export type Client = {
    id: string
    city: string
    neighborhood: string
    street: string
    number: number
}

export type Provider = {
    id: string
    city: string
    score: string
    avaliations: number
}

export type User = {
    user:{id: string
    email: string
    name: string
    is_provider: boolean,
    phone_number: string}
    client?: Client
    provider?: Provider
}