import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='header__container'>
        <div className='title'></div>
        <div className='subTile'></div>
        <div className='btn__area'>
          <a href="">
            <button>
              Try ProtoPie
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
