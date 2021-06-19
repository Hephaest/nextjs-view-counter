import axios from 'axios';

const firebaseUrl = `${process.env.FIRE_BASE_URL}/counters.json`;
const shieldsUrl = 'https://img.shields.io/static/v1?color=lightgrey&style=flat-square&label=Views';

const getRequestHandler = async (res) => {
  const response = await fetch(firebaseUrl);
  const jsonData = await response.json();
  const { counter } = jsonData;

  const imgResponse = await axios({url: `${shieldsUrl}&message=${counter}`});
  const { data: imgData } = imgResponse;
  res.setHeader('content-type', 'image/svg+xml');

  fetch(firebaseUrl, {
    method: 'PUT',
    body: JSON.stringify({counter: counter + 1}),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  res.status(200).send(imgData);
};

const putRequestHandler = (res, data) => {
  fetch(firebaseUrl, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  res.status(200).send({});
}

const counter = (req, res) => {
  const { method: httpRequestMethod, body: data } = req;
  switch (httpRequestMethod) {
    case 'GET': getRequestHandler(res); break;
    case 'PUT': putRequestHandler(res, data); break;
    default: res.status(404).send('Illegal request!'); break;
  }
}

export default counter;