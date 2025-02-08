import { MESSAGES, VALIDATE } from '../constants';

const validateField = (value, field) => {
  switch (field) {
    case 'username':
      if (value.length < 3) {
        return MESSAGES.INVALID_FULL_NAME;
      } else {
        return '';
      }

    case 'email':
      if (!VALIDATE.EMAIL_VALIDATION_REGEX.test(value)) {
        return MESSAGES.INVALID_EMAIL;
      } else {
        return '';
      }

    case 'emailOrPhone':
      if (
        VALIDATE.EMAIL_VALIDATION_REGEX.test(value) ||
        VALIDATE.PHONE_VALIDATION_REGEX.test(value)
      ) {
        return '';
      } else {
        return MESSAGES.INVALID_EMAIL_OR_PHONE_NUMBER;
      }

    case 'password':
      if (value.length < VALIDATE.MINIMUM_PASSWORD_LENGTH) {
        return MESSAGES.INVALID_PASSWORD;
      } else {
        return '';
      }

    case 'address':
      if (value.length < VALIDATE.MINIMUM_ADDRESS_LENGTH) {
        return MESSAGES.INVALID_ADDRESS;
      } else {
        return '';
      }

    case 'phone':
      if (!VALIDATE.PHONE_VALIDATION_REGEX.test(value)) {
        return MESSAGES.INVALID_PHONE;
      } else {
        return '';
      }

    default:
      return '';
  }
};

export default validateField;
