import './login.component.css';
import "yup-phone";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {Navigate, useNavigate} from "react-router-dom";
import database from "./Database.json";




const SignupSchema = Yup.object().shape({

  email: Yup.string()
    .email('Некорретный формат логина')
    .required('Обязательное для заполнения'),

  password: Yup.string()
    .min(5, 'Слишком короткий пароль')
    .max(30, 'Слишком длинный пароль')
    .required('Обязательное для заполнения'),

  checkbox: Yup.boolean()


});

const Login = () => {
  let navigate = useNavigate();
  return (
  <div className='login'>
    <div className='container1'>
      <div className='container2'>
        <div className='login_top'>
          <h1>АВТОРИЗАЦИЯ</h1>
          <span className='span_top'>Пожалуйства, авторизируйтесь </span>
        </div>


        <Formik
          initialValues={{
            email: '',
            password: '',
            checkbox: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            if (database["login_admin"][0].login !== values.email){
              return;
            }
            if (database["login_admin"][0].password !== values.password){
              return;
            }

            localStorage.setItem("isLogged","true")
            navigate("/");
          }}
        >
          {({ errors, touched }) => {
            return (
              <Form  >
                <div className='field_wrapper'>
                  <div className='icon_email'>
                    <Field className='field'
                      name="email"
                      type="email"
                      placeholder="ВАШ ЛОГИН(E-MAIL)"
                    />
                    {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                  </div>
                </div>

                <div className='field_wrapper'>
                  <div className='icon_password'>
                    <Field className='field'
                      placeholder='ВАШ ПАРОЛЬ'
                      type="password"
                      name="password" />
                    {errors.password && touched.password ? (
                      <div className='error'>{errors.password}</div>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className='btn'>АВТОРИЗОВАТЬСЯ</button>

                <div className='memor'>
                  <Field
                    name="checkbox" type="checkbox" />
                  <span>Запомнить меня на этом компьютере</span>

                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  </div>

)

};

export default Login;
