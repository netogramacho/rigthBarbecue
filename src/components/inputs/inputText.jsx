export default function InputText(props) {
    return (

        <div className='form-group'>
            {(props.label) ? 
                <label htmlFor={props.name}>{props.label}</label>
            :
                ''
            }
            <input 
                type="text" 
                className='form-control' 
                name={props.name} 
                id={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder} />
        </div>
        )
}