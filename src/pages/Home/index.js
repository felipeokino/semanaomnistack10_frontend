import React, { useEffect, useState } from "react";
// import "./styles.css";
import DevCard from "../../components/DevCard/";
import Axios from "axios";
import DevForm from "../../components/DevForm";
import {Container, Main, Aside} from './styles';

function Home() {
  const [listDevs, setListDevs] = useState([]);

  useEffect(() => {
    const getDevs = async () => {
      const res = await Axios.get("http://localhost:3333/get/devs");
      setListDevs(res.data["users"]);
    };
    getDevs();
  }, []);

  const handleAddDev = async data => {

    const res = await Axios.post("http://localhost:3333/insert/devs", data);
    
    setListDevs([...listDevs, res.data]);
    return res;
  };

  return (
    <Container id="app">
      <Aside>
        <strong>Register Form</strong>
        {<DevForm onSubmit={handleAddDev}/>}
      </Aside>
      <Main>
        <ul>
          {listDevs.length > 0 &&
            listDevs.map(dev => <DevCard key={dev._id} {...dev} />)}
        </ul>
      </Main>
    </Container>
  );
}

export default Home;
