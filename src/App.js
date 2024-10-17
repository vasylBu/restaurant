import React from 'react';
import './index.css';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';





class App extends React.Component {
  constructor(properties){
    super(properties)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стільчик сірий',
          img: 'grayChair.png',
          desc: 'lorem ipsum',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стіл',
          img: 'table.png',
          desc: 'lorem ipsum',
          category: 'tables',
          price: '199.99'
        },
        {
          id: 3,
          title: 'Диван' ,
          img: 'Sofa.png',
          desc: 'Lorem  ipsum',
          category: 'sofa',
          price: '599.49'
        },
        {
          id: 4,
          title: 'Лампа', 
          img: 'Lamp.png',
          desc: 'lorem ipsum',
          category: 'light',
          price: '15.49'
        }
      ]
    }
  }
  render() {
return (

    <div className='wrapper'>
      <Header /> 
      <Items items={this.state.items}/>
      <Footer />

    </div>
)
}
}

export default App;
