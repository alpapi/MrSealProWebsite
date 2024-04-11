import { Html, Head, Main, NextScript } from 'next/document'

const myVar = "String thingy"
export default function Document() {
    return (
        <Html>
            <Head>
                <title>MrSealPro</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />
                <meta name="description" content="The Driveway Sealcoating Professional"/>
                <meta name="keywords" content="MrSealPro, pavement, quality, reliability"/>
                <meta name="author" content="Alex Rapp"/>
                <link rel={"icon"} href={"pics/logoUpdated.png"}/>
            </Head>
            <body className={"bg-gray-100"}>

            <Main />
            <NextScript />
            </body>
        </Html>
    )
}