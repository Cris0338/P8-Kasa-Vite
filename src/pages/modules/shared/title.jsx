import React, { useEffect } from '../../../node_modules/react';

function useScrollingTitle(text, speed) {
  useEffect(() => {
    const originalTitle = document.title;
    let index = 0;
    
    const scrollTitle = () => {
      document.title = text.substring(index) + text.substring(0, index);
      index = (index + 1) % text.length; // Resetta l'indice per farlo ciclare
    };

    const intervalId = setInterval(scrollTitle, speed);

    return () => {
      clearInterval(intervalId);
      document.title = originalTitle; // Ripristina il titolo originale quando il componente viene smontato
    };
  }, [text, speed]);
}

function App() {
  useScrollingTitle("Kasa - Chez vous, partout et ailleurs", 300); // Puoi regolare la velocità come preferisci

  return (
    <div>
      {/* Il contenuto della tua app qui */}
    </div>
  );
}

export default App;
