import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { BookManager } from './components/BookActions.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookManager />
  </StrictMode>,
);
