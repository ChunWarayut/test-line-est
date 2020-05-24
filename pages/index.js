import Head from 'next/head'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.location.href = ("https://lin.ee/b62lJ5I")
  }, [])
  return (
    <div>
      <Head>
        <title>TEST</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="ทดสอบนะ" />
        <meta property="og:description" content="ทดสอบจริง ๆ นะ" />
        <meta property="og:image" content="https://scontent.fbkk4-3.fna.fbcdn.net/v/t1.15752-9/98034808_613622932578761_192100065945321472_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_eui2=AeF9MO5Xwerkmxirr3_n-yxoYmFaLbq_6ORiYVotur_o5AAy6GK4tzoACeF_ggzFnip__keqyG-vg3BKrgq-kaBw&_nc_ohc=0jcFsr2JuPQAX99xiXG&_nc_ht=scontent.fbkk4-3.fna&oh=6927fcb5f0333d82c2165e0d355ce531&oe=5EEF18C6&dl=1" />
        <meta property="og:url" content="https://lin.ee/b62lJ5I" />
      </Head>
    </div>
  )
}

export default Home
