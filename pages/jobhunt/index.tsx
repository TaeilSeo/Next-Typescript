import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Notice, GetNoticeResults } from "../../types";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/Layout";

interface Props {
	notices: Notice[];
}

const JobhuntPage: NextPage<Props> = ({ notices }) => {
	return (
		<main className={styles.main}>
			{notices.map((notice) => {
				return (
					<div key={notice.id}>
						<Link href={`/jobhunt/${notice.id}`}>
							<a>
								<h3>{notice.company}</h3>
							</a>
						</Link>
					</div>
				);
			})}
		</main>
	);
};

JobhuntPage.getLayout = function getLayout(page: typeof JobhuntPage) {
	return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch(`http://127.0.0.1:8000/job_hunting/rest/notice/`);
	const results: GetNoticeResults = await res.json();

	return {
		props: {
			notices: results,
		},
	};
};

export default JobhuntPage;
