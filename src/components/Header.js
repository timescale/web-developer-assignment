import styled from 'styled-components';
import logo from '../images/logo.svg';
import Flex from "./utils/Flex";
import HeaderInput from "./HeaderInput";

const Container = styled(Flex)`
  padding: 21px 0px;
  border-bottom: 1px solid #C0C4CC;
`
const Header = () =>{
  return(
    <Container justify="space-between"> 
		  <img src={logo} alt="Timescale" />
      <HeaderInput />
    </Container>
  )
}
export default Header;