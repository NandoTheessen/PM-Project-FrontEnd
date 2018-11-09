import React from "react";

// Components
import Button from "./button.js";

// CSS
import styled from "styled-components";

const Jumbotron = props => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => (images[item.replace("./", "")] = r(item)));
    return images;
  }

  const images = importAll(require.context("./images", false, /\.(png|jpe?g|svg)$/));
  const image = `${props.styling}.jpg`;

  const Jumbo = styled("div")`
    background-size: cover;
    background-position: center;
    color: whitesmoke;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    height: 480px;
    padding-left: 60px;
    background-image: url(${images[image]});

    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 28px;
      font-family: Georgia, "Times New Roman", Times, serif;
    }
    h4 {
      font-size: 24px;
      font-family: Georgia, "Times New Roman", Times, serif;
      padding-top: 12px;
    }
  `;
  return (
    <Jumbo className={props.styling}>
      <h1>{props.title}</h1>
      <br />
      <h4>{props.description}</h4>
      <br />
      <h2>{props.heading}</h2>
      <br />
      <Button buttonText={props.button} />
    </Jumbo>
  );
};

export default Jumbotron;
