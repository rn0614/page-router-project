"use client";
import React from "react";
import styled from "styled-components";
import Tag from "@/components/atoms/tag/Tag";

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  .radio-group {
    display: flex;
    flex-direction: column;
    transition: 1s;
    @media screen and (min-width :600px) {
      flex-direction: row;
    }
    .radio-content {
      margin: 0.2rem;
      position: relative;
    }
    .radio {
      border: 3px solid black;
      border-radius: 20%;
      width: 10rem;
      display: flex;
      align-items: center;
      input {
        border: 2px solid red;
        border-radius: 50%;
        outline-offset: max(2px, 0.1em);
      }
      label {
        width: 100%;
      }
      &:hover + .tooltip {
        opacity: 1;
        visibility: visible;
      }
    }
    .tooltip {
      position: absolute;
      top: 2rem;
      background-color: #767676;
      left: 2rem;
      opacity: 0;
      visibility: hidden;
      z-index: 10;
    }
  }
`;

export default function SkillPage() {
  return (
    <StyledSkill>
      <h2>My Side Project</h2>
      <section>
        <div className="title">simple CRUD</div>
        <div className="stack">
          <Tag tag="react-query"></Tag>
          <Tag tag="axios"></Tag>
          <Tag tag="mariaDB"></Tag>
          <Tag tag="jest"></Tag>
        </div>
      </section>
      <section>
        <div className="title">calender-project</div>
        <Tag tag="react-query"></Tag>
        <Tag tag="axios"></Tag>
        <Tag tag="mariaDB"></Tag>
        <Tag tag="jest"></Tag>
      </section>
      <section>
        <div className="title">baduk-front</div>
        <Tag tag="react-query"></Tag>
        <Tag tag="axios"></Tag>
        <Tag tag="recoil"></Tag>
      </section>
      <section>
        <div className="title">my Figma</div>
        <div className="stack">
          <Tag tag={"figma"}></Tag>
        </div>
      </section>
      <div className="radio-group">
        <div className="radio-content">
          <div className="radio">
            <input id="skill-type-state" type="radio" name="skiltype" />
            <label htmlFor="skill-type-state">상태관리</label>
          </div>
          <div className="tooltip">react-query, recoil</div>
        </div>

        <div className="radio-content">
          <div className="radio">
            <input id="skill-type-test" type="radio" name="skiltype" />
            <label htmlFor="skill-type-test">테스팅</label>
          </div>
          <div className="tooltip">jest, msw</div>
        </div>

        <div className="radio-content">
          <div className="radio">
            <input id="skill-type-react" type="radio" name="skiltype" />
            <label htmlFor="skill-type-react">프론트 프레임웍</label>
          </div>
          <div className="tooltip">react, next</div>
        </div>

        <div className="radio-content">
          <div className="radio">
            <input id="skill-type-db" type="radio" name="skiltype" />
            <label htmlFor="skill-type-db">DB</label>
          </div>
          <div className="tooltip">OracleDB, MariaDB</div>
        </div>
      </div>
    </StyledSkill>
  );
}
