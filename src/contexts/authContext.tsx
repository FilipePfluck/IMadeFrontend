import { createContext, useContext, useEffect, useState } from 'react'
import Router, { useRouter} from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import api from '../services/api'

type Credentials = {
    email: string
    password: string
}

type AuthContextData = {
    signIn: (credentials: Credentials) => Promise<void>
    signOut: () => void
    isAuthenticated: boolean
    user: User
}

type User = {
    id: string
    email: string
    name: string
    is_provider: boolean,
    phone_number: string
}

const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function signOut(){
    destroyCookie(undefined, 'imade.token')

    authChannel.postMessage('signout')

    Router.push('/')
}

export function AuthProvider({children}){
    const { push } = useRouter()

    const [user, setUser] = useState<User>(()=>{
        const { 'imade.user': user }= parseCookies()

        if(user){
            console.log('tem user no cookie')
            return JSON.parse(user)
        }

        return {} as User
    })

    const isAuthenticated = !!user

    async function signIn({email, password}: Credentials){
        try{
            const response = await api.post('sessions', {
                email,
                password
            })

            const { token, user, ...rest } = response.data
            const { client, provider } = rest

            setCookie(undefined, 'imade.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })

            setUser({
                email,
                ...user,
                client,
                provider
            })

            //authChannel.postMessage('signin')

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            push('/dashboard')
        }catch(error){
            console.log(error)
        }
    }
    
    useEffect(()=>{
        authChannel = new BroadcastChannel('signout')

        authChannel.onmessage = (message) => {
            switch(message.data){
                case 'signout': 
                    signOut();
                    break;
                /* case 'signin':
                    Router.push('/dashboard')
                    break; */
                    
                default: 
                    break;
            }
        }
    },[])

    return(
        <AuthContext.Provider value={{signIn,isAuthenticated, user, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(AuthContext)}
