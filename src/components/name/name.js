import StyledInput from "./name.styled";

const NameComponent = ({children, value, onChange}) =>{

    return (
        <div className="mt-3">
            <label for="name">{children}</label>
            <StyledInput className="form-control" value={value} onChange={onChange} type="text"/>
        </div>
    )
}

export default NameComponent;