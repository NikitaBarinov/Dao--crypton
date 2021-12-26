task("finishVote", "To get alloance of address")
.addParam("proposalId", "Index of finisheing proposal")

.setAction(async (taskArgs) => {
const dao = await hre.ethers.getContractAt("DAO", process.env.DAO_ADDRESS)
    // await network.provider.send("evm_increaseTime", [259205]);
    // await network.provider.send("evm_mine");
const result = await dao.finishVote(
    taskArgs.proposalId);


console.log('TransactionHash:',result.hash); 
});
