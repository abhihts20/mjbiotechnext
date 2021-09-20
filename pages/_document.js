// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css" rel="stylesheet"/>
                    <script async type="text/javascript"
                            src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"/>
                    <script async src="https://code.jquery.com/jquery-3.6.0.min.js"
                            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                            crossOrigin="anonymous"/>
                    {/*<script async src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"/>*/}
                    {/*<script async src="https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js"/>*/}
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                          rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&family=Shadows+Into+Light&family=Averia+Serif+Libre:wght@400&display=swap"
                        rel="stylesheet"/>
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
                    <script async src="https://unpkg.com/aos@2.3.1/dist/aos.js"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
