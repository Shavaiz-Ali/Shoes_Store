import {  NavbarPc } from "../../.././Constants/Constants"

const DropDown = () => {
  return (
    <div className="flex flex-col">
      {
        NavbarPc.map((item, index) =>{
            return(
                <div key={index}>
                    {
                        item.hoverDropdown.map((item, index) =>{
                            return(
                                <li key={index}>{item.name}</li>
                            )
                        })
                    }
                </div>
            )
        })
      }
    </div>
  )
}

export default DropDown
