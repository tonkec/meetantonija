import Link from 'next/link';
import Header from "./../../components/Header"
import Head from "next/head";
export default function Tag(props){
    const { projects } = props; 
    return <>
     <Head>
        <title>Antonija's tags</title>
    </Head>
    <Header title="Tags" />
    <section className='bg-gray py-20'>
        {projects.map((project, i) => <div key={i} className='px-6 py-2'>
        <Link href={`/projects/${project.route}`}>
            <a className='underline text-white text-2xl'>{project.title}</a>
        </Link>
    </div>)}
    </section>
    </>
}

import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'data/cv.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return {
      props: {
          projects: objectData.projects.filter((project) => project.hashtags.includes(params.tag))
      }
    }
}

// dynamic route, all possible routes
export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'data/cv.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    const tags = Array.from(new Set(objectData.projects.map((project) => project.hashtags).flat()))
    return {
        paths: tags.map((tag) => ({
            params: { tag } // pages/tags/[tag]
        })),
        fallback: false
    }
}
