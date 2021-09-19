<script>
	const { dataset_dev, each }=require("svelte/internal")
	import { onMount } from 'svelte';  

	import Resume from "./Resume.svelte"
	import {about_data} from "./about"
	import {skill_data} from "./skills"
	import {facts_data} from "./facts"
	import {testimonial_data} from "./testimonials"

	import {template} from "./template"

	onMount(template);
</script>
<main>
	<!-- ======= Mobile nav toggle button ======= -->
  <!-- <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> -->
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex flex-column justify-content-center">

    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav><!-- .nav-menu -->

  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Vladímir Rodríguez Diez</h1>
      <p>I'm <span class="typed" data-typed-items="Engineer, Developer, Researcher, Teacher"></span></p>
      <div class="social-links">
        <a href="https://msng.link/o/?+5354873173=tg" class="telegram"><i class="bx bxl-telegram"></i></a>
        <a href="https://msng.link/o/?https://www.facebook.com/vladimir.rodriguezdiez/=fm" class="messenger"><i class="bx bxl-messenger"></i></a>
        <a href="https://www.researchgate.net/profile/Vladimir-Rodriguez-2" class="researchgate"><img alt="researchgate icon" class="researchgate" src="assets/img/researchgate-svgrepo-com1.svg"></a>
        <a href="https://msng.link/o/?522226111169=wa" class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
        <a href="https://www.linkedin.com/in/vlad%C3%ADmir-rodr%C3%ADguez-diez-12a76649/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="assets/img/profile-img.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Electrical Engineering Teacher, Computer Sciences Researcher &amp; Developer.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row">	
				{#each about_data as half_data}		
					<div class="col-lg-6">
						<ul>
							{#each half_data as data}	
								<li><i class="bi bi-chevron-right"></i> <strong>{data.key}:</strong> <span>{data.value}</span></li>					
							{/each}
						</ul>
					</div>					
				{/each}		
			</div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Facts Section ======= -->
    <section id="facts" class="facts">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Facts</h2>
          <p>
			  I have publications in computer sciences journals included in the Journal Citation Reports (Thomson Reuters) and presentations in prestigious congresses.
			  I have work in software and hardware projects for industrial and home applications.
			  I teach subjects related to Automation, FPGAs and Arduino in the Electrical Engineering Department at the University of Camagüey, Cuba.
		  </p>
        </div>

        <div class="row">
			{#each facts_data as fact}
				<div class="col-lg-3 col-md-6 mt-5 mt-md-0">
				<div class="count-box">
					<i class="bi bi-{fact.icon}"></i>
					<span data-purecounter-start="0" data-purecounter-end="{fact.value}" data-purecounter-duration="1" class="purecounter"></span>
					<p>{fact.name}</p>
				</div>
				</div>				
			{/each}
        </div>
      </div>
    </section><!-- End Facts Section -->

    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
          <p>
			As a software developer I have created Python and Java applications for scientific data processing and presentation.
			In addition, I can write high quality scientific publications using LaTeX.
			I have worked on several FPGA and Arduino hardware projects using VHDL, C and C++.
			I can also develop web sites using Django and Svelte.
		  </p>
        </div>

        <div class="row skills-content">
			{#each skill_data as half_skills}		
				<div class="col-lg-6">
					<ul>
						{#each half_skills as skill}	
							<div class="progress">
								<span class="skill">{skill.language} <i class="val">{skill.level}%</i></span>
								<div class="progress-bar-wrap">
									<div class="progress-bar" role="progressbar" aria-valuenow="{skill.level}" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>					
						{/each}
					</ul>
				</div>					
			{/each}	
        </div>
      </div>
    </section><!-- End Skills Section -->

	 <!-- ======= Resume Section ======= -->
	<Resume/>

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p> 
            Sacientific publications in Computer Ciences. 
            Software projects for processing and presentation of weather radar data. 
            Hardware projects for home and industrial applications.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-pub">Research</li>
              <li data-filter=".filter-soft">Develop</li>
              <li data-filter=".filter-hardware">Hardware</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-hardware">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/tesis-grado-1.png" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Engineering Tesis 1</h4>
                <p>Hardware</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/tesis-grado-1.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Engineering Tesis 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-hardware">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-pub">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          

        </div>

      </div>
    </section><!-- End Portfolio Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Testimonials</h2>
        </div>

        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">
			{#each testimonial_data as testimonial}
				<div class="swiper-slide">
				<div class="testimonial-item">
					<img src="assets/img/testimonials/{testimonial.img}" class="testimonial-img" alt="">
					<h3>{testimonial.name}</h3>
					<h4>{testimonial.position}</h4>
					<p>
					<i class="bx bxs-quote-alt-left quote-icon-left"></i>
						{testimonial.testimony}
					<i class="bx bxs-quote-alt-right quote-icon-right"></i>
					</p>
				</div>
				</div><!-- End testimonial item -->				
			{/each}    
          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Testimonials Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row mt-1">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>San Ramón 299, Camagüey, Cuba.</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>vladimir.rdguez@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+53 32 246118</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <h3>Vladímir Rodríguez Diez</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>      
      <div class="social-links">
        <a href="https://msng.link/o/?+5354873173=tg" class="telegram"><i class="bx bxl-telegram"></i></a>
        <a href="https://msng.link/o/?https://www.facebook.com/vladimir.rodriguezdiez/=fm" class="messenger"><i class="bx bxl-messenger"></i></a>
        <a href="https://www.researchgate.net/profile/Vladimir-Rodriguez-2" class="researchgate"><img alt="researchgate icon" class="researchgate" src="assets/img/researchgate-svgrepo-com_bg.svg"></a>
        <a href="https://msng.link/o/?522226111169=wa" class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
        <a href="https://www.linkedin.com/in/vlad%C3%ADmir-rodr%C3%ADguez-diez-12a76649/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      <div class="copyright">
        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: [license-url] -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <div id="preloader"></div>

</main>

<style>
    .researchgate {
        width: 22px;
        margin-bottom: 0.3em;
    }
</style>
