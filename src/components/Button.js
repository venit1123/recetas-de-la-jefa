import  React from 'react'
import './Button.css'


const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES =  [
    'btn--medium',
    'btn--small'
]

export const Button = ({ // Props of the button Components
    children, 
    type, 
    onClick,
    buttonStyle, 
    buttonSize,
}) => {
    /*  Below variables will check if button and size style is already given,
        if it is, the style stays as it is, if not, the button style and size 
        are set to default ('btn--primary' and 'btn--medium')
    */ 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {/* DO: Come back to understand why children*/}
            {children}
        </button>
    )
}