import styles from "./Variant.module.css";

interface VariantProps {
  text: string;
  onClick: () => void;
}

function Variant({ text, onClick }: VariantProps) {
  return (
    <div onClick={onClick} className={`${styles["variant"]}`}>
      {text}
    </div>
  );
}

export default Variant;
