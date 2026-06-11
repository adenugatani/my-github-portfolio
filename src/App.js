
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Repositories } from './pages/Repositories/Repositories';
import { NotFound } from './notFound/NotFound';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { SingleRepository } from './pages/singleRepository/SingleRepository';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <div className="App min-h-screen bg-slate-50 text-slate-900">
      {/* render header component here */}
      <Header title="GitHub Portfolio Explorer"/>
      <main>
        <Routes>
          <Route path ="/" element={ <Repositories />}></Route>
          <Route path="repo/:name" element={<ErrorBoundary><SingleRepository /></ErrorBoundary>} />
          <Route path ="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
