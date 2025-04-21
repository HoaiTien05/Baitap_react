import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import { render } from '@testing-library/react';
import LeftContent from '../Content/LeftContent';
import RightContent from '../Content/RightContent';

function App() {
    // const NewComponent = () => {}
        return (
    
          <div id="container">
            <Header/>
            {/* this is content area */}
            <LeftContent/>
            <RightContent/>
            {/* footer content */}
            <Footer/>
            
          </div>
        );
      }

export default App;
