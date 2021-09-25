<script>
    const facts_data = [
        {
            name: 'Publications',
            value: 10,
            icon: "journal-richtext"
        },  
        {
            name: 'Citations',
            value: 32,
            icon: "chat-quote"
        }, 
        {
            name: 'Projects',
            value: 20,
            icon: "cpu"
        }, 
        {
            name: 'Courses',
            value: 5,
            icon: "cast"
        },      
	]
</script>

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
</section>

<style>
    /*--------------------------------------------------------------
    # Facts
    --------------------------------------------------------------*/
    .facts .count-box {
    padding: 30px 30px 25px 30px;
    margin-top: 30px;
    width: 100%;
    position: relative;
    text-align: center;
    background: #fff;
    }
    .facts .count-box i {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    background: #0563bb;
    color: #fff;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    }
    .facts .count-box span {
    font-size: 36px;
    display: block;
    font-weight: 600;
    color: #011426;
    }
    .facts .count-box p {
    padding: 0;
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    }
</style>