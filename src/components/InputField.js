import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();

        this.state = {
            value: '',
            editing: false,
        }

        this.startEdit = this.startEdit.bind(this);
        this.stopEdit = this.stopEdit.bind(this);
    }

    startEdit() {
        this.setState({
            editing: true, 
        });
    }

    stopEdit() {
        this.setState({
            editing: false,
            value: this.input.current.value,
        });
    }

    render() {
        const {value, editing} = this.state;
        const {title} = this.props;
        if (editing) {
            return (
                <div>{title}
                    <input type='text' defaultValue={value} ref={this.input}/>
                </div>
            );
        }
        else {
            return (
                <div>{title}
                    <div>{value}</div>
                </div>
            );
        }
    }
}

export default InputField