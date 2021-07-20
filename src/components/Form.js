import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";

const Form = () => {
    const [value, setValue] = useState('')

    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {

            alert.show('Note is created', 'success')
            setValue('')
        } else {
            alert.show('Please input name of note')
        }


    }


    return (
        <form className={'pt-3'} onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" className="form-control"
                placeholder={'Input your note'}
                       value={value}
                       onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    );
};

export default Form;