import React from "react";

function App() {
  function refresh() {
    window.location.reload(false);
  }
  return (
    <div>
      <button onClick={refresh}>Refresh </button>
    </div>
  );
}

export default App;
