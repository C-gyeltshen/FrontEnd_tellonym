import React from "react";

async function fetchExampleData() {
  // ! Call the backend url:
  // ? Your backend is running on your machine on port 3001
  // ? So calling the url (IP-ADDRESS:PORT NUMBER)
  const response = await fetch("http://localhost:3001/example-json");
  // ? The response is in JSON format
  // ? The .json() function converts the response to JSON format
  const data = await response.json();
  // ? The data is returned to the variable
  return data;
}

// ! Don't forget the "async" keyword before the function name
// ? Because you are fetching data from the backend - takes time
const ExamplePage = async () => {
  // ! This is your UI component.

  // ? Get your data from the backend
  // ? You call the function to get the data
  const backend_data = await fetchExampleData();

  // ? Since the data is in json format
  // ! You can access the data and set it into a new variable
  // ! to use it in your UI component - UP TO YOU
  // ? Example:
  const message = backend_data.jsonmsg.message;

  // ? Before your Display the HTML UI element
  return (
    <div className='flex justify-center items-start h-screen bg-gray-100'>
      <main className='flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg'>
        <h1>Example Page</h1>

        {/* Display your data from backend in your UI component */}
        <h2>{JSON.stringify(backend_data, null, 2)}</h2>
        {/* Access data just like how you access a json object */}
        <h2>{backend_data.jsonmsg.message}</h2>
        <h2>{message}</h2>
      </main>
    </div>
  );
};

export default ExamplePage;
