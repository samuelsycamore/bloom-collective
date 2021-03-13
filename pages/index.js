import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <header>
        <div className="wrapper">
          <div className="row">
            <div className="col">
                <img src="/bloom_logo.svg" alt="Bloom Co" className="logo"/>
            </div>
          </div>
        </div>
      </header>

      <div className="block hero">
        <div className="wrapper">
          <div className="row">
            <div className="col">
              <div className="content">
                <div className="title">
                  <h1><span class="red line">Business-driven</span> <br/>content workflow</h1>
                </div>
                <p>Every business needs to be a content producer. Let Bloom Collective show you how to do it right.</p>
                <a href="mailto:matt@bloomcollective.com?subject=Inquiry" class="btn">Contact us</a>
              </div>
            </div>
            <div className="col">
              <img src="/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="wrapper">
          <div className="row">
            <div className="col">
              <img src="/bloom_logo.svg" alt="Bloom Co" className="logo" />
              <p>Business-driven contnet workflow</p>
              <p class="cities">SF - <span class="red">JKT</span> - UAE</p>

              <div className="office">
                <h2>Office</h2>
                <p>Bloom Collective Studio</p>
                <p>Sahid Office Boutique Unit A, 4th Floor, Jend.</p>
                <p>Sudirman ROad 86, RT.10/RW.11, Karet Tengsin,</p>
                <p>Tanah Abang, Central Jakarta, Indonesia</p>
              </div>

              <p class="copyright">© Bloom Collective Studio 2021. All rights reserved.</p>


            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}