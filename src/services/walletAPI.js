// get category
export async function getCategory() {
  try {
    console.log('Get Expenditure Category');
    //   const response = await axios.get('/category');
    //   console.log(response);
  } catch (error) {
    console.error(error);
  }

  //   const response = await fetch(urlTrending);
  //   if (response.ok) {
  //     return await response.json();
  //   }
  //   return Promise.reject(new Error('No selection of trending films!'));
}

// add transaction

export async function addTransaction(requestBody) {
  try {
    console.log('Post request', requestBody);
    //   const response = await axios.post('/transaction', {requestBody});
    //   console.log(response);
  } catch (error) {
    console.error(error);
  }
}
