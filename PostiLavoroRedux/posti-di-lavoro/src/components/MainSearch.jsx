import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="p-5 border-secondary border-bottom">
          <h1 className="col-7 mx-auto display-1 text-center my-5 py-5">Find a remote jobs and be happy!!</h1>
          <Col xs={12} className="my-3 d-flex justify-content-between align-items-center">
            <h2 className="display-5">Remote Jobs Search</h2>
            <Button className="d-flex gap-2 align-items-center h-50" variant="outline-primary" onClick={() => navigate("/favorites")}><i class="bi bi-list-ul"></i> Lavori salvati</Button>
          </Col>
          <Col xs={12} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
            </Form>
          </Col>
        </Col>
        <Col xs={12} className="my-2 d-flex flex-wrap justify-content-center">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
