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
                        <Order 
                            name={order.title}
                            day="8 de maio"
                            hour="16 horas"
                            provider="teste"
                        />
                    ))}
                </S.Grid>
            </S.Content>
        </S.Container>
    )
}

export default Orders