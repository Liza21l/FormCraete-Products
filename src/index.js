import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const contactsStore = [
  { 
    id: 1, 
    name: "TV",
    price: 2545,
    count: 1,
    allPrice: 2545
  }
]

const reRender = (contactsStore) => { 
  root.render(
      <App 
        reRender = {reRender}
        contactsStore={contactsStore}
      />
  );
}

reRender(contactsStore)

reportWebVitals();
