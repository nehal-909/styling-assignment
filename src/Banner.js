import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 40px;
  background-color: #fdf7eb;
`;

const BannerText = styled.div`
  h1 {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    color: #777;
    margin-bottom: 20px;
  }
`;

const EmailForm = styled.form`
  display: flex;
  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const BannerImage = styled.img`
  width: 300px;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerText>
        <h1>Don't miss amazing grocery deals</h1>
        <p>Sign up for the daily newsletter</p>
        <EmailForm>
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </EmailForm>
      </BannerText>
      <BannerImage src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Grocery Bag" />
    </BannerWrapper>
  );
};

export default Banner;
