import * as Yup from 'yup';

export enum SignInFormFields {
    email = 'email',
    password = 'password'
};

export const defaultSignInValues: Record<SignInFormFields, string> = {
    [SignInFormFields.email]: '',
    [SignInFormFields.password]: '',
};

export const signInValidators = (emailMessage1: string, emailMessage2: string, passwordMessage: string) => Yup.object({
    email: Yup.string().required(emailMessage1).email(emailMessage2),
    password: Yup.string().required(passwordMessage)
  })
