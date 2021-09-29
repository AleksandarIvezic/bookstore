const getBooks = async () => {
  try {
    const request = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y7GRhICIV29PxZHgTcv0/books');
    const result = await request.json();
    return result;
  } catch (err) {
    return err;
  }
};

export default getBooks;
