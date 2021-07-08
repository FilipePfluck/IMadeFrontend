export type Order = {
    id: string
    client_id: string
    provider_id?: string
    title: string
    description: string
    min: string
    max: string
    date: Date
    status: string
    city: string
}