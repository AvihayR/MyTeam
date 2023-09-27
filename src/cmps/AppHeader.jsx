import { NavLink } from 'react-router-dom'

export function AppHeader() {

    return (
        <header>
            <h1 className="logo">myteam</h1>
            <section className='nav-links'>
                <NavLink>home</NavLink>
                <NavLink>about</NavLink>
            </section>
            <button className='btn'>
                contact us
            </button>
        </header>
    )
}