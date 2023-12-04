import {NextPage} from "next";
import styles from "./main-page-panel.module.css";
import logo from "../../../public/main-page/main-page-logo.png";
import underlining from "../../../public/main-page/main-page-underlining.svg";
import textLogo from "../../../public/main-page/main-page-text-logo.svg";
import {CommonButtonCustom} from "../../buttons";
import {useState} from "react";
import {LoginModal} from "../../modals";

const MainPagePanel: NextPage = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={styles.logosGrid}>
                <img alt='logo' src={logo.src}/>
                <div>
                    <div className={styles.title}>
                        <span>Unified Payment System
                            for</span>
                        &nbsp;
                        <span>Seamless Web3</span>
                        <img className={styles.underlining} alt="" src={underlining.src}/>
                    </div>
                </div>
                <img alt="textLogo" src={textLogo.src}/>
                <CommonButtonCustom className={styles.btn} onClick={() => setOpen(true)}>Log in</CommonButtonCustom>
            </div>
            
            <LoginModal open={open} setOpen={setOpen}/>
        </>
    );
};

export default MainPagePanel;