// import PortalDemo from "./components/PortalDemo";
// import FocusInput from "./components/FocusInput";
// import RefDemo from "./components/RefDemo";
// import Parent from "./components/Parent";
// import PureComp from "./components/PureComp";
// import FragmentDemo from "./components/FragmentDemo";
// import MountingA from "./components/MountingA";
// import Form from "./components/Form";
// import Inline from "./components/Inline";
// import StyleSheet from "./components/StyleSheet";
// import "./appStyles.css";
// import Styles from "./appStyles.module.css";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";

import ComponentA from "./components/ComponentA";
import { UserProvider } from "./components/UserContext";


// import ClickCounterTwo from "./components/ClickCounterTwo";
// import Counter from "./components/Counter";
// import HoverCounterTwo from "./components/HoverCounterTwo";

// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";

// import ErrorBoundary from "./components/ErrorBoundary";
// import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <UserProvider value= "Alex">
        <ComponentA />
      </UserProvider>
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <Counter render = {(isLoggedIn) => isLoggedIn ? 'Arvind' : 'Guest'}/> */}

      {/* <Counter
        render={(count, incrementCounter) => (
          <ClickCounterTwo count={count} incrementCounter={incrementCounter} />
        )}
      />
      <Counter
        render={(count, incrementCounter) => (
          <HoverCounterTwo count={count} incrementCounter={incrementCounter} />
        )}
      /> */}

      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero name="Superman" />
      </ErrorBoundary>z
      <ErrorBoundary>
        <Hero name="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FocusInput /> */}
      {/* <RefDemo /> */}
      {/* <Parent /> */}
      {/* <PureComp /> */}
      {/* <FragmentDemo /> */}
      {/* <MountingA  color = "blue"/> */}
      {/* <Form /> */}
      {/* <Message /> */}
      {/* <h1 className="error"> Error</h1>
      <h1 className={Styles.success}>Success</h1>

      <Inline /> */}
      {/* <StyleSheet  primary = {true}/> */}
    </div>
  );
}

export default App;
