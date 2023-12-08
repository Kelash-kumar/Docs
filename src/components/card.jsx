/* eslint-disable react/prop-types */
import { FaRegFileLines } from "react-icons/fa6";
import { MdCloudDownload } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

const Card = ({data,reference}) => {

  return (
    <motion.div
    drag
    dragConstraints={reference }

    whileDrag={{ scale: 1.2 }}
    dragElastic={1.2} // Adjust the elasticity for the desired speed    
  
    className=" flex-col w-[240px] py-6 px-3 flex-shrink-0
     h-[270px] bg-zinc-400 ml-5 rounded-[40px] overflow-hidden">
      {/* card contains icon text footer */}
      
      <FaRegFileLines/>
      <p className="flex justify-center text-sm leading-tight py-6   ">
      {
        data.description
      }
      </p>
      <div>

      </div>
      <div className="footer absolute w-full h-30 bottom-0 left-0   bg-zinc-400 leading-tight  ">
       <div className="
        flex  justify-between px-5 pb-14 text-md font-semibold items-center  
        
       ">
        {data.fileSize}
        <span className="
        flex justify-center items-center w-8 h-8 bg-zinc-700 rounded-full text-zinc-200
        ">
        {
        data.isClosed?(<IoCloseCircleOutline />):(<MdCloudDownload />)
      }
        </span>
  
       </div>
       {
        data.tagsDetails.isOpen && (
      <div className={`tag  absolute bottom-0 left-0 py-5 w-full h-4 bg-${data.tagsDetails.color}-500 flex justify-center items-center text-xs font-semibold text-zinc-1000 `}
      
       >

        <h3>
          {
             data.tagsDetails.tag
          }
        </h3>
       </div>
       

        )
       }
       
      </div>
    
  </motion.div>
  );
};

export default Card;
