import StyledLista from "./itemlistado.styled";

const ItemListado = ({name, client, web, consultoria, campanya, paginas, idiomas, total, date}) =>{
    return(
        <div>
          <StyledLista>
            <li>Nombre del Presupuesto: {name}</li>
            <li>Nombre del Ciente: {client}</li>
            <li>Fecha del Proyecto: {date} </li>
            <li>Número de Páginas: {paginas}</li>
            <li>Número de Idiomas: {idiomas}</li>
            <li>Precio Total: {total}</li>
            <hr />
          </StyledLista>
        </div>
    );
};

export default ItemListado;




