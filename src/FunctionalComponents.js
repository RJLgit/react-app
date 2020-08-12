import React from 'react';

class FunctionalComponents extends React.Component {
    constructor() {
        super()
        this.state = {
            showMore: false
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange() {

    }



    render() {
       return (
           <div>
               <h1>About Functional Components</h1>
            <button onClick={this.handleChange}>Show more</button> 
           </div>
       )
}
}


export default FunctionalComponents;