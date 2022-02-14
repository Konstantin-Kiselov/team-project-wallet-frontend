export async function fetchBankData() {
  const response = await fetch(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}
