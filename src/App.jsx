import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
 import Contacto from "./pages/Contacto";
import Vlog from "./pages/Vlog"; 
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import VlogDetails from "./pages/VlogDetails";

const App = () => { 
  return <>
  <NavBar/>

<Routes>
  <Route path="/" element={<LayoutPublic/>}>
    <Route element={<Inicio />} index></Route>
    <Route element={<Vlog />} path="/vlog"></Route>
    <Route element={<VlogDetails />} path="/vlog/:id"></Route>
    <Route element={<Contacto />} path="/Contacto"></Route>
  </Route>
  <Route element={<NotFound/>} path="*"></Route>
</Routes>



  </>;
 };

 export default App;