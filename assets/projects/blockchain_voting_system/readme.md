# SECURED E-VOTING WITH GRAPHICAL INSIGHTS BY UTILIZING BLOCKCHAIN

**Year**: *2022*

**Skills**: *Blockchain, Cryptography, Proof-of-Work, Peer-to-Peer Networking, WebSocket Communication, API Development, Secure Data Transmission, Node.js, Express.js, React.js, Next.js, HTML, CSS, Tailwind CSS, Responsive Web Design, Pre-rendering, Data Validation, Ledger Management, Decentralized Application Architecture, Real-time Communication, UI/UX Design*

🔗<a href="https://github.com/DennisTank/Blockchain_Voting/" target="_blank" class="md-link">Project Link</a>



## Process and Techniques

### 🖥️ Server Roles
#### Main Server:
- 📜 Managed the IP list of all blockchain nodes.
- 🔗 Helped blockchain nodes find and connect with each other during start-up.
- 🚫 Did not store any votes or blockchain data.
#### Blockchain Nodes:
- 🔒 Maintained a secure ledger of votes without disclosing voter identities.
- 🌐 Used peer-to-peer (P2P) WebSocket connections for direct communication.
- ✅ Validated votes using the Proof-of-Work consensus algorithm with SHA-256 hashing.
#### Rendering Server:
- 🖼️ Provided a responsive user interface for voters and admins.
- 📨 Sent votes directly to blockchain nodes without storing or modifying them.
- 📊 Requested vote results and updates by communicating through the main server.
### 📩 Voting and Data Flow
- 🗳️ Voters cast their votes through the rendering server.
- 🔀 Votes were sent directly to the blockchain nodes via API calls and stored on the blockchain.
- 🛡️ Blockchain nodes used Proof-of-Work (SHA-256) to validate and agree on adding new votes.
- 👤 No voter’s personal information was stored on the blockchain.

<img src="/portfolio/assets/projects/blockchain_voting_system/fig1.png" class="md-img" />

### 📈 Result Fetching and Tallying
- 🖥️ The rendering server requested voting results when needed.
- 🚀 The main server forwarded the request to the nearest or fastest blockchain node.
- 📤 The selected blockchain node provided the voting data.
- 🧮 The rendering server tallied the votes and displayed the final results to users.

<img src="/portfolio/assets/projects/blockchain_voting_system/fig2.png" class="md-img" />

### 🛠️ Technologies and Techniques Used

- **API Calls:** Used for communication between servers and the rendering client 🔗.
- **P2P WebSocket Network:** Blockchain nodes used decentralized peer-to-peer WebSocket communication to sync data securely 🌍.
- **Proof-of-Work Consensus:** Nodes solved SHA-256-based puzzles to validate votes and add them to the blockchain 🧩.
- **Responsive Web Design:** The website was made mobile-friendly and responsive for smooth user interaction 📱.
- **Pre-rendering:**  Content was preloaded to make page transitions faster and improve the voting experience ⚡.


*********
