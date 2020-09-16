import React from 'react';

const AnswerComponent = (props) => {
    console.log(" Props", props.data);
    return( 
        <div>
            <h1> Hi </h1>
            <h2> { props.data.answer } </h2>
        </div>
    );
}
export default AnswerComponent;