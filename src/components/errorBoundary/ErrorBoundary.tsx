import { Component, ErrorInfo } from 'react';
import ErrorSkeleton from '@components/errorSkeleton/ErrorSkeleton';

class ErrorBoundary extends Component<{ children: JSX.Element }, { error: boolean }> {
  state = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorSkeleton />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
