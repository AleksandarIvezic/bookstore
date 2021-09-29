// eslint-disable-next-line camelcase
const postBook = async (item_id, title, category) => {
  const data = {
    item_id,
    title,
    category,
  };
  try {
    const request = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y7GRhICIV29PxZHgTcv0/books', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await request.JSON();
    return result;
  } catch (err) {
    return err;
  }
};

export default postBook;
