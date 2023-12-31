import { StoryPreview } from "./StoryPreview";
import avatarKady from '../assets/img/avatar-kady.jpg';
import avatarAiysha from '../assets/img/avatar-aiysha.jpg';
import avatarArthur from '../assets/img/avatar-arthur.jpg';

const demoData = [
    { imgUrl: avatarKady, person: 'Kady Baker', title: 'Product Manager at Bookmark', msg: '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”', },
    { imgUrl: avatarAiysha, person: 'Aiysha Reese', title: 'Founder of Manage', msg: '““We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”', },
    { imgUrl: avatarArthur, person: 'Arthur Clarke', title: 'Co-founder of MyPhysio', msg: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”', },
]

export function StoryList() {
    return (
        <ul className="quotes-container">
            {demoData.map(story => <StoryPreview key={story.title} story={story} />)}
        </ul>
    )
}