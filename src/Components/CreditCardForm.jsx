import React from "react";
import useForms from "../useForms";
import Navbar from "./NavBar";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/creditform.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Swal from "sweetalert2";

const CreditCardForm = () => {
  const mostrarCompra = () => {
    Swal.fire({
      title: "Seguro que desea terminar con la compra?",
      text: "Recibira un correo con la confirmacion",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, confirmar compra!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Hecho!", "Su compra ha sido realizada.", "success");
      }
    });
  };
  const { handleChange, handleFocus, handleSubmit, values, errors } =
    useForms();
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
            <div className="creditCard">
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Nombre y apellido"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="numero de la tarjeta"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="cardType"
                      id="cardType"
                      data-testid="cardType"
                      placeholder="Tipo"
                      value={values.cardType}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ctype}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Fecha de vencimiento"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="CCV"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="cardPostalCode"
                      data-testid="cardPostalCode"
                      name="cardPostalCode"
                      placeholder="DNI"
                      value={values.cardPostalCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cpostal}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                className=" mt-8"
                size={"block"}
                data-testid="validateButton"
                id="validateButton"
                type="submit"
                onClick={mostrarCompra}
              >
                Confirmar
              </Button>
            </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
