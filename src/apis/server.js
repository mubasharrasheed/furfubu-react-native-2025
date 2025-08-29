import api from './config';

export const userService = {
  login: async credentials => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  register: async userData => {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  },

  forgotPassword: async data => {
    const response = await api.post('/auth/forgotPassword', data);
    return response.data;
  },

  VerifyOtp: async data => {
    const response = await api.post('/users/verifyforgotpin', data);
    return response.data;
  },

  createNewPassword: async data => {
    const response = await api.post('/users/resetpassword', data);
    return response.data;
  },

  uploadImage: async data => {
    const response = await api.post('/users/editprofilee', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },
};
