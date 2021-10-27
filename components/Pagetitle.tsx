import Head from "next/head";

interface PagetitleProps {
    title: string;
}
export default function Pagetitle({ title }: PagetitleProps) {
    return (
        <Head>
            <title>{title} | e-commerce store </title>
            <meta name="description" content="Buy shoes, clothes, perfumes" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
