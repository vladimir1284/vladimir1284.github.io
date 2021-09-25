<script>
    const dob = new Date("11/12/1984");  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
    
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
    
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
    
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  

    export const about_data = [
        [
            {
                key: 'Birthday',
                value: '11 Dec 1984'
            },
            {
                key: 'Website',
                value: 'vladimir1284.github.io'
            },
            {
                key: 'Phone',
                value: '+53 32 246118'
            },
            {
                key: 'City',
                value: 'Camagüey, Cuba'
            }
        ],
        [
            {
                key: 'Age',
                value: age
            },
            {
                key: 'Degree',
                value: 'PhD.'
            },
            {
                key: 'Email',
                value: 'vladimir.rdguez@gmail.com'
            },
            {
                key: 'Category',
                value: 'Ancillary Professor'
            }
        ]
    ]
</script>
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
</section>

<style>
  /*--------------------------------------------------------------
  # About
  --------------------------------------------------------------*/
  .about .content h3 {
    font-weight: 700;
    font-size: 26px;
    color: #728394;
  }
  .about .content ul {
    list-style: none;
    padding: 0;
  }
  .about .content ul li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .about .content ul strong {
    margin-right: 10px;
  }
  .about .content ul i {
    font-size: 16px;
    margin-right: 5px;
    color: #0563bb;
    line-height: 0;
  }
  .about .content p:last-child {
    margin-bottom: 0;
  }
</style>