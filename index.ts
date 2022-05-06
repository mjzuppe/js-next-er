import { Metaplex } from "@metaplex-foundation/js-next";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const metaplex = new Metaplex(connection);

console.log("metaplex", metaplex);