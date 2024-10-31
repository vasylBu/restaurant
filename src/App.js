import './index.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

class App extends React.Component {
  constructor(properties) {
    super(properties);
    this.state = {
      items: [
        { id: 1, title: 'Стільчик сірий', img: '/img/grayChair.png', desc: 'Комфортний стілець', category: 'chairs', price: '49.99' },
        { id: 2, title: 'Стіл', img: '/img/table.png', desc: 'Елегантний стіл', category: 'tables', price: '199.99' },
        { id: 3, title: 'Диван', img: '/img/Sofa.png', desc: 'Зручний диван', category: 'sofa', price: '599.49' },
        { id: 4, title: 'Лампа', img: '/img/Lamp.png', desc: 'Сучасна лампа', category: 'light', price: '15.49' }
      ],
      filteredItems: [],
      cart: [],
      showRegistration: false
    };
  }

  componentDidMount() {
    this.setState({ filteredItems: this.state.items });
  }

  addToCart = (item) => {
    this.setState((previousState) => ({
      cart: [...previousState.cart, item]
    }));
  };

  handleShowRegistration = () => {
    this.setState({ showRegistration: true });
  };


  handleHideRegistration = () => {
    this.setState({ showRegistration: false });
  };

  render() {
    return (
      <Router>
        <div className='wrapper'>
          <Header cart={this.state.cart} onCabinetClick={this.handleShowRegistration} />
          <Routes>
            <Route path="/" element={<HomePage items={this.state.filteredItems} addToCart={this.addToCart} />} />
            <Route path="/about" element={<AboutPage />} />  
            <Route path="/contact" element={<ContactPage />} /> 
          </Routes>
          <Footer />
          {this.state.showRegistration && (
            <div className="modal-overlay">
              <div className="modal-content">
                <AuthPage onClose={this.handleHideRegistration} />
              </div>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
