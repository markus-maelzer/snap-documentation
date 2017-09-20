import React from 'react';

import { NavLink } from 'react-router-dom';

export const VerticalMenu = ({items, itemPath, staticMenuItems}) => (
  <nav>
    <ul>
      {
        staticMenuItems ?
        staticMenuItems.map((item) => (
          <NavLink
            to={`${item.path}`}
            activeClassName='active'
            className='menu_item'
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))
        :
        ''
      }
      {
        items.map((item) => (
          <NavLink
            to={`/${itemPath}/${item.id}`}
            activeClassName='active'
            className='menu_item'
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))
      }
    </ul>
  </nav>
);
