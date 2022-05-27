import React from 'react'

function NewForm({placeholder, label, type}) {
    return (
        
        <div>
            <form>
                <label for={placeholder}>
                    {label}
                </label>
                <input id={placeholder} type={type} placeholder={placeholder} />

            </form>
        </div>
    )
}

export default NewForm