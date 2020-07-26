import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemIcon, ListItemText, Collapse,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [selectedKey, setSelectedKey] = React.useState('home');

  const [open, setOpen] = React.useState(true);

  const handleClickOnMenu = (key) => {
    setSelectedKey(key);
  };

  const handleClickLanguages = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <List>
      <ListItem onClick={() => handleClickOnMenu('home')} selected={selectedKey === 'home'} button to="/" component={Link}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem onClick={() => handleClickOnMenu('translator')} selected={selectedKey === 'translator'} button to="/translator" component={Link}>
        <ListItemIcon>
          <TranslateIcon />
        </ListItemIcon>
        <ListItemText primary="Translator" />
      </ListItem>
      <ListItem button onClick={handleClickLanguages}>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText primary="Languages" />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem onClick={() => handleClickOnMenu('languages')} selected={selectedKey === 'languages'} button to="/languages" component={Link} className={classes.nested}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="List" />
          </ListItem>
          <ListItem onClick={() => handleClickOnMenu('rules')} selected={selectedKey === 'rules'} button to="/rules" component={Link} className={classes.nested}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Rules" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default Menu;
