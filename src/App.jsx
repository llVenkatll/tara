import { useState } from "react";
import Proposal from "./Proposal";
import Accepted from "./Accepted";

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="app">
      {accepted ? <Accepted /> : <Proposal onAccept={() => setAccepted(true)} />}
    </div>
  );
}

export default App;