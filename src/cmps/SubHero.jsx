import halfCircle from '../assets/img/bg-pattern-home-3.svg'
import redLine from '../assets/img/red-line.png'
import { CardList } from './CardList';

export function SubHero() {

    return (
        <section className='sub-hero-container main-layout'>
            <section className="sub-hero">
                <img className='red-line' src={redLine} alt="red line" />
                <h2>Build & manage distributed teams like no one else.</h2>
                <CardList />
            </section>
            <img className='half-circle-bg' src={halfCircle} alt="half circle background" />
        </section>
    )
}