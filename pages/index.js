import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeLayout from "../components/home/Home";

export default function Home() {
    return (
        <>
            <div>
                <Head>
                    <title>Mj Biotech Industries</title>
                    <meta name="description" content="Mjbiotech Industries"/>
                    <link rel="icon" href={"/logo.png"}/>
                </Head>
                <HomeLayout/>
            </div>
        </>
    )
}
