![Chumchon Logo](https://i.ibb.co/8nSwLf94/chumchon.png)

> **A decentralized social app built for Solana Mobile, featuring token-gated communities, on-chain messaging, escrow trading, and meme challenges.**



## 🚀 Features

### Core Social Features
- **👤 User Profiles**: Create and customize your on-chain profile with NFT profile pictures
- **🔒 Token-Gated Groups**: Create and join exclusive communities based on token or NFT ownership
- **💬 Messaging System**: Send messages in groups and tip content creators with SOL or SPL Tokens
- **🤝 Escrow System**: Securely trade tokens with other users through on-chain escrow in "Whale Groups"
- **📨 Invite System**: Generate and share invite links to bring friends into groups

### Gamification & Rewards
- **🎭 Meme Challenges**: Create AI-powered meme contests with SOL or token rewards
- **📚 Educational Rewards**: Complete tutorials to earn SOL or token rewards
- **🏆 Community Contests**: Participate in community-driven challenges and competitions

### Mobile-First Experience
- **📱 Native Mobile App**: Built specifically for Android with React Native
- **🔗 Wallet Integration**: Seamless connection with Phantom, Backpack, and other mobile wallets
- **⚡ Fast Transactions**: Optimized for mobile blockchain interactions

---

## 🔧 Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| **Frontend** | React Native (Expo) | Latest |
| **Blockchain** | Solana (Anchor Framework) | Latest |
| **Mobile Integration** | Solana Mobile Stack (SMS) | Latest |
| **Wallet Support** | Mobile Wallet Adapter (MWA) | Latest |
| **Language** | TypeScript | Latest |
| **State Management** | React Context | Built-in |
| **Storage** | AsyncStorage | React Native |

---

## 📱 Solana Mobile Stack Implementation

### ✅ Mobile Wallet Adapter (MWA)
- **Wallet Authorization**: Secure connection to mobile wallets (Phantom, Backpack, Solflare)
- **Transaction Signing**: Native transaction signing through mobile wallets
- **Message Signing**: Off-chain message signing for authentication
- **Session Management**: Persistent wallet sessions with automatic reauthorization

### ✅ MWA Authorization Caching
- **Persistent Sessions**: Users stay connected between app sessions
- **Smart Reauthorization**: Automatic wallet reconnection on app restart
- **Cache Invalidation**: Proper cleanup on disconnect/deauthorize
- **Error Recovery**: Handles corrupt cache data gracefully

### ✅ Sign In with Solana (SIWS)
- **Combined Authentication**: Single-step wallet verification
- **Cryptographic Verification**: Verifies signature authenticity
- **Domain-Specific Signing**: Customized signing messages for security
- **Enhanced Security Model**: Prevents impersonation attacks

### ✅ Wallet Discovery
- **Dynamic Detection**: Discovers installed mobile wallets
- **Multi-Wallet Support**: Works with Phantom, Backpack, Solflare
- **Wallet Status Monitoring**: Shows wallet readiness and connection status

### ✅ Expo Integration
- **Native UI Components**: Uses Expo's bottom sheet for wallet interactions
- **Cross-Platform Ready**: Optimized for Android with iOS compatibility
- **Phantom Wallet Support**: Enhanced integration with Phantom mobile wallet


### Wallet Integration Tests
- Test with Phantom mobile wallet
- Test with Backpack mobile wallet
- Test with Solflare mobile wallet
- Verify MWA authorization caching
- Test SIWS functionality

---

## 🔐 Security

### Blockchain Security
- **Secure Token Transfers**: All transfers go through escrow contracts
- **Account Validation**: Comprehensive validation in all Solana instructions
- **Reentrancy Protection**: Protection against reentrancy attacks
- **Error Handling**: Robust error handling and recovery

### Mobile Security
- **MWA Security**: Secure wallet connections through Mobile Wallet Adapter
- **SIWS Verification**: Cryptographic verification of wallet ownership
- **Cache Security**: Secure storage of authorization tokens
- **Session Management**: Proper session cleanup and invalidation

### Data Security
- **Encrypted Storage**: Sensitive data encrypted in AsyncStorage
- **Network Security**: Secure communication with Solana network
- **Input Validation**: Comprehensive input validation and sanitization
