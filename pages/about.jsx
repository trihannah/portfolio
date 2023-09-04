import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              My name is Hanna Hirt and I am currently attending the Upleveled
              Bootcamp in Vienna.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
