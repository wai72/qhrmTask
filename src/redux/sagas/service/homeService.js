import {configs} from '../../../utils/constants';
import API from '../api/API';

const homeService = {
  getMenu: () =>
    API.post(configs.URL)
      .then(response => response.data)
      .catch(function (error) {
        throw error;
      }),
};

export default homeService;
