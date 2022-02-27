import { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import ListaTareas from "./Components/ListaTareas";
import axios from 'axios';
import FormularioTarea from "./Components/FormularioTarea";

function App() {
    const [tareas, setTareas] = useState([]);

    const cargarTareas = () =>{
        axios.get('http://localhost:8080/tareas')
        .then(({data}) => setTareas(data))
    }

    useEffect(cargarTareas, []);

    const onSubmit = (values) => {
        axios.post("http://localhost:8080/tareas", values)
        .then(() => cargarTareas());
    }

    const eliminarTarea = (tarea) => {
        axios.delete("http://localhost:8080/tareas/${tarea.id}")
        .then(() => cargarTareas());
    }

    return (
        <>
        <Container>
            <Row>
                <Col md={6}>
                  <ListaTareas 
                  tareas={tareas}
                  onDelete={eliminarTarea} />
                </Col>
                <Col md={6}>
                  <FormularioTarea onSubmit={onSubmit}/>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default App;
