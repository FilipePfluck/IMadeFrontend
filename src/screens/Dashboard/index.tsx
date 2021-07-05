import React, { useState } from 'react'

import Link from 'next/link'

import * as S from './styles'

import Header from '../../components/Header'
import Appointment from '../../components/Appointment'
import Order from '../../components/Order'
import Button from '../../components/Button'
import { useAuth } from '../../contexts/authContext'
import { useEffect } from 'react'
import api from '../../services/api'

const Dashboard = ()=>{
    const { user } = useAuth()

    const [acceptedOrders, setAcceptedOrders] = useState([])
    const [pendingOrders, setPendingOrders] = useState([])

    useEffect(()=>{
        api.get(`/orders/accepted/client/${user.client.id}`).then(response => {
            setAcceptedOrders(response.data)
        })
    },[])

    useEffect(()=>{
        api.get(`/orders/pending/client/${user.client.id}`).then(response => {
            console.log(response.data)
            setPendingOrders(response.data)
        })
    },[])

    return(
        <S.Container>
            <Header/>
            <S.Content>
                <S.Section>
                    <h2>Seus agendamentos</h2>
                    <S.List>
                        {acceptedOrders.length === 0 
                            ?   <S.EmptyContentText>
                                    Parece que você não tem nenhum agendamento marcado
                                </S.EmptyContentText>
                            : acceptedOrders.map(order => (
                                <Appointment
                                    name="Faxina simples"
                                    provider="prestador 1"
                                    day="15 de Maio"
                                    hour="16 horas"
                                />
                            ))
                         }
                    </S.List>
                </S.Section>
                <S.Section>
                    <h2>Seus pedidos</h2>
                    <S.List>
                        {pendingOrders.length === 0 
                            ?   <S.EmptyContentText>
                                    Parece que você não tem nenhum pedido pendente
                                </S.EmptyContentText>
                            : pendingOrders.map(order => (
                                <Order 
                                    name={order.title}
                                    description={order.description}
                                />
                            ))
                         }

                        <Link href="/create-order">
                            <Button>Criar novo pedido</Button>
                        </Link>
                    </S.List>
                </S.Section>
            </S.Content>
        </S.Container>
    )
}

export default Dashboard