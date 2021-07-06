import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import logo from '../../../../assets/images/logo.png';
import { MenuOutlined, UserOutlined } from "@ant-design/icons";

import './header.scss';
import { menuItems } from './menu-items/menu-items';

type HeaderProps = {
  drawerHandler?: () => void;
}

const Header: React.FC<HeaderProps> = ({ drawerHandler = () => {} }) => {

  const { t } = useTranslation();

  const history = useHistory();

  const [activeItem, setActiveItem] = useState('1');

  const itemClick = (item: any) => {
    setActiveItem(item.id);
    history.push(item.route);
  }

  const openDrawer = () => {
    drawerHandler();
  }

  return (
    <header className='header'>
      <button className='header__drawer' onClick={openDrawer}><MenuOutlined /></button>
      <div className='header__left'>
        <img className='header__left__logo' src={logo}/>
        <div className='header__left__menu'>
          {
           menuItems.map(item => 
            <button 
              className={`header__left__menu__item ${item.id === activeItem ? 'active' : ''}`}
              onClick={() => itemClick(item)}>
                {t(item.title)}
            </button>
            )  
          }
        </div>
      </div>
      <div className='header__right'>
        <a href='/sign-in'><UserOutlined/>&nbsp;{t('signIn.heading')}</a>
      </div>
    </header>
  );
};

export default Header;
