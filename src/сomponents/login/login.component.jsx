import './login.component.css';
import "yup-phone";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';






const SignupSchema = Yup.object().shape({

  email: Yup.string()
    .email('Некорретный формат логина')
    .required('Обязательное для заполнения'),

  password: Yup.string()
    .min(5, 'Слишком короткое название')
    .max(10, 'Слишком длинное название')
    .required('Обязательное для заполнения'),

  checkbox: Yup.boolean()
    .oneOf([true], 'Пожалуйста, подтвердите свое согласие')
    .required("Пожалуйста, подтвердите свое согласие"),

});

const Login = () => (
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

            console.log(values);
          }}
        >
          {({ errors, touched }) => {
            console.log(touched);
            console.log(errors);

            return (
              <Form >
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
                      name="company" />
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



);

export default Login;