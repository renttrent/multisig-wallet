import { motion } from "framer-motion";
import { InferProps } from "prop-types";
import { useState } from "react";

const NavButton = ({name, active, setActive}: InferProps<any>) => {

  const handleChange = () => {
    setActive(name)
  }

  return (
   <div className={`item p-4 ${active ? "": ""} rounded-sm cursor-pointer`} onClick={handleChange}>
     {name}
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
  console.log(whichActive, navlist)
  
  return (
    <div className="font-medium bg-raisin p-2 rounded-sm shadow-lg flex flex-row gap-1">
      {navlist.map((item) => {
        console.log(whichActive === item)
        return <NavButton key={item} name={item} active={whichActive === item} setActive={setActive}/>
      })}
      <motion.div className="absolute bg-red-400 h-1 rounded"
      animate={{
        y: 46,
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