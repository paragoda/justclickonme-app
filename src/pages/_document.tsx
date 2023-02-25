import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen m-0">
        <div className="px-5 max-w-[82rem] mx-auto h-full">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
