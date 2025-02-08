export const VALIDATE = {
  MINIMUM_NAME_LENGTH: 3,
  MINIMUM_ADDRESS_LENGTH: 5,
  MINIMUM_PASSWORD_LENGTH: 8,
  EMAIL_VALIDATION_REGEX: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  PHONE_VALIDATION_REGEX: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
};

export const MESSAGES = {
  FIELD_REQUIRED: 'The field you entered must not be empty',
  EMAIL_REQUIRED: 'Email must not be empty',
  INVALID_EMAIL: 'Invalid email',
  INVALID_PHONE_NUMBER: 'Invalid phone number',
  INVALID_EMAIL_OR_PHONE_NUMBER: 'Invalid email address or phone number',
  INVALID_FULL_NAME: 'Full name must be at least 3 characters',
  INVALID_PASSWORD: 'Password must be 8 characters long',
  INVALID_ADDRESS: 'Address must be at least 5 characters',
  INCORRECT_PASSWORD: 'Incorrect password',
  INCORRECT_MUST_MATCH_PASSWORD: 'Passwords do not match',
  PASSWORD_REQUIRED: 'Password must not be empty',
  CONFIRM_PASSWORD_REQUIRED: 'Password confirmation must not be empty',
  ACCOUNT_ALREADY_EXISTS: 'Account already exists',
  ACCOUNT_DOES_NOT_EXIST: 'Account does not exist',
  IMAGE_UPDATE_SUCCESS: 'Image update successful',
  IMAGE_UPDATE_FAILURE: 'Image update unsuccessful',
  VERIFY_EMAIL_FAILED:
    "Sorry, we can't send you a link to reset your password. Please contact Instagram for help."
};
