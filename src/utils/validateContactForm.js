export const validateContactForm = ({ firstName, lastName, phoneNum, email }) => {
    const errors = {};

    if (!firstName) {
        errors.firstName = 'Required';
    } else if (firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (firstName.length > 15) {
        errors.firstName = 'Must be 15 charecters of less.'
    }

    if (!lastName) {
        errors.lastName = 'Required';
    } else if (lastName.length < 2) {
        errors.firstName.length = 'Must be at least 2 characters.';
    } else if (lastName > 15) {
        errors.firstName = 'Must be 15 charecters of less.'
    }

    const reg = /^\d+$/;

    if (!reg.test(phoneNum)) {
        errors.phoneNum = 'The phone should contain only numbers.';
    }

    if (!email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors
};