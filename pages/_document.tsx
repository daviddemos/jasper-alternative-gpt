import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="title" content="Salami: An Open Source Jasper Alternative"/>
                    <meta name="description" content="Salami is an open-source alternative to Jasper, providing powerful AI-driven content generation for marketers,
            writers, and businesses. Discover the potential of AI-powered content creation with Salami"/>
                    <meta property="og:site_name" content="Salami"/>

                    <meta property="og:title" content="Salami: An Open Source Jasper Alternative"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content="Generate any UI component in seconds."/>
                    <meta
                        name="twitter:description"
                        content="Salami is an open-source alternative to Jasper, providing powerful AI-driven content generation for marketers, writers, and businesses."
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
