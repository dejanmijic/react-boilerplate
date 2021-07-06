import React from "react";

import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';

import './sign-up.scss';
import { useTranslation } from "react-i18next";
import { defaultSignUpValues, SignUpFormFields, signUpValidators } from "../form/signUpForm";
import Input from "../../../components/input/input";
import { useFormik } from "formik";
import { openErrorNotificationWithIcon } from "../../../components/notification/notification";

const SignUp = () => {

  const { t } = useTranslation();

  const submitSignUp = async () => {
    if (!isValid) {
      const errorEntries = Object.entries(errors);
      const formErrors = errorEntries.map(e => e[1]);
      openErrorNotificationWithIcon('Invalid form data!', formErrors.join(', '));
    }
  }

  const { handleChange, values, errors, isValid } = useFormik({
    initialValues: defaultSignUpValues,
    onSubmit: submitSignUp,
    validationSchema: signUpValidators(
      t('signUp.validation.firstName'),
      t('signUp.validation.lastName'),
      t('signIn.validation.emailMessage1'), 
      t('signIn.validation.emailMessage2'),
      t('signUp.validation.password'),
      t('signUp.validation.confirmPassword'),
    )
  });

  return (
    <>
      <div className='sign-up'>
          <div className='background'/>
          <div className='content'>
            <div className='content__wrapper'>
              <p className='content__wrapper__heading'>{t('signUp.heading')}</p>
              <Input
                id={SignUpFormFields.firstName}
                name={SignUpFormFields.firstName}
                placeholder={t('signUp.firstName')}
                value={values.firstName}
                className='content__wrapper__input'
                onChange={handleChange}
                errors={errors}
              />
              <Input
                id={SignUpFormFields.lastName}
                name={SignUpFormFields.lastName}
                placeholder={t('signUp.lastName')}
                value={values.lastName}
                className='content__wrapper__input'
                onChange={handleChange}
                errors={errors}
              />
              <Input
                id={SignUpFormFields.email}
                name={SignUpFormFields.email}
                placeholder={t('signIn.email')}
                value={values.email}
                className='content__wrapper__input'
                onChange={handleChange}
                errors={errors}
              />
              <Input
                id={SignUpFormFields.password}
                name={SignUpFormFields.password}
                placeholder={t('signIn.password')}
                value={values.password}
                type={'password'}
                className='content__wrapper__input'
                onChange={handleChange}
                errors={errors}
              />
              <Input
                id={SignUpFormFields.confirmPassword}
                name={SignUpFormFields.confirmPassword}
                placeholder={t('signUp.confirmPassword')}
                value={values.confirmPassword}
                type={'password'}
                className='content__wrapper__input'
                onChange={handleChange}
                errors={errors}
              />
              <button 
                className='content__wrapper__confirmation-button'
                onClick={submitSignUp}
              >
                {t('signUp.heading')}
              </button>
              <p className='content__wrapper__social-sign-up__label'>{t('signUp.socialSignUp.label')} </p>
              <div className='content__wrapper__social-sign-up'>
                <button className='content__wrapper__social-sign-up__button facebook'><FacebookOutlined /> {t('signIn.socialSignIn.facebook')} </button>
                <button className='content__wrapper__social-sign-up__button google'><GoogleOutlined /> {t('signIn.socialSignIn.google')} </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default SignUp;
