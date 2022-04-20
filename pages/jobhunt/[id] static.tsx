import { Notice, GetNoticeResults } from "../../types";

function NoticePage({notice}: {
    notice: Notice
}) {
    return <div>
        <h1>{notice.company}</h1>
    </div>;
}

export async function getStaticPaths() {
    const res = await fetch(`http://127.0.0.1:8000/job_hunting/rest/notice/`);
    const results: Notice[] = await res.json();

    return {
        paths: results.map((notice) => {
            return { params: { id: String(notice.id) } };
        }),
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const res = await fetch(`http://127.0.0.1:8000/job_hunting/rest/notice/${params.id}`);
    const notice = await res.json();

    return {
        props: {
            notice
        }
    };
}

export default NoticePage;