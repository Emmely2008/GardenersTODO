import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className="bg-black w-full flex place-content-center	">{children}</div>
  );
}
