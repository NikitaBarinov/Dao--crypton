task("balanceOfDao", "To get balance of address")
.addParam("addressOf", "The account address")
.setAction(async (taskArgs) => {


var dao = await hre.ethers.getContractAt("DAO", process.env.DAO_ADDRESS);

const result = await dao.balanceOf(taskArgs.addressOf);
    
console.log('Balance:', Number(result)); 
});
