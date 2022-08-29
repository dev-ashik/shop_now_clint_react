import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 60px;
    ${mobile({
        height: "50px"
    })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({
        padding: "10px 0"
    })}
`


const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobile({
        display: "none"
    })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

    ${mobile({
        marginLeft: "5px",
    })}
`
const Input = styled.input`
    border: none;

    ${mobile({
        width: "50px",
    })}
`


const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-width: bold;

    ${mobile({
        fontSize: "24px",
    })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({
        flex: "2",
        justifyContent: "flex-start"
    })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 12px;

    ${mobile({
        fontSize: "12px",
        marginLeft: "5px"
    })}
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search...'/>
                    <SearchIcon style={{color: "gray", fontSize: "16px"}}/>  
                </SearchContainer>
            </Left>
            <Center><Logo>ShopNow</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar