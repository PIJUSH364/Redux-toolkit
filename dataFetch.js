async function getResponse() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json(); // Extracting data as a JSON Object from the response
  return data;
}
console.log('data_fetching', getResponse());

getResponse().then((movies) => {
  console.log(movies);
});
