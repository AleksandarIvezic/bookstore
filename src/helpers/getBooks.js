const getBooks = async () => {
  try {
    const request = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y7GRhICIV29PxZHgTcv0/books');
    const result = await request.json();
    const dataArr = Object.entries(result).map(([key, value]) => {
      const [values] = value;
      return {
        id: key,
        ...values,
      };
    });
    return dataArr;
  } catch (err) {
    return err;
  }
};

const showBooks = async () => {
  const data = await getBooks();
  console.log('data', data);
};

showBooks();
export default getBooks;
