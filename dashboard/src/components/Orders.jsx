// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, {useState, useEffect} from "react";
// import { holdings } from "../data/data";

import axios from "axios";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);
 
  useEffect(()=>{
    axios.get("http://localhost:3000/allOrders").then((res)=>{
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((stock, index)=>{
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td style={{color: stock.mode === "BUY" ? "green" : "red", fontWeight: "bold"}}>{stock.mode}</td>
                </tr>
              )
          })}

        </table>
      </div>
    </>
  );
};

export default Orders;