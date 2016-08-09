import { Router } from 'express';
import axios from 'axios';

const app = Router();

const urlRestlet = 'https://rest.na2.netsuite.com/app/site/hosting/restlet.nl?script=64&deploy=2';

const headers = { Authorization: 'NLAuth nlauth_account=6666, nlauth_email=66666, nlauth_signature=6666' };

console.log('XXXXX', headers)
app.use('/', (req, res) => {
  const start = new Date().getTime(); // milliseconds
  axios({
    url: urlRestlet,
    method: 'get',
    headers,
  })
    .then((data) => {
      // console.log('RRRR restlet DATA', data.data);
      res.send(data.data);
      const end = new Date().getTime();
      console.log('time in seconds: ', (end - start) / 1000);
    })
    .catch(err => console.log('ERROR', err));
});


export default app;

