import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./views/Main";

function App() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let authentication = JSON.parse(localStorage.getItem("user")) || { user: "", rol: "" };
  const [cart, setCart] = useState(carrito);
  const [auth, setAuth] = useState(authentication);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
    localStorage.setItem("user", JSON.stringify(auth));
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

  const login = (u, r) => {
    setAuth({ user: u, rol: r });
  };

  const logout = () => {
    setAuth({ user: "", rol: "" });

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
          login={login}
          logout={logout}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
