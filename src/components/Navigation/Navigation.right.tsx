import { ethers } from "ethers"
import { useContext, useEffect, useState } from "react"
import { toSvg, update } from "jdenticon"
import { RiArrowDropDownLine } from "react-icons/ri"
import { Web3Context, Web3UpdateContext } from "../../context/web3context"
import { Link, useNavigate } from "react-router-dom"
const WALLET_MSG = "Connect to Wallet"

const Right = () => {
  const {account, account_ui, profile_svg, provider} = useContext(Web3Context)
  const {updateAccount, updateAccount_ui, updateProfile_svg, updateProvider} = useContext(Web3UpdateContext)
  const [dropdownOpen, setDropdownOpen] = useState<any>(false)
  const navigate = useNavigate()
  useEffect(() => {
    //@ts-ignore
    updateProvider(new ethers.providers.Web3Provider(window.ethereum))
  }, [])

  const signIn = async () => {
    if(!provider) {
      return null
    }
    const accounts = await provider.send("eth_requestAccounts", [])
    const accstr = accounts[0].slice(0, 5) + "..." + accounts[0].slice(accounts[0].length-5, accounts[0].length-1)
    
    updateProfile_svg(toSvg(accounts[0], 40))
    updateAccount(accounts[0])
    updateAccount_ui(accstr)
  }

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(account ? account: "")
    setDropdownOpen(false)
  }

  const logout = () => {
    updateProvider(undefined)
    updateAccount("")
    updateAccount_ui("")
    updateProfile_svg("")
    setDropdownOpen(false)
    navigate("/")
    window.location.reload()
  }

  return (
    <div className="profile bg-mint text-raisin font-semibold px-3 py-5 rounded flex flex-row gap-1 items-center max-h-16 cursor-pointer" onClick={signIn}>
      <div dangerouslySetInnerHTML={{__html: profile_svg}} className="bg-white rounded-md"></div>
      <span>{account ? 
      <div className="flex flex-row items-center" onClick={() => setDropdownOpen(!dropdownOpen)}>{account_ui} <span><RiArrowDropDownLine /></span></div> 
      :
      WALLET_MSG}</span>
      <div className={dropdownOpen ? "absolute translate-y-24 translate-x-28": "hidden"}>
        <div className="settings bg-raisin-light text-white p-2 border border-raisin shadow-md rounded">
          <div className="p-2 hover:bg-neutral-800" onClick={() => {setDropdownOpen(false); navigate("/settings")}}>Settings</div>
          <div className="p-2 hover:bg-neutral-800" onClick={copyToClipBoard}>Copy address</div>
          <div className="h-1 w-full bg-neutral-900 my-2" />
          <div className="p-2 text-outor hover:bg-neutral-800" onClick={logout}>Logout</div>
        </div>``
      </div>
    </div>
  )
}

export default Right;