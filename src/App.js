import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Posts, PostDetail, NotFound } from './pages';
import GlobalStyled from './styles/global';

function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
