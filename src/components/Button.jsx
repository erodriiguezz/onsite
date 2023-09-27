import Button from "react-bootstrap/Button";

const button = (props) => {
  return (
    <Button
      type={props.type}
      style={{
        width: "100%",
        backgroundColor: "#007CB0",
        borderColor: "#007CB0",
      }}
    >
      {props.children}
    </Button>
  );
};

export default button;
