import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [userHolding, setUserHolding] = useState(null); // holding data for this stock
  const [error, setError] = useState("");               // error message to show user
  const token = localStorage.getItem("token");

  // fetch holdings when window opens and check if user holds this stock
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BURL}/allHoldings`, {headers: { Authorization: `Bearer ${token}` }})
      .then((res) => {
        const holding = res.data.find(
          (h) => h.name.toUpperCase() === uid.toUpperCase()
        );
        
        if (holding) {
          setUserHolding(holding);  // stock found in holdings
        } else {
          setError(`You don't own any shares of ${uid}`); // not in holdings
        }
      })
      .catch((err) => {
        console.log("Error fetching holdings:", err.message);
        setError("Could not verify holdings. Try again.");
      });
  }, [uid]);

  const handleSellClick = () => {
    // check 1: stock not in holdings
    if (!userHolding) {
      setError(`You don't own any shares of ${uid}`);
      return;
    }

    // check 2: selling more than owned
    if (stockQuantity > userHolding.qty) {
      setError(
        `You only own ${userHolding.qty} shares of ${uid}. Cannot sell ${stockQuantity}.`
      );
      return;
    }

    // check 3: quantity must be at least 1
    if (stockQuantity <= 0) {
      setError("Quantity must be at least 1.");
      return;
    }

    // check 4: price must be greater than 0
    if (stockPrice <= 0) {
      setError("Price must be greater than 0.");
      return;
    }

    // all checks passed — place sell order
    axios
      .post(`${process.env.REACT_APP_BURL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      }, {headers: { Authorization: `Bearer ${token}` }})
      .then(() => {
        closeSellWindow();
      })
      .catch((err) => {
        console.log("Error placing sell order:", err.message);
        setError("Failed to place order. Try again.");
      });
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container sell-container" id="sell-window">
      <div className="regular-order">

        {/* show stock info if holding exists */}
        {userHolding && (
          <div className="holding-info">
            <span>Available qty: <strong>{userHolding.qty}</strong></span>
            <span>Avg cost: <strong>₹{userHolding.avg}</strong></span>
          </div>
        )}

        {/* show error if any check fails */}
        {error && (
          <div className="error-msg">
            ⚠️ {error}
          </div>
        )}

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="sell-qty"
              min="1"
              max={userHolding ? userHolding.qty : 1}  // can't exceed owned qty
              onChange={(e) => {
                setStockQuantity(Number(e.target.value));
                setError(""); // clear error on change
              }}
              value={stockQuantity}
              disabled={!userHolding} // disable if stock not owned
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="sell-price"
              step="0.05"
              onChange={(e) => {
                setStockPrice(e.target.value);
                setError(""); // clear error on change
              }}
              value={stockPrice}
              disabled={!userHolding} // disable if stock not owned
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className="btn btn-red"
            onClick={handleSellClick}
            disabled={!userHolding} // disable sell button if stock not owned
          >
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;