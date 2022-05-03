import Footer from "./Footer";
import HeadInfo from "./HeadInfo";
import Nav from "./Nav";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<HeadInfo title="TaeLab" content="TaeLab powered by Next js" />

			<Nav />

			{children}

			<Footer />
		</>
	);
}

export default Layout;
