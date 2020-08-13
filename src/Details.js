import React from 'react';

function Details(props) {
    if (!props.show) {
        return null;
    }

    return (
        <div>
            <h3>Features of functional components</h3>
            <ul>
                <li>Used to display a section of website</li>
                <li>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation</li>
                <li>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</li>
                <li>Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. </li>
            </ul>
        </div>
    )
}

export default Details;