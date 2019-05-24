import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            globalTitle: "first title"
        };
    }

    componentDidMount = () => {
        console.log("Rendered Form");
    }

    componentDidUpdate = () => {
        console.log("Title changed");
    }

    handleSubmit = (event) => {
        const { title } = this.state;
        event.preventDefault();
        this.setState({
            globalTitle: `My form - ${title}`,
            title: ""
        });
    }

    handleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    render() {
        const { title, globalTitle } = this.state;
        return (
            <div>
                <h1>{globalTitle}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="text" id="text" value={title} onChange={this.handleChange} autoComplete="off" />
                    <input type="submit" value="submit" />
                </form>

            </div>
        );
    }
}

export default Form;