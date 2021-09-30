const deleteBook = async (itemId) => {
  try {
    const request = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y7GRhICIV29PxZHgTcv0/books/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const result = await request.json();
    return result;
  } catch (err) {
    return err;
  }
};

export default deleteBook;
