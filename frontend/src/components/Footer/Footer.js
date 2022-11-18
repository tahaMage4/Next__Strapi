import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy;
        <a href="#">Yato</a>
        <span> {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
