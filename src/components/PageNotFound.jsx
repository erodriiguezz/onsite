import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="d-flex flex-column align-items-center justify-content-center vh-100 ">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="display-2 fw-bold">Page Not Found!</h2>

      <Button className="mt-5" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </section>
  );
};

export default PageNotFound;
