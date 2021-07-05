import React, {useCallback, useRef, useState } from 'react'

import { Form as UnformForm } from '@unform/web'
import {FormHandles} from '@unform/core'
import * as yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'

import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import * as S from './styles'

import Header from '../../components/Header'
import Input from '../../components/Input'
import TextArea from '../../components/Textarea'
import Button from '../../components/Button'
import api from '../../services/api'
import { useAuth } from '../../contexts/authContext'

interface CreateOrder {
    title: string
    description: string
    min: string
    max: string
    hour: string
}

const CreateOrder = () => {
    const { user } = useAuth()

    const formRef = useRef<FormHandles>(null)

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const handleDateChange = useCallback((day: Date, modifiers: DayModifiers)=>{
        if(modifiers.available && !modifiers.disabled){
            setSelectedDate(day)
        }
    },[])

    const handleMonthChange = useCallback((month: Date)=>{
        setCurrentMonth(month)
    },[])

    const handleSubmit = async (data: CreateOrder) =>{
        try{
            formRef.current?.setErrors({})

            const schema = yup.object().shape({
                title: yup.string()
                    .required('Preencha o título'),
                description: yup.string()
                    .required('Preencha a descrição'),
                min: yup.string()
                    .required('Preencha o preço mínimo'),
                max: yup.string()
                    .required('Preencha o preço máximo'),
                hour: yup.string()
                    .required('Preencha o horário')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            const date = new Date(selectedDate)

            const [hour, minute] = data.hour.split(':')

            date.setHours(Number(hour))
            date.setMinutes(Number(minute))

            console.log({
                title: data.title,
                description: data.description,
                min: Number(data.min),
                max: Number(data.max),
                date: date.toISOString(),
                client_id: user.client.id,
                city: user.client.city
            })

            await api.post('/orders', {
                title: data.title,
                description: data.description,
                min: Number(data.min),
                max: Number(data.max),
                date: date.toISOString(),
                client_id: user.client.id,
                city: user.client.city
            })

        }catch (err){
            if(err instanceof yup.ValidationError){
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors)

                return
            }

            /* addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Não foi possível fazer login. Verifique as credenciais'
            }) */
        }
    }

    return(
        <S.Container>
            <Header shouldGoBack/>
            <S.Content>
                <UnformForm 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    style={{width: '100%'}}
                >
                    <S.Form>
                        <div>
                            <h1>Crie um pedido</h1>
                            <p>Algum prestador de serviço pode se apresentar para te atender</p>

                            <Input 
                                name="title"
                                placeholder="Título"
                            />
                            <TextArea 
                                name="description"
                                placeholder="Informe detalhadamente as instruções do seu pedido"
                            />

                            <S.PriceInoutsContainer>
                                <Input 
                                    type="number"
                                    name="min"
                                    placeholder="Preço mínimo"
                                />
                                <Input 
                                    type="number"
                                    name="max"
                                    placeholder="Preço máximo"
                                />
                            </S.PriceInoutsContainer>

                            <Input 
                                type="time"
                                name="hour"
                                placeholder="Hora"
                            />
                        </div>
                        <div>
                            <S.Calendar>
                                <DayPicker 
                                    fromMonth={new Date()}
                                    weekdaysShort={['D','S','T','Q','Q','S','S']}
                                    modifiers={{
                                        available: {daysOfWeek: [0,1,2,3,4,5,6]}
                                    }}
                                    selectedDays={selectedDate}
                                    onDayClick={handleDateChange}
                                    onMonthChange={handleMonthChange}
                                    months={[
                                        'Janeiro',
                                        'Fevereiro',
                                        'Março',
                                        'Abril',
                                        'Maio',
                                        'Junho',
                                        'Julho',
                                        'Agosto',
                                        'Setembro',
                                        'Outubro',
                                        'Novembro',
                                        'Dezembro'
                                    ]}    
                                />
                            </S.Calendar>
                        </div>
                    </S.Form>
                    <Button type="submit" className="button">
                        Criar pedido
                    </Button>
                </UnformForm>
            </S.Content>
        </S.Container>
    )
}

export default CreateOrder