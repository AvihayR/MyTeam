import { Hero } from "../cmps/Hero"
import { SubHero } from "../cmps/SubHero"
import { Stories } from "../cmps/Stories"
import { CallToAction } from "../cmps/CallToAction"

export function HomePage() {

    return (
        <>
            <Hero />
            <SubHero />
            <Stories />
            <CallToAction />
        </>
    )
}