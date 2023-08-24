import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import { Home } from './pages/Home';
import { RQSuperHeroes } from './pages/RQSuperHeroes';
import { SuperHeroes } from './pages/SuperHeroes';
import RQSuperHero from './pages/RQSuperHero';
import ParallelQueries from './pages/ParallelQueries';
import DynamicParallel from './pages/DynamicParallel';
import DependentQueries from './pages/DependentQueries';
import PaginatedQueries from './pages/PaginatedQueries';
import InfiniteQueries from './pages/InfiniteQueries';

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
                        <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
                        <Route path="/parallel-queries" element={<ParallelQueries />} />
                        <Route path="/dynamic-parallel-queries" element={<DynamicParallel heroIds={[1, 3]} />} />
                        <Route path="/dependent-queries" element={<DependentQueries email="vishwas@example.com" />} />
                        <Route path="/paginated-queries" element={<PaginatedQueries />} />
                        <Route path="/infinite-queries" element={<InfiniteQueries />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    );
}

export default App;
