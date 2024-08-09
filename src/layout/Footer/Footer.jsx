import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();

    return ( 
        <footer className="seccion-footer">
            <h4>{t("FOOTER")}</h4>
        </footer>    
    );
}
 
    export default Footer;