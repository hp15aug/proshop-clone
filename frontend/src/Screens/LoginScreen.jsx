import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-toastify";

import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch= useDispatch();
  const navigate = useNavigate();

  const [login, {isLoading}] = useLoginMutation();

  const {userInfo} = useSelector((state) => state.auth);

  const {search} = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if(userInfo){
        navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);
  

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        const res =  await login({email, password}).unwrap();
        dispatch(setCredentials({...res}));
        navigate(redirect);
    } catch (error) {
        console.log(error.data.message)
        
        toast.error(error?.data?.message || error.error)

    }
  };

  return (
    <FormContainer>
      <h1 className="mt-8">Sign In</h1>
      <Form onSubmit={submitHandler}>
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

        <div className="flex items-center justify-center">
          <Button className="my-3 " type="submit" variant="primary" disabled={isLoading}>
            Sign In
          </Button>
        </div>

        {isLoading? <Loader />: null }
      </Form>

      <Row className="py-3">
        <Col>
          New User? <Link to={redirect? `/register?redirect=${redirect}`: '/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
