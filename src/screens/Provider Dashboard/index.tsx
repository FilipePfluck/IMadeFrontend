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

const ProviderDashboard = ()=>{
    const { user } = useAuth()

    const [acceptedOrders, setAcceptedOrders] = useState([])
    const [pendingOffers, setPendingOffers] = useState([])

    useEffect(()=>{
        api.get(`/orders/accepted/provider/${user.provider.id}`).then(response => {
            console.log(response.data)

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
        api.get(`/offers/pending/provider/${user.provider.id}`).then(response => {
            console.log(response.data)
            setPendingOffers(response.data)
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
                    <h2>Suas propostas</h2>
                    <S.List>
                        {pendingOffers.length === 0 
                            ?   <S.EmptyContentText>
                                    Parece que você não tem nenhuma proposta pendente
                                </S.EmptyContentText>
                            : pendingOffers.map(order => (
                                <Order 
                                    name={order.order.title}
                                    description={'R$' + order.price}
                                />
                            ))
                         }

                        <Link href="/orders">
                            <Button>Pesquisar pedidos</Button>
                        </Link>
                    </S.List>
                </S.Section>
            </S.Content>
        </S.Container>
    )
}

export default ProviderDashboard