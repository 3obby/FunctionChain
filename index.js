import { FunctionChain } from "ai-function-chain"
import { execute as fetchCryptoPrice } from "ai-function-chain/openAIFunctions/finance/fetchCryptoPrice.js"
import { execute as openApp } from "ai-function-chain/openAIFunctions/unix/openApp.js"
import Bitcoin from "bitcoin-address-generator"

Bitcoin.createWalletAddress((response) => {
  console.log(response)
})

const functionChain = new FunctionChain({
  functions: [openApp, fetchCryptoPrice],
})

const res1 = await functionChain.call("Open the calculator on my computer")
const res2 = await functionChain.call("Get me the latest price of Bitcoin")
const res3 = await functionChain.call("Get me the latest price of Ethereum")

console.log(`${res1} \n${res2} \n${res3}`)
