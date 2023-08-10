import  { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createApi } from "unsplash-js";
import {setData} from "../../Store/storeSlice"
const apiKey = "2cBskggtLo_R2O5xzP7_BFkiXpAy-RSXUHP_f4E7DkU";

const AdidasShoes = () => {
  const [shoes, setShoes] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    getShoes();
  }, [shoes]);
  const unsplash = createApi({
    accessKey: apiKey,
  });

  const getShoes = async () => {
    try {
      const response = await unsplash.search.getPhotos({
        query: "jordan-shoes",
        perPage: 8, // Change this value to the desired number of images per page
      });

      if (response.errors) {
        // Handle API errors here
        console.error(response.errors);
        return;
      }

        const data = await response.response;
        setShoes(data.results);
        console.log('shoes',shoes)
        dispatch(setData(shoes))
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Adidas Shoes</h1>
      <ul>
        {shoes.map((shoe) => (
          <li key={shoe.id}>
            <img src={shoe.urls.regular} alt={shoe.name} />
            <p>{shoe.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdidasShoes;
