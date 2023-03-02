import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./views/Main";

function App() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let USERS = [
    { user: "admin", pass: "admin", role: "admin" },
    { user: "user", pass: "user", role: "user" },
  ];
  const [cart, setCart] = useState(carrito);
  const [auth, setAuth] = useState({ user: "", role: "" });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart, auth]);

  const add = (p) => {
    if (isDuplicated(p.title)) {
      const newCart = cart.filter((c) => c.title !== p.title);
      const previousQ = cart.find((c) => c.title === p.title).cantidad;
      p.cantidad += previousQ;
      setCart([...newCart, p]);
    } else {
      setCart([...cart, p]);
    }
  };
  const del = (p) => {
    if (p) {
      const restCart = cart.filter((c) => c !== p);
      setCart(restCart);
    }
  };

  const totalQ = () => {
    let q = 0;
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      q += element.cantidad;
    }
    return q;
  };
  const clear = () => {
    setCart([]);
    localStorage.setItem("carrito", JSON.stringify(cart));
  };
  const isDuplicated = (t) => {
    return cart.find((c) => c.title === t);
  };
  const totalPrice = (t) => {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      price += element.cantidad * element.price;
    }
    return price;
  };

  const validate = (m, p) => {
    const userValid = USERS.find((user) => user.user === m);
    if (userValid) {
      const passValid = p === userValid.pass;
      if (passValid) {
        setAuth({ user: userValid.user, role: userValid.role });
        toast(`Welcome ${userValid.user}`, { autoClose: 1500 });
      }
    } else {
      toast.error("Usuario o contrasena invalido", { autoClose: 1500 });
    }
  };

  const logout = () => {
    setAuth({ user: "", role: "" });
    toast("Session closed", { autoClose: 1500 });
  };

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Main
          add={add}
          cart={cart}
          setCart={setCart}
          clear={clear}
          del={del}
          totalQ={totalQ}
          totalPrice={totalPrice}
          auth={auth}
          setAuth={setAuth}
          validate={validate}
          logout={logout}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
