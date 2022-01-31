import './CreateBarbecue.css'
import { Button } from "reactstrap";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import InputText from '../components/inputs/inputText';
import InputRadio from '../components/inputs/inputRadio';

export default function CreateBarbecue() {
    
    const [barbecue , setBarbecue] = useState({
        title: '',
        date: new Date().toLocaleDateString(),
        guests: []
    });

    const [bbqValue, setBbqValue] = useState('');
    const [drinkValue, setDrinkValue] = useState('');

    const [singleGuest, setSingleGuest] = useState({
        name: '',
        value: bbqValue
    });


    const renderGuests = barbecue.guests.map(guest => {
        return (
            <tr key={Math.random()}>
                <td>
                    {guest.name}
                </td>
                <td>
                    {guest.value}
                </td>
            </tr>
        )
    })

    function addGuest() {
        let msg = '';

        if(singleGuest.name.trim() === '') {
            msg += 'Preencha o nome do convidado. \r\n';    
        }
        if(drinkValue.trim() === '') {
            msg += 'Insira um valor para o churrasco com bebida. \r\n';
        }
        if(bbqValue.trim() === '') {
            msg += 'Insira um valor para o churrasco sem bebida. \r\n';
        }

        if(msg != '') {
            alert(msg)
            return
        }
        
        setBarbecue({...barbecue, guests: [...barbecue.guests, singleGuest ]});

        setSingleGuest({ ...singleGuest, name: '' })
    }

    function saveGuest() {
        let msg = '';

        if(barbecue.title.trim() === '') {
            msg += 'Insira um título para o churrasco. \r\n';    
        }
        if(barbecue.date.trim() === '') {
            msg += 'Insira uma data para o churrasco. \r\n';
        }
        if(barbecue.guests < 1) {
            msg += 'Insira ao menos 1 convidado para o churrasco. \r\n';
        }

        if(msg != '') {
            alert(msg)
            return
        }

        alert(JSON.stringify(barbecue))
    }

    return(
        
        <div className="CreateBarbecue">
            <div className="CreateBarbecue--Panel">
                <div className='row Form--CreateBarbecue'>
                    <div className='col-md-6'>
                        <InputText 
                            label="Título do churrasco" 
                            name="bbqTitle" 
                            value={barbecue.title}
                            onChange={e => {setBarbecue({...barbecue, title: e.target.value})}}
                            placeholder='Título do churrasco' 
                        />
                    </div>
                    <div className='col-md-6'>
                        <InputText 
                            label="Data do churrasco"
                            name="bbqDate" 
                            value={barbecue.date}
                            onChange={e => {setBarbecue({...barbecue, date: e.target.value})}}
                            placeholder='Data do churrasco' 
                        />
                    </div>
                    <div className='col-md-6'>
                        <InputText 
                            label="Valor sem bebida"
                            name="bbqValue" 
                            value={bbqValue}
                            onChange={e => {setBbqValue(e.target.value)}}
                            placeholder='Valor sem bebida' 
                        />
                    </div>
                    <div className='col-md-6'>
                        <InputText 
                            label="Valor com bebida"
                            name="drinkValue" 
                            value={drinkValue}
                            onChange={e => {setDrinkValue(e.target.value)}}
                            placeholder='Valor com bebida' 
                        />
                    </div>
                    <div className='col-md-6'>

                        <InputText 
                            label="Nome do convidado"
                            name="guestName" 
                            value={singleGuest.name}
                            onChange={e => {setSingleGuest({ ...singleGuest, name: e.target.value})}}
                            placeholder='Nome do convidado' 
                        />
                    </div>
                    <div className='col-md-6'>
                        <InputRadio 
                        label="Contribuição" 
                        name="guestValue"
                        onChange={e => {setSingleGuest({...singleGuest, value: e.target.value })}} 
                        radios={[{
                                    id:"guestValueDrink",
                                    value: drinkValue,
                                    description: 'Com bebida'
                                }, {
                                    id:"guestValueBbq",
                                    value: bbqValue,
                                    description: 'Sem bebida'
                                }]} />
                    </div>
                </div>
                <Button onClick={() => {addGuest()}} color='success'>
                    Adicionar Participante
                </Button>

                <table className='table my-5'>
                    <thead>
                        <tr>
                            <th>Convidado</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            renderGuests
                        }
                    </tbody>
                </table>

                <div className='d-flex justify-content-around'>
                    <Link to={'/dashboard'}>
                        <Button color='danger'>
                            Voltar
                        </Button>
                    </Link>
                    <Button onClick={() => saveGuest()} color='primary'>
                        Salvar
                    </Button>
                </div>
                
            </div>
        </div>
    )
}