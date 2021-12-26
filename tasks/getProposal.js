var fs = require('fs');


task("getProposal", "To get total supply of coins")
.addParam("proposalId", "Index of choisen proposal")
.setAction(async (taskArgs) => {
const metadataDao = JSON.parse(fs.readFileSync('artifacts/contracts/DAO.sol/DAO.json'))

var abi = metadataDao.abi;
var abiAdr = process.env.DAO_ADDRESS;

var myContract = new web3.eth.Contract( abi,abiAdr);

const proposal = await myContract.methods.getProposal(
    taskArgs.proposalId
).call();

console.log('Transaction byte code:',proposal.transactionByteCode);
console.log('Proposal recipient:',proposal.recipient);
console.log('Proposal description:',proposal.description);
console.log('Proposal total votes:',proposal.totalVotes);
console.log('Proposal total votes for:',proposal.totalVotesFor);
console.log('Proposal end time:',proposal.endTime);
console.log('Proposal open ?:',proposal.open);
});
