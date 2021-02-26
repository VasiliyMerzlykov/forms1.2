import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import StepList from './StepList/StepList';
import AddForm from './AddForm/AddForm';

function TabelFitness() {
    const [steps, setstate] = useState({ data: "", sum: "" });
    const [resultSteps, setresultSteps] = useState([]);

    const onChangeSteps = e => {
        setstate(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const onSubmit = e => {
        e.preventDefault();
        const elStaps = { sum: steps.sum, data: steps.data, id: nanoid() }
        let oldStep = resultSteps.find(item => item.data === elStaps.data)
        if (oldStep) {
            setresultSteps(prev => prev.map(item => {
                if (item.data === oldStep.data) return { ...item, sum: +steps.sum + +oldStep.sum }
                return item;
            }))
        } else setresultSteps(prev => ([...prev, elStaps]));
        setstate({ data: "", sum: "" });
    };

    const removeOnClick = (id) => {
        setresultSteps(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div>
            <AddForm onSubmit={onSubmit} onChange={onChangeSteps} {...steps} />
            <div style={{ display: "flex", flexDirection: "row" }}><div>Data</div><div style={{ marginLeft: '180px' }}>Steps</div></div>
            <StepList resultSteps={resultSteps} onRemove={removeOnClick} />
        </div>
    );
};

export default TabelFitness;
