
import React from 'react';
import logo from '../../assets/images/logo.png'

const Header: React.FC = () => {
  return (
    <header className="header__page py-5 px-20">
        <div className='shadow flex align-middle'>
            <img src={logo} width={75} alt='logo'/>
            <h1 className="text-xl font-bold mt-5">Suvaye Dictionary</h1>
        </div>
    </header>
  );
};

export default Header;
