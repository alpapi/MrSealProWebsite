import { Html, Head, Main, NextScript } from 'next/document'
const myVar = "String thingy"
export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}