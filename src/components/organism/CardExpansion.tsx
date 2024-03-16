import React from "react";
import styled from "styled-components";

const StyledCardExpansion = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    height: 40vh;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .card {
    width: 10%;
    border-radius: 0.75rem;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
    border-radius: 2rem;
    display: flex;
    align-items: flex-end;
    transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
  }

  .card > .row {
    color: white;
    display: flex;
    flex-wrap: nowrap;
  }

  .card > .row > .icon {
    background: #223;
    color: white;
    border-radius: 50%;
    width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card > .row > .description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    height: 80px;
    width: 60%;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: 0.3s;
    transition: all 0.3s ease;
  }

  .description p {
    color: #b0b0ba;
    padding-top: 5px;
  }

  .description h4 {
    text-transform: uppercase;
  }

  input {
    display: none;
  }

  input:checked + label {
    width: 50%;
  }

  input:checked + label .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .card[for="c1"] {
    background-image: url("https://picsum.photos/id/237/200/300");
    background-size: 100%;
  }
  .card[for="c2"] {
    background-image: url("https://picsum.photos/id/250/200/300");
    background-size: 100%;
  }
  .card[for="c3"] {
    background-image: url("https://picsum.photos/id/263/200/300");
    background-size: 100%;
  }
  .card[for="c4"] {
    background-image: url("https://picsum.photos/id/270/200/300");
    background-size: 100%;
  }
`;

export default function CardExpansion() {
  return (
    <StyledCardExpansion>
      <div className="container">
        <input type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4>First Card</h4>
              <p>첫번째 카드</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>Second Card</h4>
              <p>두번째 카드</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>Third Card</h4>
              <p>세번째 카드</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4>Last Card</h4>
              <p>네번째 카드</p>
            </div>
          </div>
        </label>
      </div>
    </StyledCardExpansion>
  );
}
