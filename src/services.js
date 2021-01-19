import axios from "axios";

export  function startProcess() {
  /* return axios.post('http://localhost:8080/engine-rest/deployment/create',
  {
    "headers": {
      'Content-Type': 'application/json'
    },
    "Data": {
    }
  }) */

  var data = JSON.stringify({});

  var config = {
    method: 'post',
    url: 'http://localhost:8080/engine-rest/process-definition/key/payment-retrieval/start',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}



