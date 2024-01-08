import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
function Header() {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
   <a>
    <img src="/images/logo.svg" alt=''/>
    </a>
    <Menu>
    <Link to='/' >Home</Link>
    <Link to='/Models' >Model s</Link>
    <Link to='/Model3' >Model 3</Link>
       <Link to='/Modelx' >Model x</Link>
       <Link to='/Modely' >Model y</Link>
    </Menu>
    <RightMenu>
   <a href="#">Shop</a>
   <a href="#">Tesla Account</a>
   <CustomMenu onClick={() =>setBurgerStatus(true)}/>
    </RightMenu>
    <BurgerNav show={BurgerStatus}>
      <CloseWrapper>
      <CustomClose onClick={() =>setBurgerStatus(false)}/>
      </CloseWrapper>
   <li>       <Link to='/MOdelS1' >Model s</Link> </li>
   <li>       <Link to='/ModelY1' >Model y</Link> </li>
   <li>        <Link to='/Modely' >Model 3</Link></li>
   <li>       <Link to='/ModelX1' >Model x</Link></li>
   <li>       <Link to='/Modely' >Cybertruck</Link></li>
   <li>       <Link to='/Modely' >Roadaster</Link></li>
   <li>       <a href="#">Existing Inventory</a></li>
   <li>       <a href="#">Existing Inventory</a></li>
    </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
min-height:60px;
position: fixed;
display: flex;
align-items: center;
justify-content:space-between;
padding: 0px 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`
const Menu = styled.div`

display:flex;
align-item:center;
justify-content: center;
flex: 1;

a{
    font-wwight:600;
    text-transform: uppercase;
     padding: 0 10px;
     flex-wrap: nowrap;

}
@media(max-width:768px ){
  display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-wwight:600;
    text-transform: uppercase;
   margin-right: 10px;
  

}
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
const BurgerNav =styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16; 
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props =>props.show ?  'translateX(0)': 'translateX(100%)'};
transition: transform 0.2s ease-in;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,.2);
}
a {
  font-weight: 600;
}
`
const CustomClose =styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;

`