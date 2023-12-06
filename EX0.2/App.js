import MyComponent from "./MyComponent";
import { ThemeProvider } from "./ThemeContext";

const React6 = () => {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
};

export default React6;