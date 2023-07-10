import React, { useEffect, useState } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const originalRenderPage = ctx.renderPage;

    let isPromiseResolved = false;

    ctx.renderPage = async () => {
      const { enhanceApp, enhanceComponent } = await originalRenderPage({
        enhanceApp: (App:any) => (props:any) => <App {...props} />,
        enhanceComponent: (Component:any) => Component,
      });

      isPromiseResolved = true;

      return { enhanceApp, enhanceComponent };
    };

    const initialProps = await Document.getInitialProps(ctx);

    if (!isPromiseResolved) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
