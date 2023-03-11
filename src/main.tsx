import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Icons, Icon } from "./components/Icon";
import Layout from "./components/Layout";
import { Nav, NavItem } from "./components/Nav";
import Title from "./components/Title";
import { CiMail, CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <Header>
        <Title />
        <Icons>
          <Icon type="LinkedIn" Icon={CiLinkedin} />
          <Icon type="GitHub" Icon={VscGithubAlt} />
          <Icon type="Mail" Icon={CiMail} />
        </Icons>
        <Nav>
          <NavItem type="About Me" />
          <NavItem type="Interests" />
          <NavItem type="Contact" />
        </Nav>
      </Header>
    </Layout>
  </React.StrictMode>
);
