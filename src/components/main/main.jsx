import React from 'react';
import './main.css'
import dot from '../../assets/dot.svg'
import smile1 from '../../assets/smile1.svg'
import smile2 from '../../assets/smile2.svg'
import smile3 from '../../assets/smile3.svg'
import homePageImg from '../../assets/homePage.png'
import screen from '../../assets/Screen.png'
import mobile from '../../assets/Mobile.png'
import experts1 from '../../assets/experts-left.png'
import experts2 from '../../assets/experts-right.png'

const Main = () => {
  return (
    <main>
      <section className='whyMarico'>
        <div className="container whyMarico-content">
          <h2 className="title mr-title">
            Why Creators Love Marico
          </h2>
          <div class="cards--grid">
            <div class="card--wrap">
              <div class="card">
                <div class="card--contents card--front">
                  <div class="card--depth">
                    <figure class="card--figure">
                      <img
                        src={smile1}
                        alt="Elephant at sunset"
                      />
                    </figure>
                    <div class="card--detail">
                      <div class="hues">
                        <div class="hue hue--1"></div>
                        <div class="hue hue--2"></div>
                        <div class="hue hue--3"></div>
                      </div>
                      <div class="hue--gradient hue--gradient--1"></div>
                    </div>
                  </div>
                </div>
                <div class="card--contents card--back hue--gradient--1--back">
                  <div class="card--depth">
                    <div class="retro">
                      <h2>Reduced Anxiety</h2>
                      <ul>
                        <li>Never worry about <br /> losing your audience.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card--wrap">
              <div class="card">
                <div class="card--contents card--front">
                  <div class="card--depth">
                    <figure class="card--figure">
                      <img
                        src={smile2}
                        alt="Elephant at sunset"
                      />
                    </figure>
                    <div class="card--detail">
                      <div class="hues">
                        <div class="hue hue--4"></div>
                        <div class="hue hue--5"></div>
                        <div class="hue hue--6"></div>
                      </div>
                      <div class="hue--gradient hue--gradient--2"></div>
                    </div>
                  </div>
                </div>
                <div class="card--contents card--back hue--gradient--2--back">
                  <div class="card--depth">
                    <div class="retro">
                      <h2>Lower Workload</h2>
                      <ul>
                        <li>Just share one link. <br /> We'll handle the rest.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card--wrap">
              <div class="card">
                <div class="card--contents card--front">
                  <div class="card--depth">
                    <figure class="card--figure">
                      <img
                        src={smile3}
                        alt="Elephant at sunset"
                      />
                    </figure>
                    <div class="card--detail">
                      <div class="hues">
                        <div class="hue hue--7"></div>
                        <div class="hue hue--8"></div>
                        <div class="hue hue--9"></div>
                      </div>
                      <div class="hue--gradient hue--gradient--3"></div>
                    </div>
                  </div>
                </div>
                <div class="card--contents card--back hue--gradient--3--back">
                  <div class="card--depth">
                    <div class="retro">
                      <h2>More Time</h2>
                      <ul>
                        <li>Spend less time <br /> on marketing tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="step1">
            STEP 1
          </span>
          <h2 className="mr-title stepTitle">
            Connect Your Content
          </h2>
          <p className="stepDesc">
            Bring all of your content together and get a Homepage that
            automatically updates whenever you create anywhere online.
          </p>
          <button className='stepBtn'>
            View Avaliable Sources
          </button>
        </div>
      </section>

      <section className='homePage'>
        <div className="container homePage-content">
          <div className="homePage-textContent">
            <p className="homePage-miniTitle">
              Your Homepage
            </p>
            <h2 className="homePage-title">
              Your Content. All in <span className='homePage-span'>One Spot</span>
            </h2>
            <div className="homePage-boxes">
              <div className="homePage-box">
                <p>1</p>
                <span>Bring all of your content together into one homepage.</span>
              </div>
              <div className="homePage-box">
                <p>2</p>
                <span>Your page automatically updates whenever you create.</span>
              </div>
            </div>
            <div className="homePage-btn_box">
              <button className="homePage-btn">
                Get Started Now
              </button>
              <button className="homePage-btn homePage-btn2">
                View A Demo
              </button>
            </div>
          </div>
          <div className="homePage-imgContent">
            <img src={homePageImg} alt="" />
          </div>
        </div>
      </section>

      <span className="step1">
        STEP 2
      </span>
      <h2 className="mr-title stepTitle">
        Share Your Homepage
      </h2>
      <p className="stepDesc">
        Share your Wavium homepage link with your followers, and
        we'll handle the rest.
      </p>

      <section className="boxes">
        <div className="container">
          <div className="boxes-content">
            <div className="boxes-content_boxes">
              <p className="boxes-content_miniTitle">
                One Link
              </p>
              <h2 className="boxes-content_title boxes-content_title1">
                <span>
                  ALL You Create.
                </span> One Link
              </h2>
              <img src={mobile} alt="" />
            </div>
            <div className="boxes-content_boxes boxes-content_boxes2">
              <p className="boxes-content_miniTitle">
                Collect Subscribers
              </p>
              <h2 className="boxes-content_title boxes-content_title2">
                <span>
                  Emails.
                  Phone #s.
                </span> All Yours.
              </h2>
            </div>
          </div>
          <div className="boxes-content_div">
            <button className="boxes-content_btn">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <span className="step1">
        STEP 3
      </span>
      <h2 className="mr-title stepTitle">
        Send Emails & Text Messages
      </h2>
      <p className="stepDesc">
        No more going through a social platform. Reach and engage
        your audience directly over email and text massage.
      </p>

      <section className='homePage'>
        <div className="container homePage-content">
          <div className="homePage-textContent">
            <p className="homePage-miniTitle">
              Create & Share
            </p>
            <h2 className="homePage-title">
              Reach Your Audience <span className='homePage-span'>Directly.</span>
            </h2>
            <div className="homePage-boxes">
              <div className="homePage-box">
                <p>1</p>
                <span>Embed content or create something new to share.</span>
              </div>
              <div className="homePage-box">
                <p>2</p>
                <span>Share content over email, text message or your homepage.</span>
              </div>
            </div>
            <button className="homePage-btn">
              Get Started Now
            </button>
            <button className="homePage-btn homePage-btn2">
              View A Demo
            </button>
          </div>
          <div className="homePage-imgContent">
            <img src={screen} alt="" />
          </div>
        </div>
      </section>

      <h2 className="mr-title stepTitle">
        Experts Agree
      </h2>
      <div className="images-experts">
        <img src={experts1} alt="" className="expertsImg" />
        <img src={experts2} alt="" className="expertsImg" />
      </div>

      <section className="helped">
        <div className="container">
          <h2 className="mr-title stepTitle helped-title">
            We've helped over 1,000 creatorsre
            claim control of their audience.
          </h2>
        </div>
      </section>

      <section className="getStarted">
        <div className="container">
          <img src="/Company_logo.svg" alt="" className='getLogo' />
          <h2 className="getStarted-title">
            Get Started Now
          </h2>
          <p className="getStarted-desc">
            Setup is easy and takes under 5 minutes.
          </p>
          <button className="getStarted-btn">
            Get Started Now
          </button>
          <div className="header-desc_content getStarted-content">
            <img src={dot} alt="Title Image" />
            <span>
              1000+
            </span>
            <p className="head-desc">
              creators have already started
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;