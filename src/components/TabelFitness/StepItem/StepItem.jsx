import React from 'react';

function StepItem(props) {
    return (
        <li key={props.item.id} style={{ listStyleType: 'none' }}><span>{props.item.data}</span><span style={{ marginLeft: '80px' }}>{props.item.sum}</span>
            <button onClick={props.onRemove}>Удалить</button>
        </li>
    );
};

export default StepItem
