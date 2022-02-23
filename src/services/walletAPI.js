import axios from 'axios';

// get category
export async function getCategory() {
  try {
    console.log('Get Expenditure Category');
    const response = await axios.get('/transactions/categories');

    return response;
  } catch (error) {
    console.error(error);
  }
}
