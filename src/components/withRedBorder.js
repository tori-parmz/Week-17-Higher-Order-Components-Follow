import { Component } from "react";


const withRedBorder = (WrappedComponent) => {
    
    return class extends Component {
        render() {
            return (
                <div style={{border: "5px red solid"}}>
                    <WrappedComponent />
                </div>
            )
        }
    }

}

export default withRedBorder;