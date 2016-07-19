import { Router } from 'express';
import axios from 'axios';

const app = Router();

const urlRestlet = 'https://rest.na2.netsuite.com/app/site/hosting/restlet.nl?script=64&deploy=2';

const headers = { Authorization: 'NLAuth nlauth_account=TSTDRV1433032, nlauth_email=ebroberg@wsgc.com, nlauth_signature=5171201Rsj' };

app.use('/', (req, res) => {
  const start = new Date().getTime(); // milliseconds
  axios({
    url: urlRestlet,
    method: 'get',
    headers,
  })
    .then((data) => {
      console.log('restlet DATA', data.data);
      res.send(data.data);
      // const end = new Date().getTime();
      // console.log('time in seconds: ', (end - start) / 1000);
    })
    .catch(err => console.log('ERROR', err));
});


export default app;

