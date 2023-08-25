
import React from 'react';
import logo from '../../assets/images/New_Project-removebg-preview.png'

const Header: React.FC = () => {
  return (
    <header className="header__page px-20">
        <div className='shadow flex align-middle'>
            <img src={logo} style={{width:"300px"}} alt='logo'/>
            {/* <h1 className="text-xl font-bold mt-5">Gyanबतुलौ</h1> */}
        </div>
    </header>
  );
};

export default Header;
