import React, { Component } from 'react';
import InputField from './InputField';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
        }

        this.startEdit = this.startEdit.bind(this);
        this.stopEdit = this.stopEdit.bind(this);
        this.name = React.createRef();
        this.phone = React.createRef();
        this.email = React.createRef();
    }

    startEdit() {
        this.setState({
            editing: true,
        });
        this.name.current.startEdit();
        this.phone.current.startEdit();
        this.email.current.startEdit();
    }

    stopEdit() {
        this.setState({
            editing: false,
        });
        this.name.current.stopEdit();
        this.phone.current.stopEdit();
        this.email.current.stopEdit();
    }

    render() {
        const stopEditButton = <button onClick={(e) => {e.preventDefault();this.stopEdit();}}>Stop Edit</button>;
        const startEditButton =  <button onClick={(e) => {e.preventDefault();this.startEdit();}}>Edit</button>;
        const currentButton = this.state.editing ? stopEditButton : startEditButton;
        return (
            <form onSubmit={() => console.log('submit')}>Personal Info
                <InputField title='Name:' ref={this.name}/>
                <InputField title='Phone:' ref={this.phone}/>
                <InputField title='E-mail:' ref={this.email}/>
                {currentButton}
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default PersonalInfo