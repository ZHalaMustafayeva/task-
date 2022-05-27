import React, { useState } from 'react'
import NewForm from './NewForm'
function Confing() {
    const [isShow, setShow] = useState(true)
    // const [data, setData] = useState(
    //     [
    //         {
    //             label: ,
    //             type: 'date',
    //             placeholder: 'placeholder'
    //         }
    //     ]

    // )
    const [ label, setLabel] = useState('')
    const [ placeholder, setPlaceholder] = useState('')
    const [ type, setType] = useState('')

    return (
        <div className='wrapper'>
            <div>
                <h1>Form</h1>
                <form>
                    <label for="label">
                        Label
                    </label>
                    <input id='label' onChange={event => setLabel(event.target.value)} />

                    <label for="placeholder">
                        placeholder
                    </label>
                    <input id='placeholder' onChange={event => setPlaceholder(event.target.value)}  />

                    <label for="type">
                        type
                    </label>
                    <input id='type' onChange={event => setType(event.target.value)} />

                    
                </form>
                <button onClick={()=>setShow(true)}>Add To Form</button>
                <button onClick={()=>setShow(false)}>Remove Form</button>

            </div>


            {isShow ? <NewForm placeholder={placeholder} type={type} label = {label} /> : false}


        </div>
    )
}

export default Confing