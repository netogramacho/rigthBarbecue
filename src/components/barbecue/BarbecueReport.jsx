import Barbecues from "../../bd/barbecues";
import ReportGuestLine from "./ReportGuestLine";
import { Link } from 'react-router-dom'
import { Button } from "reactstrap";

export default function BarbecueReport(props) {


    let arrBarbecue = [];

    for (let i = 0; i < Barbecues.length; i++) {
        if(Barbecues[i].id == props.barbecueId) {
            arrBarbecue = Barbecues[i];
        }
    }

    let totalValue = 0;
    for (let i = 0; i < arrBarbecue.guests.length; i++) {
        totalValue += arrBarbecue.guests[i].guestValue
    }


    const renderGuests = arrBarbecue.guests.map(guest => {
        return(
            <ReportGuestLine 
                key={guest.guestId} 
                name={guest.guestName}
                value={guest.guestValue}
                payed={guest.guestPayed} 
            />
        )
    })

    return(
        <div className='Barbecue'>
            <div className='Barbecue--Report'>
                <div className='Barbecue--Report-Title'>
                    <div>
                        <span className='Barbecue--Report-TitleDate'>
                            {arrBarbecue.date}
                        </span>
                        <span className='Barbecue--Report-TitleGuests'>
                            {arrBarbecue.guests.length}
                        </span>
                    </div>
                    <div>
                        <span className='Barbecue--Report-TitleName'>
                            {arrBarbecue.name}
                        </span>
                        <span className='Barbecue--Report-TitleTotal'>
                            R${totalValue.toFixed(2).replace('.', ',')}
                        </span>
                    </div>
                </div>
                <div className='Barbecue--Report-Guests'>
                    { renderGuests }
                </div>
            </div>
            <Link to='/dashboard'>
                <Button className="my-3" color="warning">
                    <b>
                        Voltar
                    </b>
                </Button>
                
            </Link>
        </div>
    )
}