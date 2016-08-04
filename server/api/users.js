import { Router } from 'express';
import axios from 'axios';

const app = Router();

// const userNames = ['Bob', 'Joe', 'Tommy'];

const urlSuitelet = 'https://forms.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=60&deploy=2&compid=TSTDRV1433032&h=7b4880622b71596d5747';

const urlRestlet = 'https://rest.na2.netsuite.com/app/site/hosting/restlet.nl?script=64&deploy=2';

const headers = { Authorization: 'NLAuth nlauth_account=TSTDRV1433032, nlauth_email=ebroberg@wsgc.com, nlauth_signature=Ab6871eb--' };

app.use('/', (req, res) => {
  const start = new Date().getTime(); // milliseconds
  axios({
    url: urlSuitelet,
    method: 'get',
    // headers: ,
  })
    .then((data) => {
      console.log('SSSS suitelet DATA', data.data)
      res.json(data.data);
      const end = new Date().getTime();
      console.log('time in seconds: ', (end - start) / 1000);
    })
    .catch(err => console.log('ERROR', err));
});

// app.use('/', (req, res) => res.json(userNames));

export default app;

// Restlet:
// 'https://rest.na2.netsuite.com/app/site/hosting/restlet.nl?script=64&deploy=2'

// Suitelet:
// 'https://forms.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=60&deploy=2&compid=TSTDRV1433032&h=7b4880622b71596d5747'

