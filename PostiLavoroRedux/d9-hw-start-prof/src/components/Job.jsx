import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../actions/favoriteActions'

const Job = ({ data }) => {

  const dispatch = useDispatch()

  return (
      <Row xs={6}
        className="mx-2 my-2 p-3 d-flex align-items-center w-25"
        style={{ border: '1px solid #000', borderRadius: 4 }}
      >
        <Col xs={10} className='d-flex flex-column'>
          <a  className='h5' href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Button 
          variant="outline-dark"
          onClick={() => dispatch(addFavorite(data.title))}
         ><i class="bi bi-bookmark"></i>
        </Button>
      </Row>
  )
}

export default Job
