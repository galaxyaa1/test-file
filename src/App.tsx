import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Works from './pages/Works/Works';
import Blog from './pages/Blog/Blog';
import WorkDetails from './pages/WorkDetails/WorkDetails';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/works" element={<Works />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/workdetails" element={<WorkDetails />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}



export default App;
