import React from 'react';

function AddForm(props) {

    const onChangeSteps = e => {
        props.onChange(e);
    };

    return (
        <form onSubmit={props.onSubmit} style={{ display: "flex" }}>
            <label>Дата<br /><input name="data" onChange={onChangeSteps} value={props.data}></input></label>
            <label>Шаги<br /><input name="sum" onChange={onChangeSteps} value={props.sum}></input></label>
            <button>OK</button>
        </form>
    );
}

export default AddForm;