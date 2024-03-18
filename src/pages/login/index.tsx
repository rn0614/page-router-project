import Template3 from "@/components/template/Template3";
import Margin from "@/components/atoms/margin/Margin";
import Mainfooter from "@/components/molecular/footer/MainFooter";
import MainHeader from "@/components/molecular/header/MainHeader";
import styled from "styled-components";
import jwt from "jsonwebtoken";
import { useState } from "react";
import { JetBrains_Mono } from "next/font/google";

const StyledMain = styled.main`
  display: grid;
  height: 100vh;
  grid-template-areas: "header" "feed" "footer";
  grid-template-rows: 5rem auto 5rem;
`;
const StyledFeed = styled(Margin)`
  grid-area: feed;
  position: relative;
`;

export default function NextAuthPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [message, setMessage] = useState<string>(`You're not logged in`);

  const submitHandler = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());
    const token = res.token;
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      console.log(json)
      setMessage(
        `Welcom ${json.username} and you're ${json.admin ? "admin" : "user"}`
      );
    } else {
      setMessage(`Somthing went wrong`);
    }
  };

  return (
    <>
      <StyledMain>
        <MainHeader />
        <StyledFeed $space="sm">
          <Template3>
            <form>
              <h2>{message}</h2>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <br />
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
              <br />
              <input
                type="button"
                value="login"
                onClick={submitHandler}
              ></input>
            </form>
          </Template3>
        </StyledFeed>
        <Mainfooter />
      </StyledMain>
    </>
  );
}
