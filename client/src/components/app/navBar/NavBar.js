// Navigation Menu

import { React, Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings'
import clsx from 'clsx'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from "react-router-dom";
import Home from '../home'
import MyDataSets from '../mydatasets'
import Settings from '../settings'
import DataSet from '../mydatasets/dataset'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
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

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
            openForm: 'Home'
        }
    }

    toggleDrawer = () => {
        this.setState({isDrawerOpen: !this.state.isDrawerOpen})
    }

    openForm = (index) => {
        switch(index) {
            case 0:
                this.setState({ openForm: 'Home' });
                break;
            case 1:
                this.setState({ openForm: 'MyDataSets' });
                break;
            case 2:
                this.setState({ openForm: 'Settings' });
                break;
            default:
                break;
        }
    }

    renderContent = () => {
        switch(this.state.openForm) {
            case 'MyDataSets':
                return <MyDataSets />;
            case 'Settings':
                return <Settings />;
            case 'Home':
            default:
                return <Home />;
        }
    }

    renderNavIcon = (index) => {
        switch(index) {
            case 0: return ( <HomeIcon /> );
            case 1: return ( <DashboardIcon /> );
            case 2: return ( <SettingsIcon /> );
            default: return;
        }
    }

    render() {
        const { classes } = this.props;
        const open = this.state.isDrawerOpen;

        const forms = [
            '',
            'Home',
            'MyDataSets',
            'Settings'
        ];

        return (
            <div className={classes.root}>
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                onClick={this.toggleDrawer}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                {this.state.openForm}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.toggleDrawer}>
                                <ChevronLeft />
                            </IconButton>
                        </div>
                        <List>
                            {forms.map((text, index) => (
                                <Link 
                                    to={`/${text}`} 
                                    style={{ color: 'black', textDecoration: 'none'}} 
                                    key={index}
                                >
                                    <ListItem button>
                                        <ListItemIcon> {this.renderNavIcon(index)} </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>

                    </Drawer>
                </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NavBar);
