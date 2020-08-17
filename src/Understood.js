import React from 'react';

class Understood extends React.Component {
    constructor() {
        super()
        this.state = {
            total_understood: 0,
            total: 6
        }
    }

    render() {
       return (
           <div>
               <p>You understand: {this.props.understood_total} out of {this.props.total}</p>
           </div>
       )
}
}

export default Understood;