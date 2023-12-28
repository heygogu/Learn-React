import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';

export const ImageElement = <img className="logo" alt="My Restaurent Photo" src="http://tinyurl.com/5n6ue4c4"></img>;
const AppLayout = () => {
    return (
    <>
    <Header />
    <Body/>
    <Footer/>
    </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
