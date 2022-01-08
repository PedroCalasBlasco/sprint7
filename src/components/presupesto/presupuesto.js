import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


import CheckBox from "../checkBox/checkBox";
import Type from "../type/type";
import NameComponent from "../name/name";
import ItemListado from "../itemlistado/itemlistado";

const Presupuesto =  () => {

    const [checkWeb, setCheckWeb] = useState(false);
    const [checkCons, setCheckCons] = useState(false);
    const [checkCamp, setCheckCamp] = useState(false);

    const [pags, setPags] = useState(1);
    const [idiom, setIdiom] = useState(1);

    const [total, setTotal] = useState(0);

    const [namePress, setNamePress] = useState("");
    const [nameClient, setNameClient] = useState("");

    const [date, setDate] = useState("");

    const [listState, setListState] = useState([]);

    const [listStateUpdated, setListStateUpdated] = useState([]);

    const [query, setQuery] = useState("");



    useEffect(() => {
      getLocalData();
    },[]);

  useEffect(() => {
    saveLocalData();
    takeTotal();
  },[checkWeb,checkCons,checkCamp,pags,idiom]);

    const takeTotal = () => {
        return setTotal((checkWeb ? 500 + (30 * (pags < 1 ? 0 : pags)) + (30 * (idiom < 2 ? 0 : idiom - 1)) : 0) + (checkCons ? 300 : 0) + (checkCamp ? 200 : 0));
    };



  const saveLocalData = () => {
    localStorage.setItem("checkWeb", JSON.stringify(checkWeb));
    localStorage.setItem("checkCons", JSON.stringify(checkCons));
    localStorage.setItem("checkCamp", JSON.stringify(checkCamp));
    localStorage.setItem("paginas", JSON.stringify(pags));
    localStorage.setItem("idiommas", JSON.stringify(idiom));
  };

  const getLocalData = () => {
    if(localStorage.getItem("checkWeb", JSON.stringify(checkWeb)) === null){
      localStorage.setItem("checkWeb", JSON.stringify(false));
    }else{
      let checkedLocal = JSON.parse(localStorage.getItem("checkWeb"))
      setCheckWeb(checkedLocal);
    }
  };

  const submitSaveHandler = (e) => { 
    e.preventDefault();
    const newDate = new Date().toString();
    setDate(newDate);
    setListState([
      ...listState,{name:namePress, client: nameClient, web: checkWeb, consultoria: checkCons, campanya: checkCamp, paginas: pags, idiomas: idiom, date: date, total: total}
    ]);
    setListStateUpdated(listState);
    setNamePress("");
    setNameClient("");
    setPags(1);
    setIdiom(1);
    setTotal(0);
  };

  // Ejercicio 8

  const orderHandler = () => {
    const sortedListState = [...listState].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    setListState(sortedListState)
  }

  const orderDateHandler = () => {
    const sortedListDateState = [...listState].sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
    setListState(sortedListDateState)
  }

  const restauraHandler = () => {
    setListState([]);       
  }


  // Ejerccicio 9

  const searchHandler = (query, listState) => { 
        if(!query){
          return listState;
        }    
        return listState.filter((item) => item.name.includes(query));
    // setListStateUpdated(updatedSearch); 
  }

  const filtered = searchHandler(query, listState);

  


  // Ejercicio10

   const saveListData = () => {
    localStorage.setItem("listState", JSON.stringify(listState));
  };

  
  const getListData = () => {
    if(localStorage.getItem("listState", JSON.stringify(listState)) === null){
      localStorage.setItem("listState", JSON.stringify([]));
    }else{
      let listLocal = JSON.parse(localStorage.getItem("listState"))
      setListState(listLocal);
    }
  };




  
// //EJERCICIO 11


  let navigate = useNavigate();

  useEffect(() => {
    navigate({search:`paginaWeb=${checkWeb}&campaniaSeo=${checkCons}&nPaginas=${pags}&nIdiomas=${idiom}&campGoog=${checkCamp}`});
  }, [checkWeb,checkCons,pags,idiom,checkCamp])
 





  const handleWebCheck = () => {
      setCheckWeb(!checkWeb);      
  }



    return(
        <div className="container">
                <div className="row">
                  <div className="col col-6 mt-2">
                    <div className="row">
                      <div className="col col-10 text-start mt-4 mb-5">
                        <h5>Esscribe los Datos del Presupuesto</h5>
                        <NameComponent value={namePress} onChange={(e) => setNamePress(e.target.value)}>Nom del Pressupost</NameComponent>
                        <NameComponent value={nameClient} onChange={(e) => setNameClient(e.target.value)}>Nom del Client</NameComponent>
                      </div>
                      <div className="col col-10 text-start ">
                        <h5>Elige el tipo de Web que quieres desarrollar</h5>
                        <CheckBox id="cbox1" value={checkWeb} onChange={() => handleWebCheck()}>Una Página Web(500 Euros)</CheckBox>

                        {checkWeb ? <Type valChanged={(v) => setPags(v)} index={1}>Elige número de Páginas</Type> : <div></div>}
                        {checkWeb ? <Type valChanged={(v) => setIdiom(v)} index={2}>Elige número de Idiomas</Type> : <div></div>}

                        <CheckBox id="cbox1" value={checkCons} onChange={() => setCheckCons(!checkCons)}>Una Consultoría SEO(300 Euros)</CheckBox>
                        
                        <CheckBox id="cbox1" value={checkCamp} onChange={() => setCheckCamp(!checkCamp)}>Una Campaña Google Adds(200 Euros)</CheckBox>
                      </div>
                      <div className="col col-10 mt-4">
                        <hr />
                      </div>
                        <h4>Total: {total}</h4>
                      <div className="col col-10 mt-4">
                        <button type="submit" className="btn btn-primary" onClick={submitSaveHandler}>Guardar Presupuesto</button>
                      </div>  
                  </div>
                </div>
               

                <div className="col col-6 text-center mt-2">
                  <div className="row justify-content-around mt-4">
                    <div className="col col-12 text-center mt-4 mb-4">
                      <h5>Listado de Presupuestos</h5>
                    </div>
                    <div className="col col-5 mt-3">
                      <button className="btn btn-outline-success" onClick={orderDateHandler}>Ordenar por fecha</button>
                    </div>
                    <div className="col col-5 mt-3">
                      <button className="btn btn-primary" onClick={orderHandler}>Ordenar Por nombre del Cliente</button>
                    </div>
                    <div className="col col-10 mt-2">
                    </div>
                      <input onChange={(e) => setQuery(e.target.value)} type="text" className="form-control" placeholder="Busca Por Nombre del Presupuesto" />
                    <div className="col col-10 mt-4 text-start">
                      {filtered.map((item, index) => (
                        <ItemListado name={item.name} client={item.client} web={item.web} consultoria={item.consultoria} campanya={item.campanya} paginas={item.paginas} idiomas={item.idiomas} date={item.date} key={index} total={item.total}  /> 
                      ))} 
                  </div>
                  <div className="col col-10 mt-2">
                    <button onClick={restauraHandler} className="btn btn-warning">Reinicializar</button>
                  </div>
                  </div>
                </div>
              </div>
               </div>
    )
} 

export default Presupuesto;