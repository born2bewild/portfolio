import axios from 'axios';
import { stringify } from 'querystring';

const RECAPTCHA_API_URL = 'https://www.google.com/recaptcha/api/';

export const validateReCaptchaToken = async (token: string) => {
  const url = RECAPTCHA_API_URL + 'siteverify';
  const secret = process.env.RECAPTCHA_PRIVATE_KEY;
  const payload = stringify({
    secret,
    response: token,
  });
  try {
    const { data } = await axios.post(url, payload);
    if (data.success) {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
};
