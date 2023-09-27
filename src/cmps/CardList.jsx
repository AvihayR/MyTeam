import iconCog from '../assets/img/icon-cog.svg';
import iconPerson from '../assets/img/icon-person.svg';
import iconChart from '../assets/img/icon-chart.svg';
import { CardPreview } from './CardPreview';

const info = [
    { imgSrc: iconCog, title: 'Experienced Individuals', content: 'Our network is made up of highly experienced professionals who are passionate about what they do.' },
    { imgSrc: iconPerson, title: 'Easy to Implement', content: 'Our processes have been refined over years of implementation meaning our teams always deliver.' },
    { imgSrc: iconChart, title: 'Enhanced Productivity', content: 'Our customized platform with in-built analytics helps you manage your distributed teams.' }
]

export function CardList() {

    return (
        <ul className='card-list'>
            {info.map(cardInfo => <CardPreview key={cardInfo.title} info={cardInfo} />)}
        </ul>
    )
}