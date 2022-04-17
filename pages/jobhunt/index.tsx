import type { GetStaticProps, NextPage } from "next";
import { Notice, GetNoticeResults } from "../../types";
import styles from "../../styles/Home.module.css";

const Jobhunt: NextPage<{ notices: Notice[] }> = ({ notices }) => {
    return (
        <main className={styles.main}>
            {notices.map((notice) => {
                return <li key={notice.id}>{notice.company}</li>;
            })}
        </main>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch(`http://127.0.0.1:8000/job_hunting/rest/notice/`);
	const results: GetNoticeResults = await res.json();

	return {
		props: {
			notices : results,
		},
	};
};

export default Jobhunt;