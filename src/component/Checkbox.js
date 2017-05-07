import React from 'react';

class Checkbox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            checked : false
        };
        this.onchangHandler = this.onchangHandler .bind(this);
    }

    getInitialState() {
        return {checked: true};
    }

    onchangHandler(){
        this.setState({checked: !this.state.checked})
        console.log(this.state)
    }

    render() {
        var msg;
        if(this.state.checked)
            msg = "checked";
        else
            msg = "unchecked";

        return (

            <div>
                <input type="checkbox" onClick={this.onchangHandler} defaultChecked={this.state.checked}></input>
                <span>This is {msg}</span>
            </div>

        )
    }
}

export default  Checkbox