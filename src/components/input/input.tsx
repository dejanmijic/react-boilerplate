import React, { FC, ReactNode } from 'react';

import './input.scss';

interface Props {
    id: string;
    value: string;
    onChange: (value: any) => void;
    placeholder: string;
    name: string;
    disabled?: boolean;
    errors?: any;
    label?: string;
    type?: "text" | "password" | "email";
    className?: string;
    icon?: ReactNode;
}

const Input: FC<Props> = ({
  onChange,
  placeholder,
  name,
  id,
  value = "",
  disabled = false,
  errors = {},
  label,
  type = "text",
  icon,
  className
}) => {
    return (
        <div className={`${className}`}>
            {label && <div>{label}</div>}
            <div className='wrapper'>
                <div className='wrapper__icon'>{icon}</div>
                <input
                    placeholder={placeholder}
                    className ='wrapper__input'
                    name={name}
                    onChange={onChange}
                    value={value}
                    id={id}
                    disabled={disabled}
                    type={type}
                />
            </div>
            {value ? (
                errors[name] &&
                <div className='input-error'>
                    {errors[name]}
                </div>
                
            ): ''}
        </div>
    );
};

export default Input;