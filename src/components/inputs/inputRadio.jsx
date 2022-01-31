import RadioOptions from "./RadioOptions"

export default function InputRadio(props) {

    const htmlRadio = props.radios.map(
        radio => {
            return (
                <RadioOptions 
                    key={Math.random()}
                    value={radio.value} 
                    name={props.name}
                    id={radio.id} 
                    onChange={props.onChange}
                    description={radio.description} 
                />
            )
        }
    )
    
    
    return (

        <div className='form-group'>
            <label>{props.label}</label>
            {htmlRadio}
        </div>
    )
}