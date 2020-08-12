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
        this.setState((prevState) => {
            return {showMore: !prevState.showMore}
        }
    
        )
    }



    render() {
       return (
           <div>
               <h1>About Functional Components</h1>
            <button onClick={this.handleChange}>{this.state.showMore ? "Show Less" : "Show More"}</button> 
           </div>
       )
}
}


export default FunctionalComponents;