import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from "./../../components/Header"
import Nav from "./../../components/Nav"
import Footer from "./../../components/Footer"

export default function Tag(props){
    const router = useRouter()
    const { tag } = router.query;
    const taggedProjects =  props.projects.filter((project) => {
        const a = project.hashtags.filter((hastag) => hastag === tag)
        if (a.length > 0) {
            return a;
        }
    })
    return <>
    <Nav />
    <Header title="Tags" />
    <section className='bg-gray py-20'>
        {taggedProjects.map((project) => <div className='px-6 py-2'>
        <Link href={`/projects/${project.route}`}>
            <a className='underline text-white text-2xl'>{project.title}</a>
        </Link>
    </div>)}
    </section>
    <Footer />
    </>
}

import fsPromises from 'fs/promises';
import path from 'path'
export async function getServerSideProps(context) {
    const filePath = path.join(process.cwd(), 'data/cv.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
      props: objectData
    }
}
