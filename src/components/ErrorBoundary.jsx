import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "50vh",
                    padding: "2rem",
                    textAlign: "center"
                }}>
                    <h1 style={{ color: "#0d9488", marginBottom: "1rem" }}>
                        Something went wrong
                    </h1>
                    <p style={{ color: "#4b5563", marginBottom: "1.5rem" }}>
                        We apologize for the inconvenience. Please try refreshing the page.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            background: "#0d9488",
                            color: "#fff",
                            border: "none",
                            padding: "0.85rem 1.5rem",
                            borderRadius: "12px",
                            fontWeight: 600,
                            cursor: "pointer"
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
