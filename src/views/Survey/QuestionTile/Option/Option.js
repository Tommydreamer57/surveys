import React from 'react';

function Option(props) {
    return (
        <div className="Option">
            {props.option.label}
            <input type="radio" />
        </div>
    )
}

export default Option
