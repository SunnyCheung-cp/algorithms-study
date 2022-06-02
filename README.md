# solana-study
> We will introduce solana, using Solana to create NFT, create wallet transactions

## Learning solana/web3.Js
### To create a React application, you can also use others
### Airdrop-project shows how Solana builds a wallet, views balances, increases balances, and so on
```
npx create-react-app airdrop-project
cd airdrop-project
yarn add @solana/web3.js or npm install --save @solana/web3.js

```

## Learning solana
### (Let's get Solana set up on your computer)[https://github.com/LearnWithArjun/solana-env-setup]

#### Remember to run path after `Install Rust`, Until you can view Solana --version correctly
#### Run the following command to set Solana to the local network
```
solana config set --url localhost
solana config get
```
### The solana command line learning starts
#### Create a wallet for your computer
```
solana-keygen new --force
```
#### Once created, you can see the wallet's Pubkey (Wallet receiver address) and other people can send you money through the pubkey
#### check publick
```
solana-keygen pubkey
```
#### check balance
```
solana balance --url devnet
```
#### aridrop balance
```
solana airdrop ${number} ${publickey} --url devnet
```

### install spl-token-cli
```
cargo install spl-token-cli
```
#### use spl-token create token
```
spl-token create-token --url devnet
```
#### Be sure to save your token address
#### A wallet can have multiple accounts and each account is used to transact one type of token.
#### We need to create an account that can hold the token that we created to do that we can run.
```
spl-token create-account ${token address} --url devnet
```
#### Be sure to save your token account

#### check the balance of our token, that is the number of tokens that we have
```
spl-token balance ${token address} --url devnet
```

#### mint token & check again
```
spl-token mint ${token address} ${number} --url devnet
```
#### view the circulating supply of your token.
```
spl-token supply ${token address} --url devnet
```

#### it provides us with the ability to disable our minting authority and never enable it back.
```
spl-token authorize ${token address} mint --disable --url devnet
```
#### We've now renounced our ability to mint new tokens.

#### What we can do is destroy our tokens.
```
spl-token burn ${token account} ${number} --url devnet
```