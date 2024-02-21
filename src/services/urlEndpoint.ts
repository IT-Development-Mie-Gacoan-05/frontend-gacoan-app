const base_API = {
    baseURL: process.env.REACT_APP_API_KEY,
    timeout: 60000,
};

const urlsEndpoint = {
    GET_DATA_PEGAWAI: `${base_API.baseURL}/users`,
};

export default urlsEndpoint;
