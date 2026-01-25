/**
 * PerpX - Sample Demo Script
 * Description: Decentralized perpetual futures exchange with up to 100x leverage
 */

async function main() {
  console.log("Initializing PerpX...");
  
  // Simulated connection to the blockchain
  const provider = "https://mainnet.infura.io/v3/YOUR_PROJECT_ID";
  console.log("Connecting to provider:", provider);

  // Example API interaction
  const response = await fetch('https://0xtech.org/api/v1/status');
  const data = await response.json();
  
  console.log("PerpX Status:", data.status);
  console.log("Ready to trade/interact.");
}

main().catch(console.error);
