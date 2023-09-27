import { StoryList } from "./StoryList"

export function Stories() {

    return (
        <section className="stories-container main-layout">
            <section className="stories">
                <h1>Delivering real results for top <br /> companies. Some of our <span>success stories.</span></h1>
                <StoryList />
            </section>
        </section>
    )
}