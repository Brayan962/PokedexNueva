import { useState } from 'react';
import { NavBar, HamburgerBtn } from "./NavBar";

export const Header = (
    {
        title = "Pokedex Nacional Brayan"
    }
)=>{
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <header>
            <HamburgerBtn onClickHandler={()=>setMenuOpened(!menuOpened)} />
            <div>
                <h1>{title}</h1>
            </div>
            <NavBar isOpen={menuOpened}/>
        </header>
    );
}

export const HeaderWithLogo = ()=>{
    return (
        <section className="drawer">
            <Header />
        </section>
    )
}