import Document, { Html, Head, Main, NextScript } from 'next/document'

//allows you to add tag to the html or document body element
class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument