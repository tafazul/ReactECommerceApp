import React from 'react';
import withhoc from './hoc';

const NormalComponent = (props) => {
    console.log(props);
    return (
    <div>
        A normal component
    </div>
)}

export default withhoc(NormalComponent);