import React, {useState} from "react";
import Navigation from "../Navigation";
import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'

function Header() {

    const [toggle, setToggle] = useState(false);

    const handleToggle=()=>{
        setToggle(!toggle);
    }
  return (
    <section>
      <header className={toggle?'navbar expanded':'navbar'}>
        <h2 className="page-name">
          Katie Butler
        </h2>
        <Navigation></Navigation>
        <div className="toggle-icon" onClick={handleToggle}>
            {toggle?<Icon icon={x} size={24}/>:<Icon icon={menu} size={24}/>}
        </div>
      </header>
    </section>
  );
}

export default Header;
