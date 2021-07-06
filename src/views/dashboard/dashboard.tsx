import React, { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import { aboutUsRoute, homeRoute } from "../../shared/routes/routes";
import AboutUs from "./about-us/about-us";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Explore from "./explore/explore";
import logo from '../../assets/images/logo.png';

import './dashboard.scss';
import { Drawer } from "antd";
import { menuItems } from "./components/header/menu-items/menu-items";
import { useTranslation } from "react-i18next";

const Dashboard = () => {

  const [visible, setVisible] = useState(false);

  const history = useHistory();

  const [activeItem, setActiveItem] = useState('1');

  const showDrawer = () => {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  }

  const itemClick = (item: any) => {
    setActiveItem(item.id);
    history.push(item.route);
  }

  const { t } = useTranslation();

  return (
    <div className='dashboard'>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div className='drawer__logo'>
          <img className='header__left__logo' src={logo}/>
        </div>
        {
          menuItems.map(item => 
          <button 
            className={`drawer__button ${item.id === activeItem ? 'active_drawer_button' : ''}`}
            onClick={() => itemClick(item)}>
            {t(item.title)}
          </button>
          )
        }
      </Drawer>
      <Header drawerHandler={showDrawer}/>
      <div>
        <Switch>
          <Route path={homeRoute()} component={Explore} />
          <Route path={aboutUsRoute()} component={AboutUs} />
          <Redirect to={homeRoute()} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
