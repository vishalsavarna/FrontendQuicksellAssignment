import React from "react";
import "./Card.css";
import { FaRegCircle } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiAdjust, BiLoader } from "react-icons/bi";
import { BsCheckCircleFill, BsFillExclamationSquareFill } from "react-icons/bs";

// Map for Camera Images
const camImages = {
  "CAM-1": "https://cdn-icons-png.freepik.com/512/5551/5551361.png?ga=GA1.1.1589126735.1726963527",
  "CAM-2": "https://cdn-icons-png.freepik.com/512/6671/6671458.png?ga=GA1.1.1589126735.1726963527",
  "CAM-3": "https://cdn-icons-png.freepik.com/512/5693/5693889.png?ga=GA1.1.1589126735.1726963527",
  "CAM-4": "https://cdn-icons-png.freepik.com/512/5698/5698176.png?ga=GA1.1.1589126735.1726963527",
  "CAM-5": "https://cdn-icons-png.freepik.com/512/5834/5834462.png?ga=GA1.1.1589126735.1726963527",
  "CAM-6": "https://cdn-icons-png.freepik.com/512/5834/5834933.png?ga=GA1.1.1589126735.1726963527",
  "CAM-7": "https://cdn-icons-png.freepik.com/512/5391/5391665.png?ga=GA1.1.1589126735.1726963527",
  "CAM-8": "https://cdn-icons-png.freepik.com/512/7951/7951889.png?ga=GA1.1.1589126735.1726963527",
  "CAM-9": "https://cdn-icons-png.freepik.com/512/3133/3133735.png?ga=GA1.1.1589126735.1726963527",
  "CAM-10": "https://cdn-icons-png.freepik.com/512/3133/3133729.png?ga=GA1.1.1589126735.1726963527",
};

// Default Image
const defaultImage =
  "https://media.istockphoto.com/id/1471401435/vector/round-icon-of-indian-flag.jpg?s=612x612&w=0&k=20&c=kXy7vTsyhEycfrQ9VmI4FpfBFX2cMtQP5XIvTdU8xDE=";

const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const statusOrder = ["Backlog", "Todo", "In progress", "Done"];
  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };

  // Get image for the given ID or default image
  const camImage = camImages[id] || defaultImage;

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
            src={camImage}
            alt={`Camera ${id}`}
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus &&
          (status === "Backlog" ? (
            <BiLoader style={{ fontSize: "14px" }} />
          ) : status === "Todo" ? (
            <FaRegCircle style={{ fontSize: "13px", color: "#ddeded" }} />
          ) : status === "In progress" ? (
            <BiAdjust style={{ fontSize: "14px", color: "#f2d750" }} />
          ) : status === "Done" ? (
            <BsCheckCircleFill />
          ) : (
            <IoMdCloseCircleOutline />
          ))}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 || priority === 2 || priority === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-signal"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="10" width="3" height="2" />
                <rect
                  x="5"
                  y="7"
                  width="3"
                  height="5"
                  opacity={priority === 2 || priority === 3 ? 1 : 0.25}
                />
                <rect
                  x="9"
                  y="4"
                  width="3"
                  height="8"
                  opacity={priority === 3 ? 1 : 0.25}
                />
              </svg>
            ) : priority === 4 ? (
              <BsFillExclamationSquareFill />
            ) : (
              <p>...</p>
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
