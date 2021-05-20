import React, {useCallback, useState } from 'react'

import { Form as UnformForm } from '@unform/web'

import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import * as S from './styles'

import Header from '../../components/Header'
import Input from '../../components/Input'
import TextArea from '../../components/Textarea'
import Button from '../../components/Button'

const CreateOrder = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const [daysWithAppointmentsInMonth, setDaysWithAppointmentsInMonth] = useState<number[]>([12, 13, 14, 17, 18, 19])

    const handleDateChange = useCallback((day: Date, modifiers: DayModifiers)=>{
        if(modifiers.available && !modifiers.disabled){
            setSelectedDate(day)
        }
    },[])

    const handleMonthChange = useCallback((month: Date)=>{
        setCurrentMonth(month)
    },[])

    return(
        <S.Container>
            <Header shouldGoBack/>
            <S.Content>
                <UnformForm onSubmit={()=>{}} style={{width: '100%'}}>
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
                                placeholder="Descrição"
                            />

                            <S.PriceInoutsContainer>
                                <Input 
                                    name="min"
                                    placeholder="Preço mínimo"
                                />
                                <Input 
                                    name="max"
                                    placeholder="Preço máximo"
                                />
                            </S.PriceInoutsContainer>

                            <Input 
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
                </UnformForm>
                <Button className="button">
                    Criar pedido
                </Button>
            </S.Content>
        </S.Container>
    )
}

export default CreateOrder