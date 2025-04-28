import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import { render } from '@testing-library/react';
import LeftContent from '../Content/LeftContent';
import RightContent from '../Content/RightContent';
import Member from '../Content/Member';
import Counter_funtion from '../Content/Counter_funtion';
import Dientich_hcn from '../Content/Dientich_hcn';
import FromBasic from '../Content/FromBasic';
import FormXLoai from '../Content/FormXLoai';
import ShowFashion from '../Content/ShowFashion';
import AddProduct from '../Content/AddProduct';
import FoodOrderApp from '../Content/FoodOderApp';

function App() {
    // const NewComponent = () => {}
        return (
    
          <div id="container">
            {/* <Header/>
            <LeftContent/>
            <RightContent/>
            <Footer/> */}
            {/* <Member/> */}
            {/* < Counter_funtion/> */}
            {/* <Dientich_hcn/> */}
            {/* <FromBasic/> */}
            {/* <FormXLoai/> */}
            {/* <AddProduct/> */}
            <FoodOrderApp/>
            
          </div>
        );
      }

export default App;
