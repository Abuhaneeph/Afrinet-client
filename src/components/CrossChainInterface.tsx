'use client';
import WormholeConnect, {
  type config,
  WormholeConnectTheme,
} from '@wormhole-foundation/wormhole-connect';
import { ArrowLeft } from 'lucide-react';

export default function CrossChainInterface({ onBackToSwap }) {
  const config: config.WormholeConnectConfig = {
    network: 'Testnet',
    chains: ['Base', 'Avalanche', 'Ethereum', 'Solana', 'Mantle'],
    ui: {
      title: 'Bridge',
    },
  };

  const theme: WormholeConnectTheme = {
    mode: 'light',
    // Primary colors 
    primary: '#D2691E', // Terracotta color
    secondary: '#87A96B', // Sage color
    
    // Background mode required by PaletteMode type
    background: 'light', // or 'dark' if you prefer a dark theme
    // Custom background colors as CSS variables
    // '--wormhole-connect-bg-paper': '#FFFFFF', // White card background
    
    // Text color matching the faucet
    text: '#1C1917', // Stone-800 equivalent
    
    // Additional theme customizations to match faucet styling
    
    // Custom CSS variables for more detailed theming
    // '--wormhole-connect-border-radius': '0.75rem', // Rounded-xl equivalent
  };

  return (
    <div className="max-w-lg mx-auto">
         {/* Back to Swap Button */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={onBackToSwap}
                  className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Swap</span>
                </button>
             
              </div>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-stone-800 mb-2">Bridge</h1>
        <p className="text-stone-600">Cross-chain token transfers</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <WormholeConnect config={config} theme={theme} />
      </div>
    </div>
  );
}