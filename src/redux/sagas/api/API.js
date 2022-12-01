import axios from 'axios';
import {configs} from '../../../utils/constants';
import {Alert} from 'react-native';

const API = axios.create({
  timeout: 1000 * 50,
  headers: {
    api_key: 'no_api_key',
  },
});

API.interceptors.request.use(
  async function (request) {
    request.url = configs.URL;
    request.headers = {
      Authorization: 'Bearer ' + configs.BEARER_TOKEN,
    };
    // console.log("REQUEST -- > ", request);
    return request;
  },
  function (error) {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  function (response) {
    // console.log("RESPONSE -- > ", response);
    return Promise.resolve(response);
  },
  function (error) {
    if (error.response) {
      console.log('ERROR --> ', error.response);

      if (
        error.response.status == 502 ||
        // bad gateway
        error.response.status == 404 ||
        // not found
        error.response.status == 503
        // service unavailable
      ) {
        Alert.alert(
          'Temporary Unavailable.',
          'Development Server is not available at this time. Please Try again later.',
          {cancelable: false},
        );
      }
      return Promise.reject(error.response);
    } else {
      // console.log("ERROR No Response--> ", error.response);
      return Promise.reject(error);
    }
  },
);

export default API;
