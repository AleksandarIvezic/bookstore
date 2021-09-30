const postBook = async (itemId, title, category) => {
  const data = {
    item_id: itemId,
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
    const result = await request.json();
    return result;
  } catch (err) {
    return err;
  }
};

export default postBook;
