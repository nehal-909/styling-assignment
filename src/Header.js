import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #28a745;
`;

const SearchBar = styled.div`
  display: flex;
  flex: 1;
  margin: 0 20px;
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

const LocationDropdown = styled.select`
  margin-right: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  a {
    margin-left: 15px;
    color: #333;
    text-decoration: none;
    font-size: 16px;
    color:green;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Nest</Logo>
      <SearchBar>
        <input type="text" placeholder="Search for products" />
      </SearchBar>
      <LocationDropdown>
        <option>Your Location</option>
      </LocationDropdown>
      <NavLinks>
        <a href="#compare">Compare</a>
        <a href="#wishlist">Wishlist</a>
        <a href="#cart">Cart</a>
        <a href="#account">Account</a>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;
