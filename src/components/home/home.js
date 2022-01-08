
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';

const Home = () => {

    return(
        <div className="container-fluid home-container">
            <div className="row text-center align-items-center">
                <div className="col col-12">
                    <h1>BIENVENIDOS</h1>
                    <h4>Calculadora de Presupuestos</h4>
                </div>
            </div>
            <div className="row text-center">
                <div className="col col-12">
                    <a href="/Form"><button type="button" className="btn btn-primary btn-block">Acceder</button></a>
                </div>
            </div>            
        </div>
            
           
        
    );
}

export default Home;