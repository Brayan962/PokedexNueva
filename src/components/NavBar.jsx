import { NavLink } from "react-router"
export const NavBar = (
    {isOpen = false}
)=>{
    return (
        <nav className={isOpen ? "open": ""}>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/my-collection">Mi coleccion</NavLink></li>
                    <li><NavLink to="/about-me">sobre mi</NavLink></li>
                </ul>
        </nav>
    )
}

export const HamburgerBtn = (
    {
        onClickHandler = ()=>{}
    }
)=>{
    return (
        <button
            className="btnHamburger"
            onClick={onClickHandler}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}