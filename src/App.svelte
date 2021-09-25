<script>
	const { dataset_dev, each }=require("svelte/internal")
	import { onMount } from 'svelte';  

	import Resume from "./Resume.svelte"
	import About from "./About.svelte"
	import Skills from "./Skills.svelte"
	import Facts from "./Facts.svelte"
	import Testimonials from "./Testimonials.svelte"
	import Portfolio from "./Portfolio.svelte"

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
      <About/>
    <!-- End About Section -->

    <!-- ======= Facts Section ======= -->
      <Facts/>
    <!-- End Facts Section -->

    <!-- ======= Skills Section ======= -->
      <Skills/>
    <!-- End Skills Section -->

	  <!-- ======= Resume Section ======= -->
	    <Resume/>
    <!-- End Resume Section --> 

    <!-- ======= Portfolio Section ======= -->
      <Portfolio/>
    <!-- End Portfolio Section -->

    <!-- ======= Testimonials Section ======= -->
      <Testimonials/>
    <!-- End Testimonials Section -->

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
