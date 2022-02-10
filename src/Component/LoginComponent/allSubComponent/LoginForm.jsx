import React, {useContext, useRef} from 'react';
import {Button, Alert, Col, Container, Form, Row} from "react-bootstrap";
import {AiFillLock} from "@react-icons/all-files/ai/AiFillLock";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginAction} from "../../../Redux/actions/loginLogoutAction";
import {LoginComponentContext} from "../LoginComponent";


function LoginForm(props) {
    // hooks
    const dispatch = useDispatch()
    const loginFormRef = useRef()
    const loginBtnRef = useRef()

    // context api
    const {setLogStatus, logFailedAlert, setLogFailedAlert} = useContext(LoginComponentContext)

    const {register, handleSubmit, reset, formState: {errors}} = useForm();


    // on login
    const onSubmit = data => {
        const payload = {
            data: data,
            loginFormRef: loginFormRef,
            loginBtnRef: loginBtnRef,
            reset: reset,
            setLogStatus: setLogStatus,
            setLogFailedAlert : setLogFailedAlert
        }

        dispatch(loginAction(payload))
    }

    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={4} md={6} sm={8} xs={12} className="pt-md-5">
                        <div className="loginForm mt-3 mt-md-5 d-flex flex-column align-items-center ">
                            {/*login icon*/}
                            <AiFillLock className="loginIcon mt-4"/>

                            {/*login form start*/}
                            <Form ref={loginFormRef} onSubmit={handleSubmit(onSubmit)} className="w-100 mt-5">

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Control
                                        className="inputField loginField"
                                        type="text"
                                        placeholder="type your user name"
                                        {...register("userName", {
                                            required: true,
                                            minLength: "3",
                                            maxLength: "36"
                                        })}
                                    />

                                    {/*validation*/}
                                    {errors.userName && <span className="text-danger">
                                        {errors.userName.type == "required" && "This field is required"}
                                        {errors.userName.type == "minLength" && "This field must should at least 3 characters"}
                                        {errors.userName.type == "maxLength" && "This field length maximum 36 characters"}
                                        </span>}
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control
                                        className="inputField loginField" type="password"
                                        placeholder="type your password"
                                        {...register("password", {
                                            required: true,
                                            minLength: "3",
                                            maxLength: "36"
                                        })}/>

                                    {/*validation*/}
                                    {errors.password && <span className="text-danger">
                                        {errors.password.type == "required" && "This field is required"}
                                        {errors.password.type == "minLength" && "This field must should at least 3 characters"}
                                        {errors.password.type == "maxLength" && "This field length maximum 36 characters"}
                                        </span>}
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3">
                                    <Button ref={loginBtnRef} type="submit" className="themeBtn">Login</Button>
                                </Form.Group>
                            </Form>

                            {/*login failed message*/}
                            {logFailedAlert == true && <Alert className="text-center w-100" variant="danger">
                                <span>login failed</span>
                            </Alert>}

                            {/*login form footer*/}
                            <span className="loginFooter">all right reserved <a target="_blank"
                                                                                href="https://sabbirinfo.com">www.sabbirinfo.com</a></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LoginForm;