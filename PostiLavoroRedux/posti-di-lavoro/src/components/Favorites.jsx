import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REMOVE_FAVORITE } from "../actions/favoriteActions";
import { Link } from "react-router-dom";


const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.list)

    const navigate = useNavigate();

    return (
        <Container>
            <Row className="flex-column">
                <i id="iconHome" className="bi bi-house text-center my-5" onClick={() => navigate("/")}></i>
                <Col xs={12} className="d-flex justify-content-between align-items-center border-dark border-bottom mb-2">
                    <h1 className="display-5">Lavori salvati</h1>
                    {favorites.length > 0 && 
                        <Button variant="outline-danger h-50" /* onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: fav })} */>Svuota lista</Button>
                    }
                </Col>
                <Col className="mt-2">
                    <ListGroup className="d-flex flex-row flex-wrap gap-2 justify-content-center">
                        {favorites.length > 0 ? (
                            favorites.map((fav, index) => (
                            <ListGroup.Item key={index} className="col-5 d-flex justify-content-between align-items-center">
                                {fav}
                                <Button variant="outline-danger" onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: fav })}>Elimina</Button>
                            </ListGroup.Item>
                        ))
                        ) : (
                            <ListGroup.Item>Non ci sono preferiti</ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )

}

export default Favorites;