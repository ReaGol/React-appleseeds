import React from 'react'
import { Link } from 'react-router-dom';
function Product() {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Hat</Link>
        </li>
        <li>
          <Link to='/products/p2'>Shirt</Link>
        </li>
        <li>
          <Link to='/products/p3'>Pants</Link>
        </li>
      </ul>
    </section>
  );
}

export default Product;