# HEDERA HASHGRAPH DEVELOPER COURSE

## Module 1

## Module 2

## Module 3
*20 questions, 20 answers :)*

**Q:** What is the utility of HBAR?

**A:** All of the above

**Q:** Three types of fees make up the Hedera Transaction fee. Please choose the one that is NOT correct.

**A:** Inclusion Fee

**Q:** Fees on Hedera are based on the United States Dollar.

**A:** True


**Q:** This key is used to decrypt a message on the network

**A**: Private Key


**Q:** This algorithm works with the Ethereum Virtual Machine.

**A**: ECDSA


**Q:** This algorithm has higher security and is compatible with Hedera native services.

**A**: ED25519


**Q:** Please select all components which are part of a Hedera account.

**A**: Account ID, Keys, Account Alias and Staked Node ID


**Q:** A signature is NOT required to submit a transaction.

**A**: False


**Q:** A transaction submitted to a Hedera network must include

**A**: All of the above


**Q:** Hedera natively supports multisignature transactions.

**A**: True


**Q:** In minutes, how long is the valid duration on a transaction?

**A**: 3


**Q:** If a transaction is submitted to the network in the time window specified by the valid start time + the valid duration then the transaction will be

**A**: accepted


**Q:** If the schedule doesn’t receive sufficient signatures within 10 minutes, it’s deleted

**A**: False


**Q:** With this method, a prospective signer checks the contents of the inner transaction before it is signed.

**A**: scheduleGetInfo


**Q:** Which of these are included in scheduleCreate

**A**: A - scheduledTransactionBody B - memo D - payerAccountId


**Q:** Generally, queries are not subject to fees.

**A**: False


**Q:** This method of confirmation exposes information in the most detail.

**A**: State proofs 


**Q:** Please choose all INCORRECT answers.

**A**: C - State is not able to be changed D - Transaction history is mutable


**Q:** It is important to avoid targeting only one node for submitting transactions as this could be a single point of failure

**A**: True


**Q:** Please choose all types of Hedera Improvement Proposals (HIPs) listed.

**A**: ABE ie (A - Informational, B - Standards Track, E - Process)


## Module 4
*16 questions, 16 answers :)*

**Q:** The testnet allows creation of only ED25519 accounts.

**A:** False

**Q:** Please select all languages that are officially supported in the Hedera SDK?

**A:** ABDF, A - Swift, B - Java, D - Go, F - Javascript

**Q:** A client may send the same transaction to multiple nodes via the Hedera SDK.

**A:** True

**Q:** Mainnet is the only Hedera network you can submit transactions and queries to using the SDK.

**A:** D

**Q:** This class is used by the SDK to create accounts

**A:** A - AccountCreateTransaction

**Q:** The .env file is used to store your private key as an environment variable, offering an improvement over hardcoding it directly into your code.

**A:** True

**Q:** Spot the error in the code: 

**A:** D - The net value of the transfer should be zero, ensuring that the total HBAR sent by the sender matches the total received by the recipient.

**Q:** You can check the consensus status of a transaction response by calling .getReceipt() on it.

**A:** True

**Q:** After executing the provided code block, what HBAR denomination is used to represent the account balance in the output?

**A:** TINYBAR 

**Q:** What is the purpose of the provided code block: 

**A:** The code sets up environment variables and creates a testnet client with your account as the operator account.

**Q:** Which of the following code snippets correctly generates a private-public key pair of type ED25519. Choose the correct option.

**A:** **B**

**Q:** The clients operator account is the account funding the newly created account.

**A:** True

**Q:** When setting up your .env file what key is used for MY_PRIVATE_KEY.

**A:** B - DER Encoded ED25519 Private Key

**Q:** In order to allow another account or contract to transfer HBAR out of your account, you must grant that account or contract an allowance.

**A:** True

**Q:** To grant an allowance for another account to transfer HBAR out of your account, select the correct combination of class and method.

**A:** C - AccountAllowanceApproveTransaction with `.approveHbarAllowance()`

**Q:** In the context of granting an allowance for HBAR transfers when using the correct method, why is the `ownerAccountId` argument necessary?

**A:** B - It identifies the owner account ID that is authorizing the allowance

## Module 5
*4 questions, 4 answers :)*

**Q:** When working on your local network you create and submit transactions and queries to your local consensus node.

**A:** True

**Q:** Interacting with the testnet mirror nodes to pull local transaction data is a characteristic of working with a local network.

**A:** False

**Q:** Select the correct method to configure your local network client

**A:** C - client.forNetwork(node).setMirrorNetwork(mirrorNodeIpAndPort)

**Q:** The client operator is provided by you by the local node and will pay for the fees associated with each transaction/query.

**A:** True

## Module 6
*7 questions, 7 answers :)*

**Q:** Choose the correct class used to create a topic in the Hedera Consensus Service (HCS).

**A:** D - TopicCreateTransaction

**Q:** When submitting a message to an HCS topic, it is necessary to set the topicID.

**A:** True

**Q:** In the context of Topics in HCS, what is the purpose of the submit key? Select one answer.

**A:** C - It controls access to message submission.

**Q:** Choose the correct class used to get topic messages in the Hedera Consensus Service (HCS)

**A:** D - TopicMessageQuery

**Q:** In the context of HCS, why is a topic referred to as "private" even though the data is public?

**A:** A - The topic's access is restricted to control who can submit messages to it.

**Q:** In the context of HCS, what determines whether the `updateTopic` and `deleteTopic` functions can be used on a topic?

**A:** B - The presence of an adminKey.

**Q:** Which method is used to set the time to start subscribing to a topic's messages in Hedera Hashgraph?

**A:** A - setStartTime()

## Module 7
*21 questions, 21 answers*

**Q:** Please select all the methods required when creating a token using the Hedera Token Service.

**A:** BDE

**Q:** Select the correct class used to create a token.

**A:** A - TokenCreateTransaction

**Q:** If you do not specify the token type when creating a token, it will default to creating a fungible token.

**A:** True

**Q:** What is the main characteristic of a royalty fee in relation to NFTs?

**A:** C - It is charged each time NFT ownership is transferred and sent to the royalty collecter.

**Q:** The supply key needs to be set in order to mint tokens and increase the supply.

**A:** True

**Q:** What is the purpose of specifying the initial supply when creating fungible tokens?

**A:** B - To determine the amount of tokens initially put into circulation.

**Q:** Why do we set the treasury account id?

**NA:** A/B

**Q:** When signing a transaction you must pass in a private key of type PrivateKey. Select the correct code necessary to convert a string into a Private Key.

**A:** C - PrivateKey.fromString(myStringPrivateKey);

**Q:** Select the correct code snippet to associate an account to a token.

**NA:** A/B 

**Q:** What is the purpose of an Associate transaction?

**A:** B - Allows a user to receive a new fungible or new nonfungible token

**Q:** From the provided answers, what is a possible error message you can recieve when transferring a token to another user?

**A:** C - TOKEN_NOT_ASSOCIATED_TO_ACCOUNT

**Q:** Choose the correct token type for creating an NFT.

**A:** TokenType.NonFungibleUnique

**Q:** What action must be taken when creating a non-fungible token (NFT) in terms of setting the initial supply?

**A:** C - Set the initial supply to 0.

**Q:** In the context of fungible tokens what does the method .setDecimals() do?

**A:** C - It controls how divisible the token is and how fractions of the token's value are handled

**Q:** When creating a supply key, you should save it to a file so you can later change the supply of your tokens.

**A:** True

**Q:** When creating an NFT .setDecimals() must be set to 0.

**A:** True

**Q:** In the context of token management, why would you set a KYC key?

**A:** B - To "Know your Customer" and gather further details about them.

**Q:** In the context of NFTs, it is necessary to mint NFTs after generating a token ID.

**A:** True

**Q:**  What role does MetaData play in NFTs? 

**A:** C - It is the data that is being tokenized onto the NFT. 

**Q:** Where are the data and Metadata usually stored for NFTs?

**A:** C - InterPlanetary File System IPFS)

**Q:** What is the significance of serial numbers in the context of NFTs?

**A:** C - They differentiate individual NFTs within the same token ID

## Module 8
### *10 Questions, 10 Answers*


Q: Which is a defining characteristic of decentralized applications (dApps)?

A: C - dApps operate on a blockchain or P2P network.

Q: What benefit is there to having a distributed application?

A: ABC 

Q: Which line of code initializes Hashconnect with the given `appMetadata`? 

A: C - const initData = await hashconnect.init(appMetadata);

Q: When working with Hashconnect, what is the purpose of using the `executeWithSigner` method?

A: C - To invoke the wallet and ask the user to sign the transaction.

Q: What is one of the core features of a Decentralized Application (dApp)?

A: B - The front end of an application can talk to a shared database.

Q: What is the purpose of the Hashconnect library?

A: A - To establish connections between Hedera apps and wallets.

Q: How can you correctly retrieve the topic ID after executing a topic create transaction?

A: **C**

Q: Select the correct code to submit a message to a Hedera Consensus Service (HCS) topic using hashconnect

A: **B** 

Q: In the Dapp after selecting 'Send Topic Message' the user must sign the transaction through the wallet by click 'approve' which will submit the message to the network.

A: True

Q: You can check the message was submitted to the network by visitng https://hashscan.io/testnet/dashboard and searching by topicID.

A: True

## Module 9
### *14 Questions, 14 answers*

Q: The Hedera Smart Contract Services uses the Solidity Smart Contract Language. True or False

A: True

Q: What is Solidity in the context of Smart Contracts?

A: D - Solidity is an object-oriented, high-level language used for implementing smart contracts.

Q: What is the purpose of Application Binary Interface (ABI) in the context of smart contracts and web applications?

A: B - ABI bridges smart contracts and web apps, facilitating communication between high-level languages like JavaScript and the EVM bytecode.

Q: What is bytecode in the context of a smart contract?

A: C - Bytecode is an executable form of the smart contract stored in binary.

Q: During the lab, we were able to obtain the smart contracts bytecode by doing the following: const bytecode = helloHedera.data.bytecode.object;

A: True

Q: Select the correct code snippet that creates a file on Hedera and stores the bytecode and gets the file id

A: C 

Q: Select the correct class used to create a smart instance on the Hedera network

A: C

Q: Select the correct code snippet that creates a smart contract instance on Hedera and gets the contract id

A: C

Q: True or False: FileCreateTransaction() is executed to create a smart contract on Hedera.

A: False

Q: Select the correct code snippet that calls a function of a smart contract (it does not change state)

A: B 

Q: Select the correct class used to execute a smart contract function (it will change state)

A: C - ContractExecuteTransaction()

Q: You can use the ContractCreateFlow() class to perform a FileCreateTranscation(), FileAppendTransaction() and ContractCreateTransaction() in a single call resulting in deploying a smart contract on Hedera.

A: True

Q: What class is used when wanting to create a new NFT token using a Smart Contract on Hedera.

A: D - ContractExecuteTransaction()

Q: After calling .getRecord() on the executed createTokenTx, what do you call to get the result returned by calling the createNFT smart contract function?

A: C - contractFunctionResult.getAddress(0)

## Module 10
### *6 Questions, 6 answers*

Q: Which of the following statements about Hashio and its purpose are true? Select all that apply.

A: C & D

Q: How does Hashio help developers transition from Ethereum to Hedera?

A: C - It allows smart contract developers to use tools like ethers.js and MetaMask.

Q: How does the JSON RPC Relay enable Ethereum-compatible wallets to create and sign transactions to be executed on the Hedera Network?

A: C - It wraps signed Ethereum transactions into Hedera API (HAPI) transactions and executes them, facilitating cross-network communication.

Q: In order to import your Hedera account into MetaMask, what key needs to be imported?

A: D - Hex Encoded ECDSA Private Key

Q: Select the correct Hedera Tesnet Chain ID

A: C - 296

Q: To connect to Hedera Testnet you first need to manually add the network to MetaMask.

A: True

## Module 11
### *8 Questions, 8 Answers*
Q: What library is used to help create/interact with EVM transactions on MetaMask?

A: C - Ethers.js

Q: True or False: Prepare to associate an HTS token with MetaMask by creating a contract using the HTS token address & ethers.Contract().

A: False

Q: Select the correct code snippet that associates an HTS token with a MetaMask account

A: C

Q: In the contractDeployFcn(), only the abi and smart contract bytecode are needed to create a contract instance using ethers.js. True or False

A: False

Q: Select the correct code snippet that executes a contract function & invokes MetaMask wallet to ask for signature

A: A

Q: Select the correct code snippet that deploys a smart contract using ethers.js & waits for the receipt

A: D

Q: The ABI has important information like which functions are callable in the smart contract. True or False

A: True

Q: Ethers.js is a Javascript library for Ethereum development. True or False

A: True
