const ErrorBoundary = () => {
  function Fallback({ error, resetErrorBoundary }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
      <div role="alert">
        <p>Something went Wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }
};

export default ErrorBoundary;
