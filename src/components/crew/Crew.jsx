import React, { useState } from "react";
import styled from "styled-components";
import { crew } from "../../assets/data/data.json";
import Header from "../Header/Header";

const CrewContainer = styled.main`
  height: auto;
  background-image: url("/crewfolder/background-crew-desktop.jpg");
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

  .crew-container {
    height: 79.9vh;
    display: grid;
    grid-template-columns: 55% 45%;
    margin-left: 166px;
    margin-right: 100px;
  }

  .data-crew {
    align-self: center;
  }

  .data-crew h2 {
    font-family: var(--ff-bellefair-regular);
    font-weight: 400;
    font-size: 2rem;
    line-height: 37px;
    text-transform: uppercase;
    mix-blend-mode: normal;
    opacity: 0.5;
    color: var(--white-color);
    margin-bottom: 15px;
  }

  .data-crew h1 {
    font-family: var(--ff-bellefair-regular);
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 4rem;
    color: var(--white-color);
    text-transform: uppercase;
    margin-bottom: 27px;
  }

  .data-crew p {
    font-family: var(--ff-barlow-regular);
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 2rem;
    color: var(--secondary-color);
    max-width: 444px;
  }

  .btn-crew {
    margin-top: 10rem;
    display: flex;
    gap: 24px;
    color: var(--primary-color);
  }
  .btn-crew button {
    padding: 5px;
    aspect-ratio: 1;
    border-radius: 50%;
    cursor: pointer;
    background-color: var(--white-color);
    mix-blend-mode: normal;
    opacity: 0.17;
    border: none;
  }

  .btn-crew button:hover {
    background-color: #979797;
    opacity: 1;
  }

  .btn-crew button.active {
    background-color: var(--white-color);
    opacity: 1;
  }

  .member-crew {
    text-align: center;
    display: flex;
  }

  .member-crew img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1115px) {
    height: 100vh;
    overflow: hidden;
    background: url("/crewfolder/background-crew-tablet.jpg")
      linear-gradient(
        to bottom,
        rgba(248, 80, 50, 1) 0%,
        rgba(43, 31, 30, 0.92) 8%,
        rgba(241, 111, 92, 0.54) 46%,
        rgba(50, 36, 35, 0.01) 100%
      );

    .title {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
      margin: 2.5rem 0 0 2.4rem;
    }

    .span-title {
      margin-right: 1rem;
    }

    .crew-container {
      padding-inline: 2rem;
      margin: 60px 0 0;
      grid-template-columns: 1fr;
      text-align: center;
      overflow: hidden;
    }

    .data-crew {
      max-width: 536px;
      margin: 0 auto;
      margin-bottom: 40px;
    }

    .data-crew h2 {
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 8px;
    }

    .data-crew h1 {
      font-weight: 400;
      font-size: 40px;
      line-height: 46px;
    }

    .data-crew p {
      max-width: 100%;
      font-weight: 400;
      font-size: 1rem;
      line-height: 28px;
    }

    .member-crew {
      justify-content: center;
      display: grid;
      align-items: stretch;
    }

    .member-crew img {
      max-height: 80%;
      width: auto;
      align-self: start;
    }

    .btn-crew {
      margin-top: 40px;
      justify-content: center;
    }
  }

  @media (max-width: 550px) {
    background-image: url("/crewfolder/background-crew-mobile.jpg");

    .title {
      text-align: center;
      margin: 0;
      font-size: 1rem;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 2.7px;
    }

    .crew-container {
      display: flex;
      flex-direction: column-reverse;
      overflow: initial;
    }

    .data-crew {
      display: flex;
      flex-direction: column;
    }

    .data-crew h2 {
      font-size: 1rem;
      line-height: 18px;
    }

    .data-crew h1 {
      font-size: 1.5rem;
      line-height: 28px;
      margin-bottom: 16px;
    }

    .data-crew p {
      max-width: 327px;
      font-size: 15px;
      line-height: 25px;
      margin-top: 0;
    }

    .btn-crew {
      order: -1;
      margin: 32px 0;
      gap: 1rem;
    }

    .member-crew {
      justify-content: center;
      align-content: end;
    }

    .member-crew img {
      place-self: end;
      height: 100%;
    }
  }
`;

const Crew = () => {
  const [theCrew] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, bio, role } = theCrew[value];

  return (
    <CrewContainer>
      <Header />
      <p className="title">
        <span className="span-title">02</span> meet your crew
      </p>
      <section className="crew-container">
        <article className="data-crew">
          <h2>{role}</h2>
          <h1>{name}</h1>
          <p>{bio}</p>
          <div className="btn-crew">
            {theCrew.map((member, index) => (
              <button
                className={index === value ? "active" : undefined}
                key={index}
                onClick={() => setValue(index)}
              />
            ))}
          </div>
        </article>
        <article className="member-crew">
          <img src={images.png} alt={name} />
        </article>
      </section>
    </CrewContainer>
  );
};

export default Crew;
