import { useCallback, useEffect, useState } from "react";
import "./App.css";

// solana
const {
  Connection,
  PublicKey,
  clusterApiUrl,
  Keypair,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

function App() {
  const [wallet, setWallet] = useState();
  const [walletBalance, setWalletBalance] = useState(0);

  // create new wallet
  const createWallet = () => {
    const wallet = new Keypair();
    setWallet(wallet);
  };

  // get wallet balance
  const getWalletBalance = async () => {
    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const publicKey = new PublicKey(wallet._keypair.publicKey);
      const walletBalance = await connection.getBalance(publicKey);
      setWalletBalance(walletBalance)
    } catch (error) {
      console.error(error);
    }
  };

  // airdrop balance
const airDropSol = async() => {
  try {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
    const publicKey = new PublicKey(wallet._keypair.publicKey);
    // LAMPORTS_PER_SOL = 1000000000, 1 sol = 1000000000
    const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL)
    await connection.confirmTransaction(fromAirDropSignature)
  } catch (error) {
    console.error(error)
  }
}
  return (
    <div className="app">
      {!wallet && (
        <button className="createBtn" onClick={createWallet}>
          Create Wallet
        </button>
      )}
      {!!wallet && (
        <>
          <div className="walletInfo">
            <p className="publicKey">
              publicKey: {new PublicKey(wallet._keypair.publicKey).toBase58()}
            </p>
            <p className="publicKey">balance: {walletBalance / LAMPORTS_PER_SOL} SOL</p>
            <div className="btns">
              <button onClick={getWalletBalance}>getWalletBalance</button>
              <button onClick={airDropSol}>airDropSol</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
