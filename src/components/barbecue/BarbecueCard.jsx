export default function BarbecueCard(props) {
    return(
        <div className='Card--Barbecue'>
            <div className='Card--Barbecue-Content'>
                <div className='Card--Barbecue-Date'>
                    {props.date}
                </div>
                <div className='Card--Barbecue-Title'>
                    {props.name}
                </div>
                <div className='Card--Barbecue-Info'>
                    <span>{props.totalGuests}</span>
                    <span>R${props.totalValue.toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
        </div>
    )
}