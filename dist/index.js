"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_next_1 = require("@metaplex-foundation/js-next");
const web3_js_1 = require("@solana/web3.js");
const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"));
const metaplex = new js_next_1.Metaplex(connection);
console.log("metaplex", metaplex);
//# sourceMappingURL=index.js.map