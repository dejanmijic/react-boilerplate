import { aboutUsRoute, homeRoute } from "../../../../../shared/routes/routes";

export const menuItems = [
    {
      id: '1',
      title: 'dashboard.header.items.home',
      route: homeRoute()
    },
    {
      id: '2',
      title: 'dashboard.header.items.aboutUs',
      route: aboutUsRoute()
    }
  ];