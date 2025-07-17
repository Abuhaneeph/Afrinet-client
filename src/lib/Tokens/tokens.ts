// Token interface
export interface Token {
  id: number
  symbol: string;
  name: string;
  balance: number;
  address?: string;
  pool: string[];
  poolId?: number[];
  img?: string; // Optional image URL for the token
}

// Updated Token array with new addresses
const tokens: Token[] = [
  { 
    id: 1,
    symbol: 'MNT', 
    name: 'Mantle', 
    balance: 0.5,
    address: '0x28ED5341C2e6a2599c550270b824B71dFA078d06', // Native MNT
    pool: ["AFR","USDT"],
    poolId: [1, 2],
    img: "https://app.mantle.xyz/icons/NetworkMantle.svg"
  },
  { 
    id: 2,
    symbol: 'USDT', 
    name: 'Tether USD', 
    balance: 2,
    address: '0x6765e788d5652E22691C6c3385c401a9294B9375', // ✅ Updated
    pool: ["MNT", "AFX"],
    poolId: [2, 6],
    img: 'https://coin-images.coingecko.com/coins/images/39963/large/usdt.png?1724952731'
  },
  { 
    id: 3,
    symbol: 'WETH', 
    name: 'Wrapped Ethereum', 
    balance: 1250,
    address: '0x25a8e2d1e9883D1909040b6B3eF2bb91feAB2e2f', // ✅ Updated
    pool: [],
    poolId: [],
    img: 'https://coin-images.coingecko.com/coins/images/39810/large/weth.png?1724139790'
  },
  { 
    id: 4,
    symbol: 'AFR', 
    name: 'AfriRemit', 
    balance: 1250,
    address: '0xC7d68ce9A8047D4bF64E6f7B79d388a11944A06E', // ✅ Updated
    pool: ["MNT"],
    poolId: [1],
    img: 'https://cdn.moralis.io/MNT/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png'
  },
  { 
    id: 5,
    symbol: 'AFX', 
    name: 'AfriStable', 
    balance: 1250,
    address: '0xCcD4D22E24Ab5f9FD441a6E27bC583d241554a3c', // ✅ Updated
    pool: ["cZAR", "USDT"],
    poolId: [5, 6],
    img: 'https://www.xe.com/svgs/flags/ngn.static.svg'
  },
  { 
    id: 6,
    symbol: 'cNGN', 
    name: 'Crypto Naira', 
    balance: 1250,
    address: '0x48D2210bd4E72c741F74E6c0E8f356b2C36ebB7A', // ✅ Updated
    pool: ["cZAR"],
    poolId: [3],
    img: 'https://www.xe.com/svgs/flags/ngn.static.svg'
  },
  { 
    id: 7,
    symbol: 'cZAR', 
    name: 'Crypto South African Rand', 
    balance: 1250,
    address: '0x7dd1aD415F58D91BbF76BcC2640cc6FdD44Aa94b', // ✅ Updated
    pool: ["cNGN", "AFX"],
    poolId: [3, 5],
    img: 'https://www.xe.com/svgs/flags/zar.static.svg'
  },
  { 
    id: 8,
    symbol: 'cGHS', 
    name: 'Crypto Ghanaian Cedi', 
    balance: 1250,
    address: '0x8F11F588B1Cc0Bc88687F7d07d5A529d34e5CD84', // ✅ Updated
    pool: ["cKES"],
    poolId: [4],
    img: 'https://www.xe.com/svgs/flags/ghs.static.svg'
  },
  { 
    id: 9,
    symbol: 'cKES', 
    name: 'Crypto Kenyan Shilling', 
    balance: 1250,
    address: '0xaC56E37f70407f279e27cFcf2E31EdCa888EaEe4', // ✅ Updated
    pool: ["cGHS"],
    poolId: [4],
    img: 'https://www.xe.com/svgs/flags/kes.static.svg'
  },
];

export default tokens;
