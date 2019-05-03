import React from 'react';

// function App() {
//   return (
//     // React.Fragment
//     <>
//       <label htmlFor="bar"></label>
//       <h1>Hello, world.</h1>
//     </>
//     );
// }

// 関数コンポーネント
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>  
}

export default App;
