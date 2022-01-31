export default function RepordGuestLine(props) {


    const tooglePay = (el) => {
        if(el.classList.contains('Payed')) {
            el.classList.remove('Payed');
        } else {
            el.classList.add('Payed');
        }
    }

    return(
        <div className={(props.payed) ? 'Barbecue--Report-GuestsLine Payed' : 'Barbecue--Report-GuestsLine'}>
            <span className='Circle' onClick={e => {tooglePay(e.target.parentElement)}} ></span>
            <span className='Name'>{props.name}</span>
            <span className='Money'>R${props.value.toFixed(2).replace('.', ',')}</span>
        </div>
    )
}