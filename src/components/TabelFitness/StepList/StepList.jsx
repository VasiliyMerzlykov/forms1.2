import React from 'react';
import StepItem from '../StepItem/StepItem';

function StepList(props) {

    const removeOnClick = (id) => props.onRemove(id)

    const sortResultSteps = props.resultSteps.sort((a, b) => {
        if (a.data.split('.').join('') < b.data.split('.').join('')) return 1;
        return -1;
    });

    return (
        <ul>
            {sortResultSteps.map(item =>
                <StepItem
                    item={item}
                    onRemove={() => removeOnClick(item.id)} />)}
        </ul>
    );
}

export default StepList;
