export interface ClientModelForm {
    id?: number
    name: string
    email: string
    phone: string
}

export interface ClientModelTable {
    id: number
    name: string
    email: string
    phone: string
}

export interface SaveClientRequest {
    name: string
    email: string
    phone: string
}

export interface SaveClientResponse {
    id: number
    name: string
    email: string
    phone: string
}

export interface UpdateClientRequest {
    id: number
    name: string
    email: string
    phone: string
}

export interface UpdateClientResponse {
    id: number
    name: string
    email: string
    phone: string
}

export interface DetailClientResponse {
    id: number
    name: string
    email: string
    phone: string
}

export interface ListClientResponse {
    clients: ClientModelTable[]
}
