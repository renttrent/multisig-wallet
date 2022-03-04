import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavButton: React.FC<{name: any, active: any, setActive: any}> = ({name, active, setActive}) => {

  const handleChange = () => {
    setActive(name)
  }

  return (
   <div className={`item p-4 ${active ? "": ""} rounded-sm cursor-pointer`} onClick={handleChange}>
     <Link to={name.toLowerCase()}>{name}</Link>
   </div> 
  )
}

const navlist = [
  "Wallets",
  "Signers", 
  "IDK", 
]

const Left = () => {
  const [whichActive, setActive] = useState("Wallets")
  
  return (
    <div className="font-medium bg-raisin p-2 rounded-sm shadow-lg flex flex-row gap-1">
      {navlist.map((item) => {
        return <NavButton key={item} name={item} active={whichActive === item} setActive={setActive}/>
      })}
      <motion.div className="absolute bg-red-400 h-1 rounded"
      style={{
        translateY: 48
      }}
      animate={{
        x: whichActive === "Wallets" ? 2 : whichActive === "Signers" ? 90 : 180,
        width: whichActive === "Wallets" ? 82 : whichActive === "Signers" ? 82 : 54,
      }}
      transition={{
        type: "spring",
        stiffness: 60
      }}
      />

    </div>
  )

}

export default Left;