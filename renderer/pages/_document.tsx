import { Head, Html, Main, NextScript } from 'next/document';
import Document, { DocumentContext } from 'next/document';
import { ServerStyles, createStylesServer } from '@mantine/next';

const stylesServer = createStylesServer();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // Add your app specific logic here

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="scrollbar-hide max-h-screen overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
