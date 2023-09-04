import React, { useEffect, useRef } from "react";

const SoundButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      // Aggiungi un gestore per il clic sul pulsante
      const button = document.getElementById("sound-button");

      if (button) {
        button.addEventListener("click", () => {
          // Riproduci il suono quando il pulsante viene cliccato
          audioRef.current?.play();
        });
      }
    }
  }, []);

  return (
    <div>
      {/* Aggiungi il tuo pulsante qui */}
      <button id="sound-button">Clicca per il suono</button>

      {/* Aggiungi il tuo elemento audio */}
      <audio ref={audioRef}>
        <source src="/audio.wav" type="audio/wav" />
        Il tuo browser non supporta l'elemento audio.
      </audio>
    </div>
  );
};

export default SoundButton;
