import Card from "./card";
import { useRef } from "react";
const Foreground = () => {
    const ref=useRef(null);
  // data for card:
  // filetype, description, download link,tagsDetails
  let data = [
    {
      fileSize: "1GB",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo iste quae quos doloribus odio modi iure omnis fugit saepe.",
      downloadlink: "https://www.google.com/",
      isClosed: false,
      tagsDetails: {
        isOpen: true,
        tag: "download now",
        color: "green",
      },
    },
    {
        fileSize: "1.2MB",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo iste quae quos doloribus odio modi iure omnis fugit saepe.",
        downloadlink: "https://www.google.com/",
        isClosed: true,
        tagsDetails: {
          isOpen: false,
          tag: "watch now",
          color: "red",
        },
      },
      {
        fileSize: "3.2GB",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo iste quae quos doloribus odio modi iure omnis fugit saepe.",
        downloadlink: "https://www.google.com/",
        isClosed: true,
        tagsDetails: {
          isOpen: true,
          tag: " Live Preview ",
          color: "blue",
        },
      },
     
      
  ];

  return (
    <>
      < div ref={ref} className="fixed top-0 left-0 w-full h-full  z-[3] flex gap-3 flex-wrap p-6">
        {data.map((item, index) => {
          return <Card key={index} data={item} reference={ref}/>;
        })}
      </div>
    </>
  );
};

export default Foreground;
