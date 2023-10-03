import Link from "next/link";
import classes from "./Tag.module.scss";
// Type is around 6 values
const Tag = ({ type, name, href }) => {
  if (href) {
    return (
      <Link href={href} className={`${classes.tag} ${classes[`type-${type}`]}`}>
        {name}
      </Link>
    );
  }
  return (
    <div href={href} className={`${classes.tag} ${classes[`type-${type}`]}`}>
      {name}
    </div>
  );
};

export default Tag;
