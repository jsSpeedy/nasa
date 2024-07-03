import styled from "styled-components";
import { device } from "src/utils/device";

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1440px; /* veya istediğiniz maksimum genişlik */
  margin: 0 auto;
  padding: 0 20px; /* Örnek bir padding değeri */

  @media ${device.laptopL} {
    padding: 0 15px; /* Laptop büyük ekranlar için ayar */
  }

  @media ${device.laptop} {
    padding: 0 10px; /* Laptop orta boy ekranlar için ayar */
  }

  @media ${device.tablet} {
    padding: 0 5px; /* Tabletler için ayar */
  }

  @media ${device.mobileL} {
    padding: 0 3px; /* Büyük telefonlar için ayar */
  }

  @media ${device.mobileM} {
    padding: 0 2px; /* Orta büyüklükteki telefonlar için ayar */
  }

  @media ${device.mobileS} {
    padding: 0 1px; /* Küçük telefonlar için ayar */
  }
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
