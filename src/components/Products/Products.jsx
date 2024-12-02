const Products = ({ books }) => {
  return (
    <>
      <div>Products</div>
      <ul>
        {books.map(book => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Products;
