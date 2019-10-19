import styled ,{css } from "styled-components";
import { Link } from "react-router-dom";

export const option = css `
   padding: 10px 15px;
        cursor: pointer;
`

export const headerContainer = styled.div`
  height: 70x;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const logoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const optionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const divOptions = styled.div `
 ${option}
`

export const linkOptions = styled(Link) `
  ${option}
`