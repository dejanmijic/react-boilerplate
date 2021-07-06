import * as Yup from 'yup';

export enum SignUpFormFields {
    firstName = 'firstName',
    lastName = 'lastName',
    email = 'email',
    password = 'password',
    confirmPassword = 'confirmPassword'
};

export const defaultSignUpValues: Record<SignUpFormFields, string> = {
    [SignUpFormFields.firstName]: '',
    [SignUpFormFields.lastName]: '',
    [SignUpFormFields.email]: '',
    [SignUpFormFields.password]: '',
    [SignUpFormFields.confirmPassword]: '',
};

export const signUpValidators = (
    firstNameMessage: string,
    lastNameMessage: string,
    emailMessage1: string,
    emailMessage2: string,
    passwordMessage: string,
    confirmPasswordMessage: string
    ) => Yup.object({
    firstName: Yup.string().required(firstNameMessage),
    lastName: Yup.string().required(lastNameMessage),
    email: Yup.string().required(emailMessage1).email(emailMessage2),
    password: Yup.string().min(4).required(passwordMessage),
    confirmPassword: Yup.string().min(4).required(confirmPasswordMessage)
  })