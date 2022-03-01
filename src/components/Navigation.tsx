import { ethers } from "ethers"
import { useEffect, useState } from "react"

const WALLET_MSG = "Connect to Wallet"

export default function Navigation() {
  const [provider, setProvider] = useState<any>(null)
  const [account, setAccount] = useState<any>(null)

  useEffect(() => {
    //@ts-ignore
    setProvider(new ethers.providers.Web3Provider(window.ethereum))
  }, [])

  const signIn = async () => {
    if(!provider) {
      return null
    }
    const accounts = await provider.send("eth_requestAccounts", [])
    const accstr = accounts[0].slice(0, 5) + "..." + accounts[0].slice(accounts[0].length-5, accounts[0].length-1)
    setAccount(accstr)
  }
  return (
    <div className="text-white flex flex-row w-1/2 mt-6 justify-between mx-auto items-center">
      <div className="font-medium bg-raisin p-2 rounded-sm shadow-lg flex flex-row gap-1">
        <div className="item p-4 bg-neutral-800 rounded-sm cursor-pointer">
          Wallets 
        </div>
        <div className="item p-4">
          Signers
        </div>
        <div className="item p-4">
          IDK
        </div>
      </div>
      <div className="profile bg-mint text-raisin font-semibold px-3 py-5 rounded" onClick={signIn}> 
        <span>{account ? account : WALLET_MSG}</span>
      </div>
    </div>
  )
}