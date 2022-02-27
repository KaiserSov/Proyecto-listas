import { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import ListaTareas from "./Components/ListaTareas";
import axios from 'axios';

function App() {
    const [tareas, setTareas] = useState([]);

    const cargarTareas = () =>{
        axios.get('http://localhost:8080/tareas')
        .then(({data}) => setTareas(data))
    }

    useEffect(cargarTareas, []);

    return (
        <>
        <Container>
            <Row>
                <Col>
                  <ListaTareas tareas={tareas} />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default App;
