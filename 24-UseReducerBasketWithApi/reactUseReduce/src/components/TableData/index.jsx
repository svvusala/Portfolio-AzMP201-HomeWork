import React, { useEffect, useReducer } from "react";
import { Table, Button, Card } from "react-bootstrap";
import axios, { formToJSON } from "axios";
import { v4 as uuidv4 } from "uuid";
import reducer from "../Reducers/reducer";

const TableData = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    inputValue: "",
    basket: JSON.parse(localStorage.getItem("basket")) || [],
  });

  const sortByAZName = () => {
    const datasCopy = [...state.data];
    datasCopy.sort((a, b) => a.name.localeCompare(b.name));
    dispatch({ type: "SET_DATA", payload: datasCopy });
  };

  const sortByZAName = () => {
    const datasCopy = [...state.data];
    datasCopy.sort((a, b) => b.name.localeCompare(a.name));
    dispatch({ type: "SET_DATA", payload: datasCopy });
  };

  const sortByHighPrice = () => {
    const datasCopy = [...state.data];
    datasCopy.sort((a, b) => b.unitPrice - a.unitPrice);
    dispatch({ type: "SET_DATA", payload: datasCopy });
  };

  const sortByLowPrice = () => {
    const datasCopy = [...state.data];
    datasCopy.sort((a, b) => a.unitPrice - b.unitPrice);
    dispatch({ type: "SET_DATA", payload: datasCopy });
  };

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      dispatch({ type: "SET_DATA", payload: res.data });
    });
  }, []);

  return (
    <>
      <div
        className="inputandbutton"
        style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}
      >
        <input
          type="text"
          style={{
            backgroundColor: "white",
            margin: "5px",
            border: "1px solid gray",
            color: "black",
            width: "290px",
          }}
          placeholder="Search name..."
          value={state.inputValue}
          onChange={(e) => {
            dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value });
          }}
        />
        <Button
          onClick={() => {
            dispatch({ type: "SET_INPUT_VALUE", payload: "" });
          }}
        >
          Search
        </Button>
      </div>

      <div style={{ display: "flex" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>
                Name
                <Button
                  className="m-1"
                  variant="secondary"
                  onClick={() => {
                    sortByAZName();
                  }}
                >
                  A-Z
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    sortByZAName();
                  }}
                >
                  Z-A
                </Button>
              </th>
              <th>
                UnitPrice
                <Button
                  className="m-1"
                  variant="secondary"
                  onClick={() => {
                    sortByLowPrice();
                  }}
                >
                  Low-High
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    sortByHighPrice();
                  }}
                >
                  High-Low
                </Button>
              </th>
              <th>Delete</th>
              <th>Edit</th>
              <th>Add to Basket</th>
            </tr>
          </thead>
          <tbody>
            {state.data
              .filter((elem) =>
                elem.name.toUpperCase().includes(state.inputValue.toUpperCase())
              )
              .map((elem) => {
                return (
                  <tr key={uuidv4()}>
                    <td>{elem.id}</td>
                    <td>{elem.name}</td>
                    <td>{elem.unitPrice}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          let arr = state.data.filter(
                            (el) => el.id !== elem.id
                          );
                          dispatch({ type: "SET_DATA", payload: arr });

                          axios.delete(
                            `https://northwind.vercel.app/api/products/${elem.id}`
                          );
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => {
                          let newName = prompt("Adi deyisdir...", elem.name);

                          let arr = state.data.map((el) => {
                            if (el.id === elem.id) {
                              el.name = newName;
                            }

                            return el;
                          });

                          dispatch({ type: "SET_DATA", payload: arr });

                          axios.patch(
                            `https://northwind.vercel.app/api/products/${elem.id}`,
                            { name: newName }
                          );
                        }}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => {
                          dispatch({ type: "ADD_TO_BASKET", payload: elem });
                        }}
                      >
                        Basket
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>

        <Card style={{ marginLeft: "30px" }}>
          <Card.Header>Basket</Card.Header>
          <Card.Body>
            {state.basket.map((item) => {
              return (
                <>
                  <div
                    style={{
                      backgroundColor: "#cbf3f0",
                      borderRadius: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.unitPrice}</p>
                    {/* <div style={{ display: "flex" }}>
                      <button>+</button>
                      <p>0</p>
                      <button>-</button>
                    </div> */}
                    <Button
                      variant="danger"
                      style={{ marginBottom: "10px" }}
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_BASKET",
                          payload: item.id,
                        });
                      }}
                    >
                      Remove Basket
                    </Button>
                  </div>
                </>
              );
            })}
            <Button
              style={{ marginTop: "20px" }}
              variant="primary"
              onClick={() => {
                dispatch({ type: "DELETE_BASKET" });
              }}
            >
              Delete All
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default TableData;
