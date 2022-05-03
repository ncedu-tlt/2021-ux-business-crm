import './feedback.components.css';
import "yup-phone";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Слишком короткое имя')
    .max(100, 'Слишком длинное имя')
    .required('Обязательное для заполнения'),

  phone: Yup.string()
    .required('Обязательное для заполнения')
    .phone("ru", true, 'Некорретный формат телефона'),

  email: Yup.string()
    .email('Некорретный формат почты')
    .required('Обязательное для заполнения'),

  company: Yup.string()
    .min(5, 'Слишком короткое название')
    .max(100, 'Слишком длинное название')
    .required('Обязательное для заполнения'),

  checkbox: Yup.boolean()
    .oneOf([true], 'Пожалуйста, подтвердите свое согласие')
    .required("Пожалуйста, подтвердите свое согласие"),

});

const Feedback = () => (
  <div className='feedback'>
    <div className='container1'>
      <div className='container2'>
        <div className='feedback_top'>
          <h1>ФОРМА ОБРАТНОЙ СВЯЗИ</h1>
          <span className='span_top'>Заполните нашу форму, </span>
          <span className='span_top'>чтобы менеджер связался с Вами</span>
        </div>


        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            company: '',
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
                  <div className='icon_name'>
                    <Field className='field'
                      placeholder="ВАШЕ ИМЯ"
                      name="name" />
                    {errors.name && touched.name ? (
                      <div className='error'>{errors.name}</div>
                    ) : null}
                  </div>
                </div>

                <div className='field_wrapper'>
                  <div className='icon_phone'>
                    <Field className='field'
                      name="phone"
                      type="phone"
                      placeholder="ВАШ НОМЕР ТЕЛЕФОНА" />
                    {errors.phone && touched.phone ? <div className='error'>{errors.phone}</div> : null}
                  </div>
                </div>

                <div className='field_wrapper'>
                  <div className='icon_email'>
                    <Field className='field'
                      name="email"
                      type="email"
                      placeholder="ВАША ЭЛЕКТРОННАЯ ПОЧТА"
                    />
                    {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                  </div>
                </div>

                <div className='field_wrapper'>
                  <div className='icon_company'>
                    <Field className='field'
                      placeholder='НАЗВАНИЕ ВАШЕЙ КОМПАНИИ'
                      name="company" />
                    {errors.company && touched.company ? (
                      <div className='error'>{errors.company}</div>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className='btn'>ОТПРАВИТЬ ЗАЯВКУ</button>

                <div className='term_agree'>
                  <Field
                    name="checkbox" type="checkbox" />
                  <span>Я принимаю условия обработки <a>персональных данных</a></span>
                  {errors.checkbox && touched.checkbox ? (
                    <div className='error'>{errors.checkbox}</div>
                  ) : null}
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  </div>



);

export default Feedback;