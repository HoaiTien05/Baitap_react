import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

function App() {
    const NewComponent = () => {}
        return (
    
          <div id="container">
            <Header/>
            {/* this is content area */}
            <Content/>
            {/* footer content */}
            <Footer/>
          </div>
        );
      }


export default App;
