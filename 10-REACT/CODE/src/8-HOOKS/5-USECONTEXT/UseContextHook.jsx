import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');
const UserContext = createContext(null);
// default value
const UseContextHook = () => {
  const [theme, setTheme] = useState('dark');
  // change theme
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <UserContext.Provider value={{ isLoggedin: false }}>
        <div>
          <h3>Usecontext hook</h3>
          <h5>Question 1: What is useContext in React?</h5>
          <p>
            USED TO CONSUME VALUES LIKE DATA OR FUNCTION FROM THE CONTEXT
            CREATED BY 'createContext()' -IT ALLOWS TO FUNCTION COMPONENT TO
            ACCESS CONTEXT VALUE WITHOUT PROP DRILLING -IN THE SCENARIOS WHERE
            PASSING PROPS TO MULTIPLE LEVELS IS IMPRACTICAL
          </p>
          <GrandParentComponent data="data from hook component" />
          <h5>
            Question 3: Can you have multiple contexts in a single component?
          </h5>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
// PROP DRILLING
// GRAND PARENT COMPONENT
const GrandParentComponent = ({ data }) => {
  return <ParentComponent data={data} />;
};
const ParentComponent = ({ data }) => {
  return <ChildComponent data={data} />;
};
const ChildComponent = ({ data }) => {
  return <GrandChildComponent data={data} />;
};
const GrandChildComponent = ({ data }) => {
  console.log(data);

  const { theme, changeTheme } = useContext(ThemeContext);
  console.log(theme);
  const { isLoggedin } = useContext(UserContext);

  return (
    <>
      <p>value from context:{theme}</p>
      <p>{data}</p>
      <button onClick={changeTheme}>Change theme</button>
      <p>{isLoggedin ? 'user logged in' : 'user is not logged in'}</p>
    </>
  );
};
export default UseContextHook;
