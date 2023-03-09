import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
const Admin = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://node-3i.vercel.app/products/all")
      .then((res) => res.json())
      .then((json) => setProducts(json.allProducts))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetch("https://node-3i.vercel.app/users/all")
      .then((res) => res.json())
      .then((json) => setUsers(json.allUsers))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {" "}
      <Container>
        <div className="d-flex justify-content-around">
          <h1 className="d-inline">PRODUCTOS</h1>
          <button>➕</button>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Categoria</th>
                <th>Precio</th>
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
                    <button>📝</button>
                  </td>
                  <td>
                    <button>❌</button>
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
            <button>➕</button>
          </div>
          {isLoading ? (
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
                      <button>📝</button>
                    </td>
                    <td>
                      <button>❌</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </Container>
    </>
  );
};
export default Admin;
