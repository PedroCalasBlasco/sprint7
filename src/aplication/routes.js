import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../components/home"

const Routes = () => (
    <BrowserRouter>
        <Switch>   
            <Route path="/" element={<Home/>} />
            <Route path="/formulario/" element={<Contacto/>} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la 
            ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={() => <div>404</div> } />
        </Switch>
    </BrowserRouter>
);


export default Routes;