import React, { useState } from "react";
import {
  ConnectWallet,
  useAddress,
  useDisconnect,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const address = useAddress();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const disconnect = useDisconnect();

  function disconnectWallet() {
    disconnect();
    setIsProfileDropdownOpen(false);
  }

  // Funzione per riprodurre il suono
  function playSound() {
    const audioElement = document.getElementById("audioElement") as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = 0; // Resetta l'audio all'inizio
      audioElement.play();
    }
  }

  return (
    <div className={styles.navbar}>
      {/* Home */}
      <Link href="/" className={styles.navIcon} onClick={playSound}>
        <Image src={"/claim-icon.png"} alt="" width={42} height={42} />
        <p className={styles.navIconLabel}>Home</p>
      </Link>

      {/* Stake */}
      <Link href="/stake" className={styles.navIcon} onClick={playSound}>
        <Image src={"/nft-icon.png"} alt="" width={40} height={40} />
        <p className={styles.navIconLabel}>Stake</p>
      </Link>

      <div className={styles.navIcon}>
        {address && (
          <div
          className={styles.profileButton}
          onClick={() => { setIsProfileDropdownOpen(!isProfileDropdownOpen); playSound(); }}
        >
            <Image src={"/profile-icon.png"} alt="" width={40} height={40} />
            <p className={styles.navIconLabel}>Profile</p>
          </div>
        )}
      </div>

      {isProfileDropdownOpen && (
        <div className={styles.profileDropdown}>
          <Link href="/myPacks" onClick={playSound}>
            <p>My Packs</p>
          </Link>
          <Link href="/myPolywatch" onClick={playSound}>
            <p>My Polywatch</p>
          </Link>
          <button onClick={() => { disconnectWallet(); playSound(); }}>
            Logout
          </button>
        </div>
      )}

      {/* Includi il tuo elemento audio */}
      <audio id="audioElement">
        <source src="/audio.wav" type="audio/wav" />
        Il tuo browser non supporta l'elemento audio.
      </audio>
    </div>
  );
}

