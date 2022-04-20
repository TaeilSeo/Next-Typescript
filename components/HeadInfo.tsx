import Head from "next/head";

const HeadInfo = ({title, content}: {title: string, content: string}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content={content}
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

HeadInfo.defaultProps = {
    title: 'TaeLab',
    contents: 'TaeLab powered by Next js'
}

export default HeadInfo;