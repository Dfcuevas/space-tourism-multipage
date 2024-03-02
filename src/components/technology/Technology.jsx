import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { technology } from "../../assets/data/data.json";
import Header from "../Header/Header";

const TechContainer = styled.main`
  height: 100vh;
  background-image: url(/technology/background-technology-desktop.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  .title {
    font-family: var(--ff-barlow-condensed);
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    color: var(--white-color);
    margin: 4.76rem 0 0 10.25rem;
  }

  .span-title {
    font-weight: 700;
    opacity: 0.25;
    margin-right: 28px;
  }

  .tech-container {
    display: flex;
    margin: 26px 0 0 166px;
    justify-content: space-between;
  }

  .tech-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .tech-btn button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    font-family: var(--ff-bellefair-regular);
    font-size: 2rem;
    line-height: 37px;
    text-align: center;
    letter-spacing: 2px;
    background-color: transparent;
    border: 1px solid hsl(0, 0%, 100%, 0.25);
    color: var(--white-color);
  }

  .tech-btn button:hover {
    border: 1px solid hsl(0, 0%, 100%);
  }

  .tech-btn button.active {
    border: 1px solid hsl(0, 0%, 100%);
    background-color: var(--white-color);
    color: #0b0d17;
  }

  .tech-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .tech-data h2 {
    text-transform: uppercase;
    font-weight: 400;
    font-family: var(--ff-barlow-condensed);
    font-size: 1rem;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: var(--secondary-color);
    margin-bottom: 11px;
  }

  .tech-data h1 {
    text-transform: uppercase;
    font-family: var(--ff-bellefair-regular);
    color: var(--white-color);
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 4rem;
  }

  .tech-data p {
    font-family: var(--ff-barlow-regular);
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 2rem;
    color: var(--secondary-color);
    max-width: 444px;
  }

  @media (max-width: 1115px) {
    background-image: url(/technology/background-technology-tablet.jpg);
    .title {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
      margin: 2.5rem 0 0 2.656rem;
    }

    .span-title {
      margin-right: 1rem;
    }

    .tech-container {
      flex-direction: column-reverse;
      margin: 3.75rem 0 0;
      align-items: center;
    }

    .tech-images {
      order: 3;
      max-width: 100%;
    }

    .tech-images img {
      width: 100%;
    }

    .tech-data {
      order: 1;
      margin-top: 2.75rem;
      max-width: 458px;
      text-align: center;
    }

    .tech-data h2 {
      margin-bottom: 1rem;
    }

    .tech-data h1 {
      font-size: 2.5rem;
      line-height: 2.875rem;
    }

    .tech-data p {
      font-size: 1rem;
      line-height: 1.75rem;
      color: var(--secondary-color);
      max-width: 444px;
    }

    .tech-btn {
      flex-direction: row;
      order: 2;
      margin-top: 3.5rem;
      gap: 1rem;
    }

    .tech-btn button {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;
      line-height: 28px;
      letter-spacing: 1.5px;
    }
  }

  @media (max-width: 550px) {
    background-image: url(/technology/background-technology-mobile.jpg);

    .title {
      font-size: 1rem;
      line-height: 19px;
      letter-spacing: 2.7px;
      margin: 0;
      text-align: center;
    }

    .tech-container {
      margin: 2rem 0 0;
    }

    .tech-btn {
      gap: 1rem;
      margin-top: 2.125rem;
    }

    .tech-btn button {
      width: 40px;
      height: 40px;
      font-size: 1rem;
      line-height: 18px;
      letter-spacing: 1px;
    }

    .tech-data {
      margin-top: 1.625rem;
    }

    .tech-data h2 {
      margin-bottom: 9px;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.3625px;
    }

    .tech-data h1 {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }

    .tech-data p {
      font-size: 15px;
      line-height: 1.5625rem;
      color: var(--secondary-color);
      margin-top: 1rem;
      max-width: 327px;
    }
  }
`;

const Technology = () => {
  const [tech] = useState(technology);
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const { description, images, name } = tech[value];

  return (
    <TechContainer>
      <Header />
      <p className="title">
        <span className="span-title">03</span> space launch 101
      </p>
      <section className="tech-container">
        <div className="tech-btn">
          {tech.map((item, index) => (
            <button
              className={index === value ? "active" : undefined}
              key={index}
              onClick={() => setValue(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="tech-data">
          <h2>the terminology...</h2>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="tech-images">
          <img
            src={width > 1115 ? images.portrait : images.landscape}
            alt={name}
          />
        </div>
      </section>
    </TechContainer>
  );
};

export default Technology;
