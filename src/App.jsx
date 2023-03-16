import React from 'react';
import { EventContext } from 'context/EventContext';
import { useEvents } from 'hooks/useEvents';
import { NavRoutes } from 'routes/NavRoutes';

function App() {
  return (
    <EventContext.Provider value={useEvents()}>
      <NavRoutes />
    </EventContext.Provider>
  );
}

export default App;
