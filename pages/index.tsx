import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a>TaeLab!</a>
                </h1>

                <p className={styles.description}>
					TaeLab과 함께 우리 모두 더 똑똑해져요!
                    {/* Get started by editing{" "}
                    <code className={styles.code}>pages/index.tsx</code> */}
                </p>

                <div className={styles.grid}>
                    <a href="/jobhunt" className={styles.card}>
                        <h2>취준 &rarr;</h2>
                        <p>
                            취업 공고를 한 번에 열람할 수 있어요!
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
					<h2>주식 &rarr;</h2>
                        <p>
                            주식 관련 정보들을 함께 공유해요!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>부동산 &rarr;</h2>
                        <p>
                            요새는 임차인도 똑똑해 져야해요.
							함께 알아봐요!
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>글로벌 &rarr;</h2>
                        <p>
                            세계는 지금 어떻게 돌아가고 있을까요?
                        </p>
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Home;
