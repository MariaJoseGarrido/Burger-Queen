import React, { useState } from "react";
import "./stylesMenu.css";
import Data from "./Data";
import Cliente from "../components/Rol/Cliente"

export default function Menu() {
  
  const [DataType, setDataType] = useState("desayunos");
  const [selectedItems, setSelectedItems] = useState([]);
  const handleItemClick = item => {
  //console.log("handleItemClick", handleItemClick);

    setSelectedItems([...selectedItems, item]);
  };

  return (

   
    <div className="Container">
      
      <div className="Apps-Data">
        {Object.keys(Data).map(item => (
          <button className="newMenu-Data__type" onClick={() => setDataType(item)}>
            {item}
          </button>
        ))}
        <br />
        <br />
        {Data[DataType].map(item => (
          <div className="newMenu-Data__item" onClick={() => handleItemClick(item)}>
            {item.name} <span>${item.price}</span> <img className="img-menu" alt="" src ={item.img} />
          </div>
        ))}
      </div>
      <Cliente />
      <div className="container">

					<div className="row">
						<div className="col-sm">
							<p> <i class="fas fa-concierge-bell"></i>Pedidos</p>
            <div>
              {selectedItems && selectedItems.map(item => (
                <div>
                  {item.name} <span>${item.price}</span>
                </div>
              ))}
              <div >
                Total{" "}
                <span>
                $ {selectedItems.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}
                </span>
              </div>
            </div>
              {selectedItems.length > 0 && (
                <button> Enviar a Cocina </button>
              )}
						</div>
					</div>
				</div>
    </div>
  );
}







// import React, { useState } from "react";
// import "./stylesMenu.css";
// import Data from "./Data";


// export default function Menu() {
//   const [DataType, setDataType] = useState("desayunos");
//   const [selectedItems, setSelectedItems] = useState([]);
//   const handleItemClick = item => {
//   //console.log("handleItemClick", handleItemClick);

//     setSelectedItems([...selectedItems, item]);
//   };

//   return (
//     <div className="Container">
//       <div className="Apps-Data">
//         {Object.keys(Data).map(item => (
//           <button className="newMenu-Data__type" onClick={() => setDataType(item)}>
//             {item}
//           </button>
//         ))}
//         <br />
//         <br />
//         {Data[DataType].map(item => (
//           <div className="newMenu-Data__item" onClick={() => handleItemClick(item)}>
//             {item.name} <span>${item.price}</span> <img className="img-menu" alt="" src ={item.img} />
//           </div>
//         ))}
//       </div>
//       <div className="container">
// 					<div className="row">
// 						<div className="col-sm">
// 							<p> <i class="fas fa-concierge-bell"></i>Pedidos</p>
//             <div>
//               {selectedItems && selectedItems.map(item => (
//                 <div>
//                   {item.name} <span>${item.price}</span>
//                 </div>
//               ))}
//               <div >
//                 Total{" "}
//                 <span>
//                 $ {selectedItems.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}
//                 </span>
//               </div>
//             </div>
//               {selectedItems.length > 0 && (
//                 <button> Enviar a Cocina </button>
//               )}
// 						</div>
// 					</div>
// 				</div>
//     </div>
//   );
// }


