import {  forwardRef } from 'react';
import { IField } from './field.interface';


const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, type = 'text', style, Icon, ...rest }, ref) => {
    return (
      <div className="">
        <label>
          <label className='label-row'>{Icon && <Icon />}{placeholder}</label>
          <input ref={ref} type={type} placeholder={placeholder} {...rest}  className="input" />
        </label>
        {error && <div className="erorrs-valid-auth">{error}</div>}
      </div>
    );
  }
);

Field.displayName = 'Field'
export default Field