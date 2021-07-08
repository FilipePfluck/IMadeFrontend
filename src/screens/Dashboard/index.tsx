import React, { useState } from 'react'
import { format, getDate, getHours } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

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
            const data = response.data.map(response => {
                const date = new Date(response.date)

                const day =  format(date, 'PPP', {
                    locale: ptBR
                })

                const hour = format(date, 'p', {
                    locale: ptBR
                })

                return {
                    ...response,
                    day,
                    hour

                }
            })
            setAcceptedOrders(data)
        })
    },[])

    useEffect(()=>{
        api.get(`/orders/pending/client/${user.client.id}`).then(response => {
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
                                    name={order.title}
                                    provider={order.provider.user.name}
                                    day={order.day}
                                    hour={order.hour}
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
                                <Link href={`/details/${order.id}`}>
                                    <a>
                                    <Order 
                                        name={order.title}
                                        description={order.description}
                                    />
                                    </a>
                                </Link>
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