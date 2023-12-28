import React from "react";
import { Button } from "@mui/material";
class Life extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            show: true,
        }
    }
    componentDidMount = () => {
        console.log('componentDidMount Method');
    }
    componentDidUpdate = () => {
        console.log('ComponentDidUpdate');
    }
    render() {
        // console.log('render');
        let myFile;
        if (this.state.show) {
            myFile = <Child />
        }

        return (
            <div>
                <center>
                    {myFile}
                    <Button variant="outlined" onClick={() => this.setState({ show: false })}>Delete</Button>
                    <h1>{this.state.count}</h1>
                    <Button variant="contained" onClick={() => this.setState({ count: this.state.count + 1 })}>Updating</Button>
                </center>
            </div>
        )
    }
}
class Child extends React.Component {
    componentWillUnmount = () => {
        console.log('Component will Unmount');
    }
    render() {
        return (
            <div><b>I will be Unmount</b></div>
        )
    }

}

export default Life;

// import React from "react";
// import { Button } from "@mui/material";
// function Life(){
//     return(
//         <div>
//             <Button variant="text">Text</Button>
// <Button variant="contained">Updating</Button>
// <Button variant="outlined">Outlined</Button>
//         </div>
//     )
// }
// export default Life;