
<script>
    const skill_data = [
        [		
            {
                language: 'LaTeX',
                level: 100
            },
            {
                language: 'Java',
                level: 90
            },
            {
                language: 'Python',
                level: 90
            },
            {
                language: 'C, C++',
                level: 75
            }
        ],
        [		
            {
                language: 'VHDL',
                level: 75
            },
            {
                language: 'HTML',
                level: 75
            },
            {
                language: 'JavaScript',
                level: 75
            },
            {
                language: 'CSS',
                level: 50
            }
        ]
	]
</script>

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
</section>

<style>
    /*--------------------------------------------------------------
    # Skills
    --------------------------------------------------------------*/
    .skills .progress {
    height: 60px;
    display: block;
    background: none;
    border-radius: 0;
    }
    .skills .progress .skill {
    padding: 10px 0;
    margin: 0;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #45505b;
    }
    .skills .progress .skill .val {
    float: right;
    font-style: normal;
    }
    .skills .progress-bar-wrap {
    background: #f2f3f5;
    }
    .skills .progress-bar {
    width: 1px;
    height: 10px;
    transition: 0.9s;
    background-color: #0563bb;
    }
</style>