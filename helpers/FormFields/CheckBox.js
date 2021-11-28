import React from 'react';
import {useField} from "formik";

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="form-group mb-3">
                <label htmlFor={props.id || props.name}>{label}</label>
                <input className="text-input form-control " {...field} {...props}/>
                {meta.touched && meta.error ? (
                    <div className="error text-danger" style={{fontSize:'85%'}}>{meta.error}</div>
                ) : null}
            </div>
        </>
    )
}

export default TextInput

