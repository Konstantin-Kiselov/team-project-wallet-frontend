import axios from 'axios';

// get category
export async function getCategory() {
  try {
    console.log('Get Expenditure Category');
    const response = await axios.get('/transactions/categories');
    console.log('bbbbbbbbbbbbbbbbbbbbbbbb', response);

    return response;
  } catch (error) {
    console.error(error);
  }
}

// add transaction

export async function addTransaction(requestBody) {
  try {
    console.log('Post request', requestBody);

    const response = await axios.post('/transactions', { requestBody });
    console.log('response.data', response.data);
  } catch (error) {
    console.error(error);
  }
}
