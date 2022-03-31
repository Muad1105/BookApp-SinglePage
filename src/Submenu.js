import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const [isSubmenuHover, setIsSubmenuHover] = useState(false);
  const {
    isSubmenuOpen,
    setIsSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  console.log(isSubmenuOpen);
  const container = useRef(null);
  const [columns, setColumns] = useState();
  useEffect(() => {
    const submenu = container.current;
    console.log(submenu, links);
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location, links]);

  const keepSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const submenuItemHover = e => {
    console.log('--true--', e.target);
    setIsSubmenuHover(true);
  };

  const submenuItemOut = () => {
    setIsSubmenuHover(false);
  };

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
      onMouseOver={keepSubmenu}
      onMouseOut={closeSubmenu}>
      <div className={`submenu-center`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url} className='submenu-item'>
              <div>
                {icon}
                {label}
              </div>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
