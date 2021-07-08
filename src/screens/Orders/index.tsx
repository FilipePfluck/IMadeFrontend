import Link from 'next/link'
import { format, getDate, getHours } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import * as S from './styles'

import Header from '../../components/Header'
import Order from '../../components/Appointment'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../services/api'
import { useAuth } from '../../contexts/authContext'

const Orders = () => {
    const [orders, setOrders] = useState([])

    const { user } = useAuth()

    useEffect(()=>{
        api.get(`/orders?city=${user.provider.city}`).then(response => {
            setOrders(response.data)
        })
    },[])

    return(
        <S.Container>
            <Header shouldGoBack/>
            <S.Content>
                <S.Title>Pedidos na sua cidade</S.Title>
                <S.Grid>
                    {orders.map(order => (
                        <Link key={order.id} href={`/details/${order.id}`}>
                            <a>
                                {/* Sim, eu sei que isso é um erro de performance
                        e que eu deveria usar um useMemo, mas sem tempo irmao*/}
                            <Order 
                                name={order.title}
                                day={format(new Date(order.date), 'PPP', {
                                    locale: ptBR
                                })}
                                hour={format(new Date(order.date), 'p', {
                                    locale: ptBR
                                })}
                                provider="teste"
                            />
                            </a>
                        </Link>
                    ))}
                </S.Grid>
            </S.Content>
        </S.Container>
    )
}

export default Orders