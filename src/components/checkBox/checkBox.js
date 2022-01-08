import "bootstrap/dist/css/bootstrap.min.css";

const CheckBox = ({value, onChange, children}) => {

    return (
        <div className="mt-5">
            <input className="form-check-input"  type="checkbox" value={value} onChange={onChange} />
            <label> {children} </label>          
        </div>
    )
}

export default CheckBox;