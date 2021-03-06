import React, {InputHTMLAttributes, useEffect, useRef, useState, useCallback} from 'react'
import { useField } from '@unform/core'

import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'

import * as S from './styles'

interface inputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string
    icon?: React.ComponentType<IconBaseProps>
    containerStyle?: object
}

const Input: React.FC<inputProps> = ({name, containerStyle={}, icon: Icon,...rest}) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    
    const inputRef = useRef<HTMLInputElement>(null)
    
    const { defaultValue, fieldName, registerField, error } = useField(name)

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    },[fieldName, registerField])

    const handleInputFocus = useCallback(()=>{
        setIsFocused(true)
    },[])

    const handleInputBlur =  useCallback(()=>{
        setIsFocused(false)

        setIsFilled(!!inputRef.current?.value)
    },[])

    return(
        <S.Container style={containerStyle} isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
            {Icon && <Icon size={20}/>}
            <input 
                
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue} 
                ref={inputRef} 
                {...rest}
            />
            {error && 
                <S.Error title={error}>
                    <FiAlertCircle color="#c53030" size={20} />
                </S.Error>         
            }
        </S.Container>
    )
} 

export default Input