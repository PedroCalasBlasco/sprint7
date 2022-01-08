import "bootstrap/dist/css/bootstrap.min.css";

import {useState, useEffect} from "react";

import ModalComponent from "../modal/modal";

import StyledInputType from "./type.styled";

const Type = ({value, valChanged, children, index}) =>{

    const [val, setVal] = useState(1);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);



    useEffect(() => {
        valChanged(val);
    }, [val])

    return (
        <div className="mt-2">
            <div className="input-group">
                <label for="pages" className="pt-1">{children}</label>
                <div className="input-group-prepend mr-2">
                    <button type="button"  className="btn btn-outline-success" onClick={() => setVal(val + 1)}><i className="fas fa-plus-square"></i></button>
                </div>
                <StyledInputType 
                    className="form-control"
                    type="number" 
                    value={val}
                />
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-success" onClick={() => setVal(val - 1)}><i className="fas fa-minus-square"></i></button>
                    <button type="button" onClick={() => index === 1 ? setShowModal1(true) : setShowModal2(true)} className="btn btn-warning"><i className="fas fa-info-circle"></i></button>
                </div>
                <ModalComponent showModal={showModal1} setShowModal={setShowModal1}>
                    <h3>Selecciona el Número de Páginas que tendrá tu Sitio Web</h3>
                </ModalComponent>
                <ModalComponent showModal={showModal2} setShowModal={setShowModal2}>
                    <h2>Selecciona el número de Idiomas que tendrá tu Sitio Web</h2>
                </ModalComponent>
        </div>
        </div>
    );

}

export default Type;