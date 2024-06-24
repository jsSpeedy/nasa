"use client";
import React, { useState } from "react";
import Container from "src/components/atoms/Container";
import Link from "next/link";
import Icon from "src/components/atoms/Icon";
import styled from "styled-components";

const StyledIcon = styled(Icon)`
  position: relative;
  display: block;
  width: 1.5em;
  height: 75px;
  align-self: center;
  transition: 0.5s;
  color: var(--clr);
`;

const Text = styled.span`
  position: absolute;
  color: var(--clr);
  font-weight: 600;
  font-size: 0.85em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
`;

const Indicator = styled.div`
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background: #29fd53;
  border-radius: 50%;
  border: 6px solid var(--clr);
  transition: 0.5s;
  transform: ${({ activeIndex, hoverIndex }) =>
    hoverIndex !== null
      ? `translateX(calc(70px * ${hoverIndex}))`
      : `translateX(calc(70px * ${activeIndex}))`};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: transparent;
    box-shadow: 0px -10px 0 0 var(--clr);
  }

  &::before {
    left: -22px;
    border-top-right-radius: 20px;
  }

  &::after {
    right: -22px;
    border-top-left-radius: 20px;
  }
`;

const Navigation = styled.div`
  position: relative;
  width: 400px;
  height: 70px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ItemsWrapper = styled.ul`
  display: flex;
  width: 350px;
`;

const Items = styled.li`
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
  cursor: pointer;

  &.active ${StyledIcon} {
    transform: ${({ hover }) =>
      hover == null ? "translateY(-37px)" : "translateY(0)"};
  }

  &.active ${Text} {
    opacity: ${({ hover }) => (hover == null ? "1" : "0")};

    transform: ${({ hover }) =>
      hover == null ? "translateY(10px)" : "translateY(0)"};
  }

  &:hover {
    ${StyledIcon} {
      transform: translateY(-37px);
    }
  }

  &:hover ${Text} {
    opacity: 1;
    transform: translateY(10px);
  }
`;

const Item = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

const menuItems = [
  { icon: "home", text: "Home", color: "#29fd53" },
  { icon: "home", text: "Deneme", color: "#ff5733" },
  { icon: "home", text: "Message", color: "#33d1ff" },
  { icon: "home", text: "Photos", color: "#ffe933" },
  { icon: "home", text: "Settings", color: "#f033ff" },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    setHoverIndex(null);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <Container>
      <Navigation>
        <ItemsWrapper onMouseLeave={handleMouseLeave}>
          {menuItems.map((item, index) => (
            <Items
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              hover={hoverIndex}
            >
              <Item href="#">
                <StyledIcon icon={item.icon} />
                <Text>{item.text}</Text>
              </Item>
            </Items>
          ))}
          <Indicator activeIndex={activeIndex} hoverIndex={hoverIndex} />
        </ItemsWrapper>
      </Navigation>
    </Container>
  );
};

export default Header;
