import React from 'react';

type buttonProps = {
    action : () => void;
    value: string;
    bgColor?: string;
    fontColor?: string;
    classname?: string;
}

const Button = ({action, value, bgColor, fontColor, classname}: buttonProps) => (
    <button 
        onClick={action} 
        className={classname} 
        style={{backgroundColor: bgColor, color: fontColor}}
    >{value}</button>
);

export default Button;