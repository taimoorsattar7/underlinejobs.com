import Head from 'next/head'

function SEO(props: any): JSX.Element {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{props.title ? props.title : ''}</title>
      <meta name="description" content={props.description ? props.description : ''} />

      {/* Schema.org markup for Google+ */}
      <meta itemProp="name" content={props?.title ?? ''} />
      <meta itemProp="description" content={props?.description ?? ''} />

      <meta itemProp="image" content={props?.image ?? ''} />

      {/* Twitter Card data */}
      {/* <meta name="twitter:card" value={'summary_large_image'} /> */}
      <meta name="twitter:creator" content="@taimoorsattar7" />
      <meta name="twitter:title" content={props?.title ?? ''} />
      <meta name="twitter:description" content={props?.description ?? ''} />

      <meta name="twitter:image:src" content={props?.image ?? ''} />

      {/* Open Graph data */}
      <meta name="og:title" content={props?.title ?? ''} />
      <meta name="og:type" content={props?.type ?? ''} />
      <meta name="og:image" content={props?.image ?? ''} />
      <meta name="og:description" content={props?.description ?? ''} />
    </Head>
  )
}

export default SEO
