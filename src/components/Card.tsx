    import { render, Container, Text, VerticalSpace, Button, Checkbox, Dropdown, DropdownOption, Columns, IconButton, IconPlus32, IconAdjust32, Divider, Textbox, Stack, useInitialFocus, Modal, IconChevronDown32, Toggle } from '@create-figma-plugin/ui';
    import { JSX, h } from 'preact';
    import { useState } from 'preact/hooks';
    import styles from '../styles.css';

    type CardProps = {
        children: any
        investida: any
        inputValue: any
    }

    function Card ({children, investida, inputValue}: CardProps){
        const backgroundColor = (inputValue.length > 0) ? (investida === 'Abrahão' ? '#CB001F' : 'blue') : '#F5F5F5'
       
        function styleAbrahao(){
            return {backgroundColor, marginBottom: 0 , borderRadius: '8px', height: 157, display: 'flex', alignItems: 'center', justifyContent: 'center'} 
        }

        return (
            <div style={styleAbrahao()}>
            <span className={inputValue < 1 ? '': styles.coverTitleAbrahao} style={{color: '#AAAAAA'}}>{children} </span>

        </div>
        )
    }

    export default Card