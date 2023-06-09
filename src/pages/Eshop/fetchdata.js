import React, { setProduct, useState, getAxios, useEffect } from "react";
import axios, * as others from "axios";

export default function FetchData({ idcko }) {
  const [product, setProduct] = useState([]);
  const [idd, setIdd] = useState([]);
  console.log(idcko);
  const getAxios = () => {
    axios
      .get("http://localhost:7883/fetch")
      .then((response) => {
        console.log(response);
        const Data = response.data;
        console.log(response);
        let fdata = Data.filter((item) => item.Id === idcko);
        console.log("filtered", fdata, idcko);
        setProduct(Data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => getAxios(), []);

  return (
    <div>
      {product.map((repos) => {
        return (
          <>
            <div>
              <p>
                <p value={repos.Id}>{repos.name}</p>
                <p>{repos.price}</p>
                <option value={repos.Id} key={repos.Id}>
                  {repos.Id}
                </option>
                <option value={repos.Id}>{repos.fabric}</option>
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}
