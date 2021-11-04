import React from "react";
import classes from "./products.module.css";
import { Link } from "react-router-dom";

const productData = [
  {
    label: "A book",
    id: "p1",
  },
  {
    label: "A Carpet",
    id: "p2",
  },
  {
    label: "A Course",
    id: "p3",
  },
];

const productLinks = productData.map(({ label, id }) => {
  return (
    <li>
      <Link to={`/products/${id}`}>{label}</Link>
    </li>
  );
});

function Products() {
  return (
    <section>
      <h1 className={classes.h1}>Products Page</h1>
      <ul>{productLinks}</ul>
    </section>
  );
}

export default Products;
