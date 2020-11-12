import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import ListIcon from '@material-ui/icons/List';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { selectMenu as selectMenuAction } from '../redux/actions/menu';

const styles = (theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    const { selectMenu, location } = this.props;
    const menu = Menu.getMenuFromPath(location.pathname);
    this.state = {
      languagesOpened: true,
    };
    selectMenu(menu);
  }

  static getPathFromMenu(menu) {
    switch (menu) {
      case 'translator':
        return '/translator';
      case 'languages':
        return '/languages';
      case 'rules':
        return '/rules';
      case 'about':
        return '/about';
      default:
        return '/';
    }
  }

  static getMenuFromPath(path) {
    switch (path) {
      case '/translator':
        return 'translator';
      case '/languages':
        return 'languages';
      case '/rules':
        return 'rules';
      case '/about':
        return 'about';
      default:
        return '';
    }
  }

  handlehandleMenuSelection(menu) {
    const { selectMenu, history } = this.props;
    const path = Menu.getPathFromMenu(menu);
    selectMenu(menu);
    history.push(path);
  }

  handleLanguages(e) {
    const { languagesOpened } = this.state;
    e.preventDefault();
    this.setState({ languagesOpened: !languagesOpened });
  }

  render() {
    const { classes, selectedMenu, t } = this.props;

    const { languagesOpened } = this.state;

    return (
      <List>
        <ListItem
          onClick={() => this.handlehandleMenuSelection('home')}
          selected={selectedMenu === 'home'}
          button
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={t('menu.home')} />
        </ListItem>
        <ListItem
          onClick={() => this.handlehandleMenuSelection('translator')}
          selected={selectedMenu === 'translator'}
          button
        >
          <ListItemIcon>
            <TranslateIcon />
          </ListItemIcon>
          <ListItemText primary={t('menu.translator')} />
        </ListItem>
        <ListItem button onClick={this.handleLanguages}>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary={t('menu.languages')} />
          {languagesOpened ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={languagesOpened} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              onClick={() => this.handlehandleMenuSelection('languages')}
              selected={selectedMenu === 'languages'}
              button
              className={classes.nested}
            >
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem
              onClick={() => this.handlehandleMenuSelection('rules')}
              selected={selectedMenu === 'rules'}
              button
              className={classes.nested}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Rules" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          onClick={() => this.handlehandleMenuSelection('about')}
          selected={selectedMenu === 'about'}
          button
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={t('menu.about')} />
        </ListItem>
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    menu: { selectedMenu },
  } = state;

  return { selectedMenu };
};

const mapDispatchToProps = {
  selectMenu: selectMenuAction,
};

Menu.propTypes = {
  selectMenu: PropTypes.func.isRequired,
  location: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  classes: PropTypes.shape().isRequired,
  selectedMenu: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withRouter(
  withStyles(styles)(
    withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Menu)),
  ),
);
