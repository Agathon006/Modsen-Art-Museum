import { Component } from 'react';
import ErrorSkeleton from '../errorSkeleton/ErrorSkeleton';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  //@ts-ignore
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorSkeleton />;
    }

    //@ts-ignore
    return this.props.children;
  }
}

export default ErrorBoundary;
