import React, {useState, useEffect} from "react";
// import './sidebar.css'
import { Form, InputBlock, InputGroup, Button, Label, Input } from './styles';

const DevForm = ({onSubmit}) => {
  const [github, setgithub] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        
      },
      error => {
        console.log(error.message);
      },
      {
        timeout: 30000
      }
    );
    
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await onSubmit({
      github_username: github,
      techs,
      latitude, longitude
    })
    if (res.status === 200) {
      setgithub("");
      setTechs("");
    }
  }
  
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <InputBlock >
        <Label htmlFor="github">GitHub username</Label>
        <Input
          name="github"
          id="github"
          required
          value={github}
          onChange={e => setgithub(e.target.value)}
        />
      </InputBlock>
      <InputBlock >
        <Label htmlFor="techs">Technologies</Label>
        <Input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </InputBlock>
      <InputGroup>
        <InputBlock >
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            name="latitude"
            id="latitude"
            value={latitude}
            required
            disabled
            onChange={e => setLatitude(e.target.value)}
          />
        </InputBlock>
        <InputBlock >
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            name="longitude"
            id="longitude"
            value={longitude}
            required
            disabled
            onChange={e => setLongitude(e.target.value)}
          />
        </InputBlock>
      </InputGroup>
      <Button type={"submit"}>Register</Button>
    </Form>
  );
};

export default DevForm;
