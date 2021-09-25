<script>
    const testimonial_data = [
        {
            name: 'Dario Jorge Vázquez Arguija',
            position: "Senior Software Engineer at ThoughtWorks",
            img: "dario.jpeg",
            testimony: `During the time that I had the privilege of working with Vladimir, 
            I was able to notice his great intellectual and self-taught capacity, 
            which gives him impressive tools when it comes to solving problems of all kinds.`
        },
        {
            name: 'J. Francisco Martinez Trinidad',
            position: "Professor of computer science and Pattern Recognition in INAOE",
            img: "pancho.jpeg",
            testimony: `Vladimir is an excellent research student who thinks deeply about his research problem, 
            generates novel ideas, and tests them thoroughly. He is a great young researcher, but most of all, 
            he is an excellent person. I´m honored to collaborate with him.`
        },
        {
            name: 'Octavio Loyola González ',
            position: "Artificial Intelligence Manager at Altair Management Consultants.",
            img: "tavo.jpeg",
            testimony: `Vladimír was my PhD fellow student where I saw his performance during these years. 
            He is a great researcher in Computer Science, which has solved several real-world problems by applying innovative techniques. 
            He has shown abilities for leading and adapting quickly to teamwork, assimilating new knowledge and communication skills.`
        }  
    ]
</script>

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
</section>

<style>
  /*--------------------------------------------------------------
  # Testimonials
  --------------------------------------------------------------*/
  .testimonials .section-header {
    margin-bottom: 40px;
  }
  .testimonials .testimonials-carousel, .testimonials .testimonials-slider {
    overflow: hidden;
  }
  .testimonials .testimonial-item {
    text-align: center;
  }
  .testimonials .testimonial-item .testimonial-img {
    width: 120px;
    border-radius: 50%;
    border: 4px solid #fff;
    margin: 0 auto;
  }
  .testimonials .testimonial-item h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #111;
  }
  .testimonials .testimonial-item h4 {
    font-size: 14px;
    color: #999;
    margin: 0 0 15px 0;
  }
  .testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right {
    color: #90c8fc;
    font-size: 26px;
  }
  .testimonials .testimonial-item .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
  }
  .testimonials .testimonial-item .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
  }
  .testimonials .testimonial-item p {
    font-style: italic;
    margin: 0 auto 15px auto;
  }
  .testimonials .swiper-pagination {
    margin-top: 20px;
    position: relative;
  }
  .testimonials .swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 1;
    border: 1px solid #0563bb;
  }
  .testimonials .swiper-pagination .swiper-pagination-bullet-active {
    background-color: #0563bb;
  }
  @media (min-width: 992px) {
    .testimonials .testimonial-item p {
      width: 80%;
    }
  }
</style>