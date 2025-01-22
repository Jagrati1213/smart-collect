import React, { useEffect, useRef, useState } from "react";
import Style from "./_switch.module.scss";

export function SwitchComponent({
  onText,
  offText,
  checked,
  onToggle,
  onColor,
  offColor,
}) {
  const [isOn, setIsOn] = useState(false);
  // const [dragPosition, setDragPosition] = useState(0);
  // const thumbRef = useRef(null);
  // const trackRef = useRef(null);

  // Handle mouse dragging
  // const handleMouseDown = (e) => {
  //   e.preventDefault();

  //   const handleMouseMove = (event) => {
  //     const track = trackRef.current;
  //     if (!track) return;

  //     const rect = track.getBoundingClientRect();
  //     const offsetX = Math.min(
  //       Math.max(event.clientX - rect.left, 0),
  //       rect.width
  //     );
  //     console.log(offsetX);
  //     setDragPosition(offsetX);
  //     setIsOn(offsetX > rect.width / 2);
  //   };

  //   const handleMouseUp = () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     document.removeEventListener("mouseup", handleMouseUp);

  //     setIsOn(dragPosition > 15);
  //     onToggle(dragPosition > 15);
  //     setDragPosition(dragPosition > 15 ? 100 : 0);
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);
  //   document.addEventListener("mouseup", handleMouseUp);
  // };

  // Initial
  useEffect(() => {
    setIsOn(checked);
    // setDragPosition(checked ? 100 : 0);
  }, [checked]);

  return (
    <div className={Style.switch}>
      <input type="checkbox" id="btn" checked={isOn} readOnly />
      <label
        // ref={trackRef}
        onClick={onToggle}
        className={`${Style.switch_label} ${isOn ? "on" : ""}`}
        htmlFor="btn"
        style={{
          "--on-color": onColor,
          "--off-color": offColor,
        }}
      >
        <span className={`${Style.switch_track} ${isOn ? "on" : ""}`}>
          <span>{!isOn ? onText : offText}</span>
        </span>
        <span
          // ref={thumbRef}
          className={`${Style.switch_thumb} ${isOn ? "on" : ""}`}
          // style={{ transform: `translateX(${dragPosition}px)` }}
          // onMouseDown={handleMouseDown}
        ></span>
      </label>
    </div>
  );
}
