import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  
  const errorMessage = error instanceof Error 
    ? error.message 
    : typeof error === 'object' && error && 'statusText' in error 
    ? (error as any).statusText 
    : 'An unexpected error occurred';
  
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry an unexpected error has occurred.</p>
      <p> 
        <i>
          {errorMessage}
        </i>
      </p>
    </div>
  );
}

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}