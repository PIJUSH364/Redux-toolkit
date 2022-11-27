import axios from 'axios';
import React from 'react';

function App() {
  {
    console.log('data _fetch');

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (res) {
        // console.log('res_data', res.data);
        const users = res.data.map((user) => user.id);
        console.log(typeof users);
        console.log(users);
      })
      .catch(function (error) {
        // handle error
        console.log('Error msg', error);
      });
  }
  return <div>App</div>;
}

export default App;
