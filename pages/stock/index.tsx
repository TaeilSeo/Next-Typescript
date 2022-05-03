import { NextPage } from "next";
import Layout from "../../components/Layout";

import styles from "../../styles/Home.module.css";

const StockPage: NextPage = (props) => {
	return (
		<main className={styles.main}>
			<h1>나스닥 뿌수기!!</h1>
			<article>
				<h2>아직 패닉셀 나오지 않았다?</h2>
				<p>S&P 4000 뚫릴 시, 엄청난 패닉셀이 나올 수 있다!</p>
				<p>물린 사람에겐 고통이겠지만, 신규 진입자에게는 엄청난 기회가 될 수도?</p>
			</article>
		</main>
	);
};

StockPage.getLayout = function getLayout(page: typeof StockPage) {
	return <Layout>{page}</Layout>;
};

export default StockPage;
