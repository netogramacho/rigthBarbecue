import { Link } from 'react-router-dom';
import Barbecues from '../bd/barbecues'
import BarbecueCard from '../components/barbecue/BarbecueCard';
import iconBbq from '../images/icon_bbq.png'
import './Dashboard.css'

export default function Dashboard(props) {

    const renderBarbecues = Barbecues.map(barbecue => {

        let totalValue = 0;

        for (let i = 0; i < barbecue.guests.length; i++) {
            totalValue += barbecue.guests[i].guestValue
        }

        return (
            <Link key={barbecue.id}  to={'/barbecue/' + barbecue.id}>
                <BarbecueCard 
                    name={barbecue.name} 
                    date={barbecue.date} 
                    totalValue={totalValue} 
                    totalGuests={barbecue.guests.length} 
                />
            </Link> 
        )
    })

    return(
        <div className='Dashboard'>
            <h1>{props.title}</h1>
            <div className='Cards'>
                { renderBarbecues }
                <Link to='/create-barbecue'>
                    <div className='Card--Barbecue'>
                        <div className='Card--Barbecue-Content'>
                            <div className='Card--Barbecue-NewBarbecue'>
                                <div className='Card--Barbecue-NewBarbecue-Circle'>
                                    <img src={iconBbq} alt="New Barbecue" />
                                </div>
                                <h5>Adicionar Churras</h5>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}