import React, { useEffect, useRef } from "react";

const SoundButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      // Aggiungi un gestore per il clic sul pulsante
      audioRef.current.addEventListener("ended", () => {
        // Quando l'audio è terminato, chiama la funzione onClick
        onClick();
      });
    }
  }, [onClick]);

  return (
    <div>
      {/* Aggiungi il tuo pulsante qui */}
      <button id="sound-button" onClick={() => audioRef.current?.play()}>
        Click Me
      </button>

      {/* Aggiungi il tuo elemento audio */}
      <audio ref={audioRef}>
        <source src="/audio.wav" type="audio/wav" />
        Il tuo browser non supporta l'elemento audio.
      </audio>
    </div>
  );
};

export default SoundButton;
