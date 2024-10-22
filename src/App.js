import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './Header';
import Banner from './Banner';
import FeaturedCategories from './Featured';


const AppWrapper = styled.div`
  width: 100%;
  font-family: 'Arial', sans-serif;
`;



function App() {
  return (
    <div className="App">
     <AppWrapper>
      <Header />
      <Banner />
      <FeaturedCategories />
    </AppWrapper>
    </div>
  );
}

export default App;
