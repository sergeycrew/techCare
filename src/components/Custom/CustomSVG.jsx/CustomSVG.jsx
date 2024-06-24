import sprite from "assets/sprite.svg"

const CustomSVG = ({ symbolId, width, height, fillColor }) => {
  return (
    <svg width={width} height={height} fill={fillColor}>
      <use xlinkHref={`sprite#${symbolId}`} />
    </svg>
  );
};

export default CustomSVG;