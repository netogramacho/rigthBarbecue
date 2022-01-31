import './Barbecue.css'
import {React} from 'react';
import BarbecueReport from '../components/barbecue/BarbecueReport';
import { useParams } from 'react-router-dom'

export default function Barbecue(props) {

    const { id } = useParams();

    const barbecueId = id;

    return(
        <BarbecueReport barbecueId={barbecueId} />
    )
}