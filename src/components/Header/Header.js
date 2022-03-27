import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Header.propTypes = {};

function Header(props) {
  return (
    <div className="shadow-md w-ful">
      <div className="flex justify-between w-full p-4 mx-auto max-w-7xl">
        <a
          href="https://github.com/khoabt94/"
          className="text-2xl font-extrabold text-gray-800 transition-all hover:text-pink-500"
        >
          Khoa Tien Bui
        </a>
        <Link
          to="/photo"
          className="text-xl font-medium text-gray-800 transition-all hover:text-pink-500"
        >
          &larr; See all your photos
        </Link>
      </div>
    </div>
  );
}

export default Header;
