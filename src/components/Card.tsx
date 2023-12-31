    import { render, Container, Text, VerticalSpace, Button, Checkbox, Dropdown, DropdownOption, Columns, IconButton, IconPlus32, IconAdjust32, Divider, Textbox, Stack, useInitialFocus, Modal, IconChevronDown32, Toggle } from '@create-figma-plugin/ui';
    import { JSX, h } from 'preact';
    import { useState } from 'preact/hooks';
    import styles from '../styles.css';
    import LogotypeAbrahao from '../assets/LogoTypeAbrahao';
    import LogotypeCoalize from '../assets/LogoTypeCoalizee';
    import CoalizeGrafismo from '../assets/CoalizeGrafismo';
    import Empty from '../assets/Empty';
    import magic from '../magic-master/dist/magic.css'
    import '../magic-master/dist/magic.min.css'

    interface MagicAnimationProps {}
    interface MagicAnimationState {}

    type CardProps = {
        children: any
        investida: any
        inputValue: any
        className: any
    }

    function Card ({children, investida, inputValue, className}: CardProps){
        const isAbrahao = investida === 'Abrahão'
        const isCoalize = investida === 'Coalize'
        const isTyping = inputValue.length > 0
        const backgroundColor = (inputValue.length > 0) ? (isAbrahao ? '#CB001F' : isCoalize ? '#F5F7FA': 'blue') : 'transparent'
        //const backgroundColor = (inputValue.length > 0) ? (isAbrahao ? '#CB001F' : isCoalize ? '#F5F7FA': 'blue') : 'rgba(126, 126, 126, 0.12)'

        function styleCover(){
            return { overflow: 'hidden', backgroundColor, marginBottom: 0 , borderRadius: '8px', height: 152, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'} 
        }

        return (
            <div style={styleCover()} className={className}>
                {isTyping && (isAbrahao ? <LogotypeAbrahao />: isCoalize ? <LogotypeCoalize/> :  <LogotypeCoalize/>)}
                {isTyping && (isCoalize && <CoalizeGrafismo/>)}
                {(inputValue.length < 1) && <Empty className={styles.animacao}/>}
                <span className={isTyping ? (isCoalize? styles.coverTitleCoalize : isAbrahao? styles.coverTitleAbrahao: ''  ) : `${styles['title-before-preview']}` } >{children} </span>

            </div>
        )
    }

    export default Card