import CustomError from "../components/Error";
import Head from "next/head";

export default function Error404() {
    return (
        <>
            <Head>
                <title>Oups - Wrong page</title>
            </Head>
            <CustomError />
        </>
    )

}