import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaKey, FaLock, FaUserAstronaut} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
      return;
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (error) {
        console.log(error.data.message);
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <FormContainer>
      <h1 className="mt-8">Sign Up</h1>
      <Form onSubmit={submitHandler}>

      <Form.Group controlId="name" className="mt-4">
          <Form.Label>Name</Form.Label>
          <div className="input-group">
            <span className="input-group-prepend">
              <FaUserAstronaut
                style={{ fontSize: 24, marginRight: 10, marginTop: 12 }}
                className="flex justify-center items-center"
              />
            </span>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              className="rounded"
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </div>
        </Form.Group>

        <Form.Group controlId="email" className="mt-4">
          <Form.Label>Email Address</Form.Label>
          <div className="input-group">
            <span className="input-group-prepend">
              <FaEnvelope
                style={{ fontSize: 24, marginRight: 10, marginTop: 12 }}
                className="flex justify-center items-center"
              />
            </span>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              className="rounded"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </div>
        </Form.Group>

        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <span className="input-group-prepend">
              <FaLock
                style={{ fontSize: 24, marginRight: 10, marginTop: 12 }}
                className="flex justify-center items-center"
              />
            </span>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              className="rounded"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </div>
        </Form.Group>

        <Form.Group controlId="confirmPassword" className="my-3">
          <Form.Label>Confirm Password</Form.Label>
          <div className="input-group">
            <span className="input-group-prepend">
              <FaKey
                style={{ fontSize: 24, marginRight: 10, marginTop: 12 }}
                className="flex justify-center items-center"
              />
            </span>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              className="rounded"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </div>
        </Form.Group>

        <div className="flex items-center justify-center">
          <Button
            className="my-3 "
            type="submit"
            variant="primary"
            disabled={isLoading}
          >
            Register
          </Button>
        </div>

        {isLoading ? <Loader /> : null}
      </Form>

      <Row className="py-3">
        <Col>
          Already a User?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
