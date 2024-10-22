import React from 'react';
import styled from 'styled-components';

const CategoriesWrapper = styled.div`
  padding: 40px 40px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const CategoriesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const CategoryCard = styled.div`
  width: 150px;
  text-align: center;
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 50px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;

const FeaturedCategories = () => {
  const categories = [
    { name: 'Red Apple', img: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Snack', img: 'https://images.pexels.com/photos/1414130/pexels-photo-1414130.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Vegetables', img: 'https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Strawberry', img: 'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Custard Apple', img: 'https://images.pexels.com/photos/1115812/pexels-photo-1115812.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Coffee & Tea', img: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <CategoriesWrapper>
      <Title>Featured Categories</Title>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </CategoriesWrapper>
  );
};

export default FeaturedCategories;
