import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import Login from './Security'
import NavBar from './navBar'
import Home from './home'
import MyDataSets from './mydatasets'
import Settings from './settings'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
});

function App(props) {
    const [idUser, setUser] = useState('');
    const { classes } = props;

    function sendUser (idUser) {
        setUser(idUser);
    };

    return (
        <Router>
            <div className="Nav">
                    { (idUser) 
                        ? <NavBar idUser={idUser} /> 
                        : <Login sendUser={sendUser} /> 
                    } 
                    <main>
                        <div className={classes.toolbar} />
                        <Switch>
                            <Route path="/" exact />
                            <Route path="/home" render={() => ( <Home idUser={idUser} /> )} />
                            <Route path="/mydatasets" component={MyDataSets} />
                            <Route path="/settings" component={Settings} />
                            <Route path='/DataSet/:id' />
                        </Switch>
                    </main>
            </div>
        </Router>
    );
}

export default withStyles(styles, { withTheme: true })(App);
