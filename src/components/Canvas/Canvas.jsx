import PropTypes from "prop-types";
import React, { useRef, useState, useCallback, useEffect } from "react";
import styles from "./styles.module.scss";

export const Canvas = (props) => {
  const canvas = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [position, setPosition] = useState(null);

  const onDown = useCallback((event) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setPosition(coordinates);
      setDrawing(true);
    }
  }, []);

  const onUp = useCallback(() => {
    setDrawing(false);
    setPosition(null);
  }, []);

  const getCoordinates = (event) => {
    if (!canvas.current) {
      return null;
    }

    const x = event.pageX || event.touches[0].pageX;
    const y = event.pageY || event.touches[0].pageY;

    return {
      x: x - canvas.current.offsetLeft,
      y: y - canvas.current.offsetTop,
    };
  };

  const onMove = useCallback(
    (event) => {
      if (drawing) {
        const newPosition = getCoordinates(event);
        if (position && newPosition) {
          drawLine(position, newPosition);
          setPosition(newPosition);
        }
      }
    },
    [drawing, position]
  );

  const drawLine = (originalPosition, newPosition) => {
    if (!canvas.current) {
      return null;
    }

    const context = canvas.current.getContext("2d");

    if (context) {
      context.strokeStyle = "#000";
      context.lineJoin = "round";
      context.lineWidth = props.strokeWidth;

      context.beginPath();
      context.moveTo(originalPosition.x, originalPosition.y);
      context.lineTo(newPosition.x, newPosition.y);
      context.closePath();

      context.stroke();
      handleDraw(context.getImageData(0, 0, props.width, props.height));
    }
  };

  const handleDraw = (data) => {
    if (typeof props.onDraw === "function") {
      props.onDraw(data);
    }
  };

  useEffect(() => {
    if (typeof props.data === "object" && canvas.current) {
      const context = canvas.current.getContext("2d");
      // TODO: scale imageData
      context.putImageData(props.data, 0, 0);
    }
  }, [props.data]);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvas}
        style={{
          border: "4px solid #0048AC",
        }}
        onMouseDown={props.viewOnly ? undefined : onDown}
        onTouchStart={props.viewOnly ? undefined : onDown}
        onMouseUp={props.viewOnly ? undefined : onUp}
        onTouchEnd={props.viewOnly ? undefined : onUp}
        onMouseLeave={props.viewOnly ? undefined : onUp}
        onMouseMove={props.viewOnly ? undefined : onMove}
        onTouchMove={props.viewOnly ? undefined : onMove}
        width={1240}
        height={370}
      />
    </div>
  );
};

Canvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewOnly: PropTypes.bool,
  data: PropTypes.object,
  onDraw: PropTypes.func,
  colors: PropTypes.arrayOf(PropTypes.string),
  strokeWidth: PropTypes.number,
};

Canvas.defaultProps = {
  width: 600,
  height: 600,
  viewOnly: false,
  data: undefined,
  onDraw: undefined,
  colors: ["#7030A2", "#000000", "#0170C1", "#FE0002", "#FFFF01", "#00AF52"],
  strokeWidth: 5,
};
