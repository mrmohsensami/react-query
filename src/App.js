import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import { Home } from './pages/Home';
import { RQSuperHeroes } from './pages/RQSuperHeroes';
import { SuperHeroes } from './pages/SuperHeroes';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/super-heroes">Traditional Super Heroes</Link>
                            </li>
                            <li>
                                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/super-heroes" element={<SuperHeroes />} />
                        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
