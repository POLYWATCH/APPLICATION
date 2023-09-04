import { useEffect, useState } from "react";
import {
  ConnectWallet,
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import { editionDropContractAddress } from "../const/addresses";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Navbar from "../components/navbar";
import Link from "next/link";

const Home: NextPage = () => {
  const address = useAddress();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (address) {
      // Dopo il login, mostra il contenuto con un effetto di rivelazione
      setShowContent(true);
    }
  }, [address]);

  const { contract } = useContract(editionDropContractAddress);
  const { data: contractMetadata } = useContractMetadata(contract);

  return (
    <div className={styles.container}>
      {address ? (
        <div className={`${styles.nftClaim} ${showContent && styles.revealEffect}`}>
          <MediaRenderer
            src={contractMetadata?.image}
            width="100%"
            style={{
              borderRadius: "20px",
              maxHeight: "300px",
            }}
            />
            
          <h1>{contractMetadata?.name}</h1>
        </div>
      ) : (
        <div className={styles.loginContainer}>
          <ConnectWallet btnTitle="Login" />
        </div>
      )}
      
      <Navbar />
      <button 
              className={styles.heroButton}
              onClick={() => window.location.href = "/shop"}
            >Shop Packs</button>
     
    </div>

  );
  
};

export default Home;