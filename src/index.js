import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { SearchQueryProvider } from './hooks/SearchQuery';
import { MovieProvider } from './hooks/MovieContext';
import { LoadingProvider } from './hooks/LoadingContext';
import { SelectedMovieProvider } from './hooks/SelectedMovieContext';

ReactDOM.render(
  <React.StrictMode>
    <SearchQueryProvider>
      <MovieProvider>
        <LoadingProvider>
          <SelectedMovieProvider>
            <App />
          </SelectedMovieProvider>
        </LoadingProvider>
      </MovieProvider>
    </SearchQueryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
