import halfCircle from '../assets/img/bg-pattern-home-6-about-5.svg'

export function CallToAction() {

    return (
        <section className="call-to-action-container main-layout">
            <img className='half-circle' src={halfCircle} alt="half-circle-bg" />
            <section className="call-to-action">
                <h1>Ready to get started?</h1>
                <button className="btn">contact us</button>
            </section>
        </section>
    )
}