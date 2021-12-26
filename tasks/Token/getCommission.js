task("getCommission", "To get balance of address")
.setAction(async (taskArgs) => {

const token = await hre.ethers.getContractAt("Token", process.env.TOKEN_ADDRESS)

const result = await token.getCommission();
balance = result.toNumber();
    
console.log('Commission:',balance); 
});
