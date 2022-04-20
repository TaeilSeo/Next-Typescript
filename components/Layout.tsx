import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeadInfo from "./HeadInfo";
import Nav from "./Nav";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeadInfo 
                title="TaeLab"
                content="TaeLab powered by Next js"
            />

            <Nav />

            {/* <div>
                <nav>
                    <li>Home</li>
                </nav>
                {children}
            </div> */}

            {children}

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </>
    );
}

export default Layout;