import React from "react";

import { UserOutlined, LockOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons';

import './sign-in.scss';
import { useTranslation } from "react-i18next";
import { defaultSignInValues, SignInFormFields, signInValidators } from "../form/signInForm";
import { useFormik } from "formik";
import Input from "../../../components/input/input";
import { openErrorNotificationWithIcon } from "../../../components/notification/notification";
import { useUserStore } from "../../../store/user-store/user-store";
import { homeRoute } from "../../../shared/routes/routes";
import { useHistory } from "react-router-dom";

const SignIn = () => {

  const { t } = useTranslation();

  const submitSignIn = async () => {
    if (!isValid) {
      const errorEntries = Object.entries(errors);
      const formErrors = errorEntries.map(e => e[1]);
      openErrorNotificationWithIcon('Invalid form data!', formErrors.join(', '));
      return;
    }
    // TODO: Call API & setAccessToken
  }

  const { handleChange, values, errors, isValid } = useFormik({
    initialValues: defaultSignInValues,
    onSubmit: submitSignIn,
    validationSchema: signInValidators(
      t('signIn.validation.emailMessage1'), 
      t('signIn.validation.emailMessage2'), 
      t('signIn.validation.passwordMessage')
    )
  });

  return (
    <>
      <div className='sign-in'>
          <div className='background'/>
          <div className='content'>
            <div className='content__wrapper'>
              <p className='content__wrapper__heading'>{t('signIn.heading')}</p>
              <Input
                id={SignInFormFields.email}
                name={SignInFormFields.email}
                placeholder={t('signIn.email')}
                value={values.email}
                className='content__wrapper__input'
                onChange={handleChange}
                errors={errors}
                icon={<UserOutlined/>}
              />
              <Input
                id={SignInFormFields.password}
                name={SignInFormFields.password}
                placeholder={t('signIn.password')}
                value={values.password}
                className='content__wrapper__input'
                onChange={handleChange}
                type={'password'}
                errors={errors}
                icon={<LockOutlined/>}
              />
              <a className='content__wrapper__forgot-link'>{t('signIn.forgotPassword')}</a>
              <button onClick={submitSignIn} className='content__wrapper__confirmation-button'>{t('signIn.heading')}</button>
              <p className='content__wrapper__social-sign-in__label'>{t('signIn.socialSignIn.label')} </p>
              <div className='content__wrapper__social-sign-in'>
                <button className='content__wrapper__social-sign-in__button facebook'><FacebookOutlined /> {t('signIn.socialSignIn.facebook')} </button>
                <button className='content__wrapper__social-sign-in__button google'><GoogleOutlined /> {t('signIn.socialSignIn.google')} </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default SignIn;
