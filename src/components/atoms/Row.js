import React from "react";
import styled from "styled-components";

const Rows = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  align-items: center;
`;

export default function Row({ children }) {
  return <Rows>{children}</Rows>;
}
