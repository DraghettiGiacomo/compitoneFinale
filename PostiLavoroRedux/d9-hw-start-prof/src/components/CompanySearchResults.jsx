import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
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
        <i id="iconHome" className="bi bi-house text-center my-5" onClick={() => navigate("/")}></i>
        <Col>
          <Col className="border-dark border-bottom mb-3 pb-2 d-flex justify-content-between align-items-center">
            <h1 className="display-5">Job posting for: {params.company}</h1>
            <Button className="d-flex gap-2 align-items-center h-50" variant="outline-primary" onClick={() => navigate("/favorites")}><i class="bi bi-list-ul"></i> Lavori salvati</Button>
          </Col>
          <Col className="my-3 d-flex flex-wrap">
            {jobs.map(jobData => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
