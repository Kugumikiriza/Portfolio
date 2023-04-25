import React from 'react'


function Home() {
  return (
   <>
    
  <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

 
  <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="assets/img/profile-img.png" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Andrew Kugumikiriza</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>

  
  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Andrew Kugumikiriza</h1>
      <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>

  <main id="main">

   
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>I am a Ugandan born in Masaka City. I love working and am flexible in any field of work concerning technology and business.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/profile-img.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX &amp; Graphics Designer, Photographer, Web Developer, &amp; Businessman</h3>
            <p className="fst-italic">
             I am in my last year and last semester pursuing a Bachelors degree in Computer Science at Lira University. I am very flexible in any kind of work related to business.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>02 Feb 2001</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+256-755-312-952</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Masaka,Uganda</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>kugumikirizaandrew@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              I am a freelancer passionate in every field of work concerning business.
            </p>
          </div>
        </div>

      </div>
    </section>
        

   
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Within 2yrs, I have acquired a number of skills to help me in the field of work</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">65%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">Python(Django)<i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Photography & Video coverage<i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Adobe Photoshop & illustrator <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>


    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>I am pursuing a Bachelor of Science in Computer Science at Lira University & am in my final year and final semester. I have worked with many companies and I have experience in the field of business. I am flexible in any field of work concerning business and technology.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Andrew Kugumikiriza</h4>
              <p><em>I have 3+ years of experience in designing with Adobe photoshop and illustrator. I worked as a computer editor with KANDOPIX UG LTD in 2020 and I worked with Guchietech company in 2022 as an intern but I managed to manouver around all fields of work.</em></p>
              <ul>
                <li>Masaka, Uganda</li>
                <li>+256-755-312-952</li>
                <li>kugumikirizaandrew@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science in Computer Science (Computer Science)</h4>
              <h5>2021 - Present</h5>
              <p><em>Lira University, Lira city (UG)</em></p>
              <p>I am finishing at the end of July 2023. Am very passionate in technology and business.</p>
            </div>
            <div className="resume-item">
              <h4>Uganda Advanced Certificate of Education (UACE)</h4>
              <h5>2018 - 2019</h5>
              <p><em>Masaka Senior Secondary School, Masaka City (UG)</em></p>
              <p>I did PCM/ICT(Physics Chemistry Mathematics) and I got 17points</p>
            </div>
            <div className="resume-item">
              <h4>Uganda Certificate of Education (UCE)</h4>
              <h5>2014 - 2017</h5>
              <p><em>Masaka Senior Secondary School, Masaka City (UG)</em></p>
              <p>I got 17aggregates</p>
            </div>
            <div className="resume-item">
              <h4>Primary Leaving Examinations (PLE)</h4>
              <h5>2005 - 2013</h5>
              <p><em>St.Joseph's P/S Kiyimbwe, Masaka City (UG)</em></p>
              <p>I got 11aggregates</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Working Experience</h3>
            <div className="resume-item">
              <h4>KANDOPIX UG LTD (Computer editor)</h4>
              <h5>2019 - 2020</h5>
              <p><em>Wandegeya, Kampala, UG </em></p>
              <ul>
                <li>Editing with Adobe photoshop, illustrator and indesign</li>
                <li>Business management</li>

                <li>Reference: Dr.Mukasa Fulgye (CEO, KANDOPIX) - 0783115186</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>GUCHIETECH COMPANY (Intern)</h4>
              <h5>2022</h5>
              <p><em>Masaka Branch, Masaka City, UG</em></p>
              <ul>
                <li>Software development</li>
                <li>Business & Project Management</li>
                <li>Networking</li>
                <li>Graphics Designing</li>
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Certificates</h3>
              <div className="resume-item">
                <h4>Certificate in financial literacy for managers</h4>
                <h5>2022</h5>
                <p><em>Agribusiness Development Centre(ADC), Kampala, UG </em></p>
                <ul>
                  <li>Completing the training course</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Certificate of attendence in the 1st East African Youth Innovation Forum</h4>
                <h5>8th - 10th November, 2022</h5>
                <p><em>Hotel Africana, Kampala, UG </em></p>
                <ul>
                  <li>Innovation exhibition</li>
                </ul>
              </div>
          </div>
        </div>

      </div>
      </div>
    </section>

    

    
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>According to the skills I have and the passion I have for business, I can be of great help in the following areas</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><i className="bi bi-briefcase"></i></div>
            <h4 className="title"><a href="">Business Management</a></h4>
            <p className="description">All business operations including project managements</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">Graphics design</a></h4>
            <p className="description">I have done this for quite a good time using Adobe photoshop and illustrator. I have ever used Figma and I have also ever done video editing</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="bi bi-bar-chart"></i></div>
            <h4 className="title"><a href="">Photography & Video coverage</a></h4>
            <p className="description">I am a photographer on different ceremonies and I also capture ceremony videos</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="bi bi-binoculars"></i></div>
            <h4 className="title"><a href="">Web development</a></h4>
            <p className="description">I can develop fully working systems with python-django & react-js</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bi bi-brightness-high"></i></div>
            <h4 className="title"><a href="">Networking</a></h4>
            <p className="description">I have knowledge in networking & am also flexible to learning quickly</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
            <h4 className="title"><a href="">Monitoring & evaluation</a></h4>
            <p className="description">I learnt this mostly in business operations</p>
          </div>
        </div>

      </div>
    </section>



    
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Am always available online on Whatsapp or email and other media platforms like Twitter, facebook and Youtube</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Present: Lira University, Lira City (UG)</p>
                <p>Home Location: Masaka City (UG)</p>

              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>kugumikirizaandrew@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+256-755-312-952 (Whatsapp & Mobile)</p>
                <p>+256-782-078-321 (Mobile)</p>

              </div>

              
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

  </main>


  <footer id="footer">
    <div className="container">
     
      
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
   </>
   
  )
}

export default Home
