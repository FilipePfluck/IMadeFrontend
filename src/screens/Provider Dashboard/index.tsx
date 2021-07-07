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

const ProviderDashboard = ()=>{
    const { user } = useAuth()

    const [acceptedOrders, setAcceptedOrders] = useState([])
    const [pendingOffers, setPendingOffers] = useState([])

    useEffect(()=>{
        api.get(`/orders/accepted/provider/${user.provider.id}`).then(response => {
            setAcceptedOrders(response.data)
        })
    },[])

    useEffect(()=>{
        api.get(`/offers/pending/provider/${user.provider.id}`).then(response => {
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
                    <h2>Suas propostas</h2>
                    <S.List>
                        {pendingOffers.length === 0 
                            ?   <S.EmptyContentText>
                                    Parece que você não tem nenhuma proposta pendente
                                </S.EmptyContentText>
                            : pendingOffers.map(order => (
                                <Order 
                                    name={order.title}
                                    description={order.description}
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