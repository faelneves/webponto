import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTime from '@material-ui/icons/AccessTime';
import History from '@material-ui/icons/History';


function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }

class NavBar extends  React.Component{ 

    state = {
        open: false,
    };
    
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    
    render() {
        const { open } = this.state;
        const { classes, theme } = this.props;
        return(
        <div >
            <AppBar position="static">
                <Toolbar>
                    {
                    this.props.title!='Login' &&
                    this.props.title!='Cadastro' &&
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerOpen}
                        hidden={true}
                        >
                        <MenuIcon />
                    </IconButton>
                    }
                    <Typography variant="h5" color="inherit">
                        Web Ponto - {this.props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                >
                <div onClick={this.handleDrawerClose}>
                    <IconButton>
                        <ChevronLeftIcon /> 
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItemLink button href='./Marcacao' >
                        <ListItemIcon> <AccessTime /> </ListItemIcon>
                        <ListItemText primary='Marcação' />
                    </ListItemLink>
                    <ListItemLink button href='./historicoMarcacao'>
                        <ListItemIcon> <History /> </ListItemIcon>
                        <ListItemText primary='Histórico de Marcações' />
                    </ListItemLink>
                </List>
                </Drawer>
        </div>
        )
    }
}

export default NavBar;