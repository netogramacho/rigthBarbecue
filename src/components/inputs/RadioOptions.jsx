export default function RadioOptions(props) {

    return(
        <div>
            <input
                type="radio"
                value={props.value}
                name={props.name}
                id={props.id}
                onChange={props.onChange} 
            /> <label htmlFor={props.id}>{props.description}</label>
        </div>
    )
}