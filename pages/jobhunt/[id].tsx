import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Notice, GetNoticeResults } from "../../types";

function NoticePage({notice}: { notice: Notice }) {
    const router = useRouter();
    console.log(router.query);
    
    return <div>
        <h1>{notice.company}</h1>
    </div>;
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
    const res = await fetch(`http://127.0.0.1:8000/job_hunting/rest/notice/${context.query.id}`);
    const notice = await res.json();

    return {
        props: {
            notice,
        }
    };
}

export default NoticePage;