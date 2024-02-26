import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/imagiflix.png";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import placeholderUser from "../assets/user.jpg";
import './NavBar.css';

const NavBar = () => {
  const [ isMenuopen, setIsMenuopen ] = useState(false);

  const handleClick = () => {
    setIsMenuopen(!isMenuopen);
  }
  return (
    <nav className="navbar absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8">
      <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
        <h1 className="hidden">Imagiflix</h1>
        <img src={logo} alt="Imagiflix" />
        <ul className="grid grid-flow-col gap-4">
          <li className="font-bold">Inicio</li>
          <li>
            <a href=" #series">Séries</a>
          </li>
          <li>
            <a href="#movies">Filmes</a>
          </li>
        </ul>
      </div>

      <div className="justify-self-end flex justify-items-end items-center">
        <form className="relative w-64">
          <input
            className="w-full bg-black border border-white rounded-md py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100"
            type="text"
            placeholder="Titúlos, gente e gêneros"
          />
          <button className="absolute right-2 py-1 px-1" onClick={e => e.preventDefault()}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="flex ml-4">
          <img className="foto-menu" src={placeholderUser} alt="Foto do usuário" onClick={handleClick} />
          <button onClick={handleClick}>
            <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
          </button>

          <ul className={` menu absolute right-0 top-0 w-38 bg-black  rounded py-1 px-3 transition-all duration-300 ease-in-out ${!isMenuopen && 'opacity-0 invisible' }`}>
            <li>
              <a href="#account onClick={handleClick}">Minha conta</a>
            </li>
            <li>
              <a href="@logout onClick={handleClick}">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
