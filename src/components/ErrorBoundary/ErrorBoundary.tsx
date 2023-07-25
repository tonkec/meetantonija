import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { Component, ErrorInfo, ReactNode } from 'react';
import { AiFillBug } from 'react-icons/ai';

interface Props {
  children: ReactNode;
  location: { pathname: string };
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  componentDidUpdate(prevProps: { location: { pathname: string } }) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ hasError: false });
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <NotFoundPage heading="That is an error!" icon={() => <AiFillBug />} />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
