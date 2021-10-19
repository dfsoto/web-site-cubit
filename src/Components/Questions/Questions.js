import React from 'react';
import './Questions.css';
import Accordion from 'react-bootstrap/Accordion';

function Questions() {

    return (
        <div className="container-question container">
            <h1 className="display-6 fw-bold mb-4">Preguntas<span className="text-primary">.</span></h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>¿Qué es una prueba unitaria, cuándo se aplica y que nos permite?</Accordion.Header>
                    <Accordion.Body>
                    Una prueba unitaria es una forma de probar una unidad y garantizar que si esta funcionando correctamente. Por ejemplo una prueba unitaria seria probar el servicios que retorna la lista de usuarios de la pagina reqres. Y el resultado de la prueba unitaria muestra si el servicio esta respondiendo correctamente o no.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>¿Cuales son las ventajas de la programación funcional?</Accordion.Header>
                    <Accordion.Body>
                    La programación funcional puede ayudarnos a crear un software más robusto, mantenible y fácil de testear.
                        Las ventajas de la programación funcional son: 
                        <ul>
                            <li>El flujo lógico del programa es mas  claro</li> 
                            <li>Las funciones evitan que cambien las variables o cualquier dato externo.</li> 
                            <li>Las funciones se tratan como valores, pasándose a otras funciones como parámetros. Esto mejora la comprensión y legibilidad del código.</li> 
                            <li>Las funciones toman los parámetros una vez, produciendo una salida. Al utilizar valores inalterables, se facilita la depuración y las pruebas.</li> 
                        </ul>         
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Pros y Contras del uso de GitFlow vs Trunk.</Accordion.Header>
                    <Accordion.Body>
                        <b>Ventajas de GitFlow</b>
                        <ul>
                            <li>Código abierto para cualquier proyecto</li>
                            <li>Es adecuado para equipos con muchos desarrolladores junior</li>
                            <li>Adecuado para el desarrollo de productos que ya se establecieron antes</li>
                        </ul>
                        <b>Desventajas de GitFlow</b>
                        <ul>
                            <li>No apto para desarrollo inicial</li>
                            <li>La visualización de flujo parece muy compleja</li>
                        </ul>
                        <b>Ventajas de Trunk</b>
                        <ul>
                            <li>Adecuado para el desarrollo inicial</li>
                            <li>Adecuado para equipos con muchos desarrolladores senior (sin necesidad de un control estricto)</li>
                            <li>La visualización de flujo parece muy simple</li>
                        </ul>
                        <b>Desventajas de Trunk</b>
                        <ul>
                            <li>No apto para equipos con muchos desarrolladores junior</li>
                            <li>No apto para desarrollo de código abierto</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> ¿Cuales son las ventajas de utilizar arquitecturas sin servidor?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Se escala automáticamente y tiene una alta disponibilidad.</li>
                            <li>Sólo se paga por lo que se usa.</li>
                            <li>Mayor agilidad y escalabilidad.</li>
                            <li>Traslado de las cargas de seguridad e infraestructura a los proveedores de la nube.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>¿Que ventajas tiene el uso de una base de datos no relacional?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>las bases de datos NoSQL están basadas en key-value pairs.</li>
                            <li>Podría decirse que las bases de datos NoSQL de código abierto tienen una implementación rentable. Ya que no requieren las tarifas de licencia y pueden ejecutarse en hardware de precio bajo.</li>
                            <li>Cuando trabajamos con bases de datos NoSQL, ya sean de código abierto o tengan un propietario, la expansión es más fácil y más barata que cuando se trabaja con bases de datos relacionales.</li>
                            <li>Se pueden ejecutar en máquinas con pocos recursos.</li>
                            <li>Optimización de consultas en base de datos para grandes cantidades de datos.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        
    );
}

export default Questions;
