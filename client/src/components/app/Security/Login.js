import { React, Component } from 'react'
import Axios from 'axios'
import NavBar from '../navBar'


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            id_User: null,
            name: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    Authenticate(url) {
        let user;

        Axios.get(url)
            .then(res => { 
                user = res.data;
                this.setState({ isAuthenticated: (user !== undefined && user !== null), id_User: user });
            })
            .catch(err => console.log(err));
    }

    OnSubmit(event) {
        event.preventDefault();
        var url = 'http://localhost:8000';
        var endpoint = '/User/' + this.state.name

        this.Authenticate(url + endpoint)

        if (this.state.isAuthenticated) this.sendUser();
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    sendUser = () => {
        this.props.sendUser(this.state.id_User);
    }

    render() {
        console.log(this.state);

        return (
            <div>
                { (this.state.isAuthenticated) ? ( <NavBar idUser={this.state.id_User} /> ) :
                    (
                        <div className="Login">
                            <form onSubmit={this.OnSubmit}>
                                <label>Name:
                                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Login;