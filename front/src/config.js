const config = {
  production: {
    apiUrl: '/api',
  },
  development: {
    apiUrl: 'http://localhost:4444/api',
  },
};

export default config[process.env.NODE_ENV];
