import React, {useState} from "react";
import Form from "./Form";
import Card from "./Card";
import Head from "../Head";

import { UserContext } from '../../context/UserContext'


const Main = () => {
  const [data,setData] = useState({
    nombre: "",
    email: "",
    urlImagen: "",
    edad: "",
  });

  const addData = (newData) => {
    setData(newData); //...data
  }

  
  return <div>
          <UserContext.Provider value={data.email}>
            <Head/>
            <Form updateData={addData}/> {/* Sibling 1 */}
            <Card data={data}/> {/* Sibling 2 */}
          </UserContext.Provider>
        </div>;
  
};

export default Main;
