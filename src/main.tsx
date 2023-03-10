import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Icons, Icon } from "./components/Icon";
import { Nav, NavItem } from "./components/Nav";
import Title from "./components/Title";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header>
      <Title />
      <Icons>
        <Icon type="LinkedIn" />
        <Icon type="GitHub" />
        <Icon type="Mail" />
      </Icons>
      <Nav>
        <NavItem type="About Me" />
        <NavItem type="Interests" />
        <NavItem type="Contact" />
      </Nav>
    </Header>
  </React.StrictMode>
);
