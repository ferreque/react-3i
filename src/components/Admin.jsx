import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
import EditProduct from "./EditProduct";
import EditUser from "./EditUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
const Admin = () => {
  const navegate = useNavigate();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoadingProd, setIsLoadingProd] = useState(true);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [deleteProd, setDeleteProd] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const handleShowProd = (product) => {
    setProduct(product);
    setShowProduct(true);
  };

  const handleShowUsers = (user) => {
    setUser(user);
    setShowUser(true);
  };
  const [showNewProduct, setShowNewProduct] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showUser, setShowUser] = useState(false);

  useEffect(() => {
    fetch("https://node-3i.vercel.app/products/all")
      .then((res) => res.json())
      .then((json) => setProducts(json.allProducts))
      .finally(() => setIsLoadingProd(false));
  }, []);

  useEffect(() => {
    fetch("https://node-3i.vercel.app/users/all")
      .then((res) => res.json())
      .then((json) => setUsers(json.allUsers))
      .finally(() => setIsLoadingUser(false));
  }, []);

  const deleteProduct = (product) => {
    setDeleteProd(null);
    let validar = window.confirm(
      `Esta seguro que desea eliminar el producto ${product.name}?`
    );
    if (validar) {
      fetch("https://node-3i.vercel.app/products/" + product._id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((json) => setDeleteProd(true))
        .catch((error) => setDeleteProd(false));
    }
  };
  useEffect(() => {
    if (deleteProd) {
      toast("Producto eliminado!");
      navegate("/");
    } else if (deleteProd === false) {
      toast("Algo ha salido mal ...");
    }
  }, [deleteProd]);

  const deleteUsers = (user) => {
    setDeleteUser(null);
    let validar = window.confirm(
      `Esta seguro que desea eliminar el usuario ${user.name}?`
    );
    if (validar) {
      fetch("https://node-3i.vercel.app/users/" + user._id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((json) => setDeleteUser(true))
        .catch((error) => setDeleteUser(false));
    }
  };
  useEffect(() => {
    if (deleteUser) {
      toast("Usuario eliminado!");
      navegate("/");
    } else if (deleteUser === false) {
      toast("Algo ha salido mal ...");
    }
  }, [deleteUser]);

  return (
    <>
      {" "}
      <Container>
        <div className="d-flex justify-content-around">
          <h1 className="d-inline">PRODUCTOS</h1>
          <button onClick={() => setShowNewProduct(true)}>➕</button>
        </div>
        {isLoadingProd ? (
          <Loader />
        ) : (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Categoria</th>
                <th>Precio $$$</th>
                <th>Editar</th>
                <th>Borrar</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={(e) => handleShowProd(product)}>📝</button>
                  </td>
                  <td>
                    <button onClick={(e) => deleteProduct(product)}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
      <Container>
        <div>
          {" "}
          <div className="d-flex justify-content-around">
            <h1>USUARIOS</h1>
          </div>
          {isLoadingUser ? (
            <Loader />
          ) : (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.mail}</td>
                    <td>{user.rol}</td>
                    <td>
                      {user.mail === "admin@admin.com" ? (
                        ""
                      ) : (
                        <button onClick={(e) => handleShowUsers(user)}>📝</button>
                      )}
                    </td>
                    <td>
                      {" "}
                      {user.mail === "admin@admin.com" ? (
                        ""
                      ) : (
                        <button onClick={(e) => deleteUsers(user)}>❌</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </Container>
      <EditProduct show={showProduct} setShow={setShowProduct} product={product} />
      <EditUser show={showUser} setShow={setShowUser} user={user} />
      <AddProduct show={showNewProduct} setShow={setShowNewProduct} />
    </>
  );
};
export default Admin;
