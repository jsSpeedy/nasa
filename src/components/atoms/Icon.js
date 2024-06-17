import IcomoonReact from "icomoon-react";
import iconSet from "public/selection.json";

const Icon = (props) => {
  const { color = "currentColor", size = "24", icon, className = "" } = props;
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export default Icon;
