import axios from 'axios';

export default function createAppClient() {
  const baseURL = __DEV__
    ? 'http://192.168.0.228:3000/nails'
    : 'http://load-loadb-J7NVSRJA7C8E-1060774176.eu-central-1.elb.amazonaws.com/nails';
  return axios.create({
    baseURL,
  });
}
