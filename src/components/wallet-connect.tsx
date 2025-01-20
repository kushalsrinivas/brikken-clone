"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function WalletConnect() {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");

  // const connectWallet = async (): Promise<void> => {
  //   try {
  //     if (typeof window.ethereum !== "undefined") {
  //       const accounts: string[] = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setWalletAddress(accounts[0]);
  //       setIsWalletConnected(true);
  //     } else {
  //       alert("Please install MetaMask!");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const connectWallet = () => {
    console.log("ehhe");
  };
  const disconnectWallet = (): void => {
    setIsWalletConnected(false);
    setWalletAddress("");
  };

  return (
    <div className="flex items-center">
      {!isWalletConnected ? (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-foreground-secondary text-sm">
            Connected: {walletAddress.substring(0, 6)}...
            {walletAddress.substring(walletAddress.length - 4)}
          </span>
          <Button variant="destructive" onClick={disconnectWallet}>
            Disconnect
          </Button>
        </div>
      )}
    </div>
  );
}
