import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArtifactComponent } from './artifact/artifact.component';
import { Artifacts } from './artifacts';

@Injectable({
  providedIn: 'root'
})
export class ArtifactService {
  protected artifacts: Artifacts[] =[
    { 
      id: 0,
      name: "Eagle Wood Floors",
      content: 'assets/img/EagleWood_sm.gif',
      description: `<p>
      The website for <strong>Eagle Wood Floors</strong> was an interesting project as it was the first website I had ever been hired to reverse engineer.
      The owner had hired a web designer to build a website for his business. The end result was quite beautiful. Unfortunately, due to a missunderstanding
      the hosted files were erased, and the original designer did not keep a backup of his work. A good deal of effort was placed in attempting to restore
      the lost files, but as the designer used WordPress which stores the code externally, recovery was impossible.
  </p>
  <p>
      I was able to get an idea of what the site had looked like by using the way back machine
      (<a href='https://archive.org/web/' target="_blank">https://archive.org/web/</a>). This not only did this give me an idea of the original page, but I was able to extract the site's framework, including some of the HTML and the CSS.
      Of course this required quite a bit of reworking as the 'snapshot' was not of the completed state, but as it looked during development.
      I had to remove a lot of the generated code, rework the scripts and styles, and there were some aspects of the splash page I incorporated into the final product.
      The greatest amount of work went into making sure the styles were perfect, functional, and responsive. Once the front page was finished,
      it was only a matter of cloning out that template and reusing it to build out the remaining six pages.
  </p>
  <p>
      The owner was very satisfied with the end result, and relieved that his business's page was functional again.
      I believe everyone learned the importance of keeping a backup.
  </p>`,
      type: "website",
      alignLeft: true, 
      isVideo: false },
    { 
      id: 1,
      name: "EL-ectronics.com",
      content: 'assets/img/ELectronics_sm.gif',
      type: "website",
      description: `<p>
      <strong>EL-ectronics.com</strong> was the website I created for my technology services business, EL-ectronics.
      The main purpose of this site was to advertise the services I offered.
  </p>
  <p>
      EL-ectronics was a do-all electronics business I started in 2014, which is the reimagining of a small craigslist-based business I started back in 2005.
      Along with a new site and new ideals, EL-ectronics greatly broadened my scope by offering a much wider variety of electronics related service,
      beyond computer repair. In addition to fixing desktops, laptops, tablets, phones, and televisions, I also offered installation and configuration
      of software for personal and professional use, as well as data backup and recovery, home installations of home theater systems, wireless networks,
      home security, and more. I also offered web site development for businesses and individuals, and tutoring services for IT and math related fields.
  </p>
  <p>
      That is the view from the outside. From a more personal perspective, EL-ectronics is my baby.
      I’ve done everything to build this company from the ground up. I've managed the finances, thanks to the accounting classes I’ve taken.
      I managed the database, thanks to the database classes I’ve taken. I manage the hiring and firing and general managerial duties,
      thanks to the business management classes I’ve taken. I developed and host the business website, thanks to a variety of other classes I’ve taken.
      My goal was to do this on my own, to see how much I have learned, and apply that knowledge, and I have to admit,
      I am not unimpressed with my growth as a computer technician, as a businessman, and as a human being in general.
  </p>`, 
      alignLeft: false, 
      isVideo: false 
    },
    { 
      id: 2,
      name: "Mr.Bubbles Car Wash",
      content: 'assets/img/mrBubbles_sm.gif',
      description: `<p>
    <strong>Mr. Bubbles Car Wash</strong> is a company I did a wide variety of work for in 2016, including maintaining their website.
    I took over for the origional designer, initially making small changes such as updating the seasonal promotions; however,
    this has progressed into adding an online market where users can purchase car wash vouchers at a discount,
    implementing CAPTCHAs to forms to prevent bots from creating fake accounts, redeploying and reconfiguring SQL databasesas,
    well as identifying and patching potential vulnerabilities left by the outdated PHP code.
</p>`,
      type: "website",
      alignLeft: true, 
      isVideo: false },
    { 
      id: 3,
      name: "Application Performance Monitor",
      content: 'assets/img/perfmon-old_sm.gif',
      type: "website",
      description: `<p>
      Amung the first projects I was tasked with in my role as Performance and Automation Engineer within the
      Southern New Hamsphire University Quality Assurance team was to develop or identify an automated testing method
      in which we could validate the status of over 150 applications hosted on our network, after a systems upgrade
      such as replacing a router, switch, or firewall.
      Prior to this point, some 80+ employees were called in as early as 2a.m. to manually test their assigned application(s),
      which often took IT as a collective up to and occasionally exceeding 6 hours on a Saturday or Sunday morning.
  </p>
  <p>
      My first steps in completing this task involved writing web performance tests using Visual Studio 2015 Enterprise.
      Each application required one or more tests, but when came the time for testing I could simply click run once, wait a few minutes,
      and validate the results of more than half of the required applications. After only one trial run we were able to half the required
      on-hand staff support for these overnight assignments. They were mostly salary so I don't believe they were too put-out about it.
  </p>
  <p>
      The next step came a bit later, when I encountered a mostly-unused ASP.NET webpage developed by one of our CA teams specifically for monitoring our CRM platform.
      What caught my attention is that they had been gathering responce time data from CRM using web performance tests.
      It occurred to me I should be able to improve on that system in order to have it meet our needs for around the clock performance monitoring.
      This involved setting the web performance tests on a schedule to run every 15 minutes and log the results into a SQL load test repository.
      The tests were customized in a way that allowed me to execute them remotely from our three primary locations, so we can ensure both staff
      and students had appropriate access at any given time of day. Using the framework set in place by our Customer Analytics team,
      with some slight adjustments to the SQL, I was able to repurpose the page to not only display responce times but also send me email notifications
      of any outages or unusually high response times. Other functionality I introduced was a 'View All' page, which displayed smaller charts for every
      application under monitoring, for easier viewing during scheduled regression testing.
  </p>
  <p>
      The first real issues we encountered with the framework was that the pages taking longer to load every day. At the height of the problem,
      the 'View All' page took upwards of 3 minutes to load! After a small amount of digging it became clear the issue was that the SQL
      put in place by the CA team was querying the <em>entire</em> database with every page load, unessisarily.
      By encorporating the desired date into the query I was able to reduce the load time to under 10 seconds,
      and that was mostly attributed to the time it takes for the JavaScript to render the data into charts,
      using the <a href="https://www.zingchart.com/" target="_blank">ZingChart</a> library.
  </p>`, 
      alignLeft: false, 
      isVideo: false 
    },
    { 
      id: 4,
      name: "MVC Performance Monitor (2018)",
      content: 'assets/img/perfmon-new_sm.gif',
      description: `<p>
      There were certain inherent limitations with the framework CA developed, which is why I eventually rewrote it using C#.NET and MVC. Specifically,
      there was an unessisary login page that did not take credentials, moving between views/charts did not effect the URL,
      so users could not bookmark their applications, and the whole thing seemed rather clunky and unresponsive. Eventually this lead to me
      rebuilding the site from the ground up using the MVC framework I had recently been introduced to by SNHU's Development team.
  </p>
  <p>
      Among the newly added features included Windows Authentication, as it was an Intranet site, users could automatically be authenticated.
      Once this functionality was in place I was able to include a self-registration so that users could sign up for email alerts.
      The lists of users and coorisponding alert subscriptions were stored and accessed in a SQL DataBase located on site.
  </p>
  <p>
      The list of tests along the left navagation window were also automatically populated from the Load Test Repository DataBase which kept
      maintenance as simple as adding a new web performance test to the drop folder in Visual Studio.
  </p>`,
      type: "website",
      alignLeft: true, 
      isVideo: false 
    },
    { 
      id: 6,
      name: "Current ePortfolio",
      content: 'assets/img/old-ePortfolio_sm.gif',
      description: `
      <p>
      <strong>This ePortfolio</strong> website is, of course, an example of my work. This page is written in Angular version 16 SPA. The code is <a href="https://github.com/Newlance/ePortfolioV3">published in GitHub</a> and I utilize GitHub Actions as a pipeline for automatic deployment to Azure.
     </p>
     <p>
      SPA with Angular was intimidating at first, as it relies heavily on an architecture I was largely unfamiliar with,
      but it has quickly grown to be one of my favorite frameworks for website design.
  </p>`,
      type: "website",
      alignLeft: false, 
      isVideo: false 
    },    
    { 
      id: 5,
      name: "ePortfolio gen2 (2018)",
      content: 'assets/img/ePortfolio2018_sm.gif',
      type: "website",
      description: `<p>
      I created <strong>my previous ePortfolio</strong> website back in 2018 while working at Southern New Hampshire University.  I had recently been exposed to C#.NET MVC for the first time and decided to leverage the framework to create a more professional looking portfolio of my work. This site is still maintained as I am in the process of rewriting it in Angular SPA. The code is <a href="https://github.com/Newlance/ePortfolioV2">published in GitHub</a> and I utilize GitHub Actions as a pipeline for automatic deployment to Azure.
  </p>
  <p>
      I found MVC a little intimidating at first, as it relies heavily on an architecture I was largely unfamiliar with,
      but it has quickly grown to be one of my favorite frameworks for rapid prototyping and overal website
      development due to its agile and robust functionality and ease of passing data between controller and view.
  </p>`, 
      alignLeft: true, 
      isVideo: false 
    },
    { 
      id: 6,
      name: "My First ePortfolio",
      content: 'assets/img/old-ePortfolio_sm.gif',
      description: `<p>
      As an additional example, I've maintained my previous ePortfolio this ePortfolio is replaced.
      The <strong>previous ePortfolio</strong> which I created in 2014 using PHP, can be accessed by visiting:
      <a href='https://Newlance.github.io/' target='_blank'>https://newlance.github.io/</a>
      or by clicking the image to the right.  The code is publicly available by visiting the GitHub repo <a href="https://github.com/Newlance/Newlance.github.io" target="_blank">here</a>
  </p>
  <p>
      I believe the contrast in these sites does an excellent job demonstrating my progress as a web developer.
      While my latest ePortfolio takes a more traditional approach at web development enhanced by a strong backend framework,
      I also believe my previous ePortfolio does well in demonstrating a more creative approach which utilizes JQUERY to create
      an engaging and unique user experience.
  </p>`,
      type: "website",
      alignLeft: false, 
      isVideo: false 
    },
    { 
      id: 7,
      name: "Shrink Doctor",
      content: "lW8H7YV1__w",
      type: "game",
      description: `<h4>Synopsis:</h4>
      <p>
          Shrink Doctor is an innovative and immersive video game that takes players on a captivating journey inside the human body.
          In this action-packed adventure, players step into the shoes of a brilliant doctor who has developed cutting-edge technology
          to shrink themselves down and venture into a patient's body to combat a host of menacing viruses and other ailments.
          As the lead functionality developer responsible for game engine mechanics, I had the privilege of contributing to the creation
          of this unique and exciting gaming experience.
      </p>
      <h4>Game Features:</h4>
      <ul>
          <li>
              <strong>Microscopic World Exploration: </strong>Shrink Doctor offers players the opportunity to explore the intricacies of the human body from a microscopic perspective. The game is designed with a focus on accuracy and attention to detail, allowing players to navigate through the circulatory system, digestive tract, and other vital organs.
          </li>
          <li>
              <strong>Epic Battles: </strong>Players must confront a variety of threats within the patient's body, including vicious viruses, harmful bacteria, and other nefarious microbes. Engaging in epic battles against these pathogens requires skill, strategy, and quick reflexes.
          </li>
          <li>
              <strong>Advanced Medical Tools: </strong>To succeed in their mission, players are equipped with a diverse arsenal of high-tech medical tools, including lasers, nanobots, and more. These tools can be upgraded and customized to adapt to the specific challenges presented by each patient's unique condition.
          </li>
          <li>
              <strong>Challenging Puzzles: </strong>Shrink Doctor incorporates a mix of action and puzzle-solving elements, encouraging players to analyze the patient's health condition, diagnose problems, and strategize on the most effective approach to treatment.
          </li>
          <li>
              <strong>Stunning Visuals: </strong>The game's graphics are designed to immerse players in a visually captivating and vibrant representation of the human body, ensuring an engaging and educational gaming experience.
          </li>
      </ul>
      <h4>Our Experiences:</h4>
      <p>
          The development of Shrink Doctor was an exciting and rewarding journey for our team of six dedicated developers. As the lead functionality developer in charge of game engine mechanics, I had the opportunity to contribute to the core foundation of the game, ensuring that the gameplay mechanics were smooth, responsive, and enjoyable.
      </p>
      <p>
          Our collaboration was characterized by a shared passion for creating a unique and educational gaming experience. We combined our expertise in game design, programming, and art to bring the concept to life. The project demanded creative problem-solving, meticulous attention to detail, and a commitment to delivering a polished final product.
      </p>
      <p>
          Throughout the development process, we encountered various challenges and setbacks, but our shared determination and the support of our team members kept us motivated. We conducted extensive research on human anatomy to ensure the game's accuracy, making it not only entertaining but also informative.
      </p>
      <p>
          Shrink Doctor is a testament to our teamwork, creativity, and dedication to creating a memorable gaming experience. It was a remarkable journey, and we are all immensely proud of the work we accomplished. The positive feedback from playtesters and the sense of accomplishment in delivering a game that is both fun and educational were truly rewarding.
      </p>
      <p>
          In summary, Shrink Doctor is more than just a video game; it's an embodiment of our team's passion and dedication to pushing the boundaries of video game design. I'm excited to include this project in my ePortfolio, as it showcases not only my technical skills but also our team's ability to bring a unique and engaging concept to life.
      </p>`, 
      alignLeft: true, 
      isVideo: true 
    },
    { 
      id: 8,
      name: "Monkey Banana Defense 3D",
      content: 'tYEuXDVlFZY',
      type: "game",
      description: `<h4>Synopsis: </h4>
      <p>
          Monkey Banana Defense 3D is a whimsical and action-packed video game I developed in Unreal Engine 4 as the final project for a game design class. It introduces players to a comical feud between a monkey and a man sporting a big yellow hat, who must engage in a fruity, dodgeball-inspired battle across a gorge. This project was a labor of love, and it brought a unique blend of humor and strategy to the world of 3D gaming.
      </p>
      <h4>Game Features:</h4>
      <ul>
          <li>
              <strong>Playful Duel: </strong>The game centers around a lighthearted feud between a mischievous monkey and a man in a distinctive yellow hat. Both characters are trying to defend their territories by pelting each other with a variety of fruit-based projectiles, including bananas, apples, and watermelons.
          </li>
      
          <li>
              <strong>Gorge Setting: </strong>The battleground is set along a treacherous gorge, which adds an element of strategy to the gameplay. Players must aim their fruit projectiles accurately to hit their opponent on the opposite side while avoiding falling into the gorge themselves.
          </li>
      
          <li>
              <strong>3D Environments: </strong>The game is presented in a colorful and engaging 3D environment that immerses players in a vivid and comical world. The gorge features lush vegetation, winding paths, and challenging obstacles that make the game visually appealing and dynamic.
          </li>
      
          <li>
              <strong>Fruit Power-Ups: </strong>To add an extra layer of strategy, power-ups are scattered throughout the gorge. These power-ups give players the ability to throw fruit faster, with better accuracy, or even unleash special fruit attacks like giant watermelon boulders.
          </li>
      
          <li>
              <strong>Single and Multiplayer Modes: </strong>Monkey Banana Defense 3D offers both single-player and multiplayer modes, allowing players to engage in fruit-flavored combat against AI opponents or challenge their friends in hilarious multiplayer battles.
          </li>
      </ul>
      <h4>Development Experience:</h4>
      <p>
          Creating Monkey Banana Defense 3D was a delightful and educational journey. Ie embarked on this project with a vision to craft an entertaining and humorous game that would stand out in the world of game design.
      </p>
      <p>
          I encountered various challenges along the way, such as optimizing game performance, perfecting character animations, implementing AI, and balancing the gameplay. However, these obstacles only fueled my determination to create an enjoyable and memorable gaming experience.
      </p>
      <p>
          The development of Monkey Banana Defense 3D was marked by laughter, creativity, and a commitment to delivering a polished final project. I conducted playtesting sessions to refine the game's mechanics, and the positive feedback from my peers reinforced my passion for game design.
      </p>
      <p>
          As I completed my game design class, I was immensely proud of Monkey Banana Defense 3D, a game that embodies my dedication and a desire to bring joy to players. It serves as a testament to my creativity and the unique blend of humor and strategy brought to this project. I'm thrilled to be able to share it in my portfolio as a cherished achievement in the world of game development.
      </p>`, 
      alignLeft: false, 
      isVideo: true 
    },
    { 
      id: 9,
      name: "Battle Bots",
      content: 'bNvNlsbBRcc',
      type: "game",
      description: `<h4>Synopsis:</h4>
      <p>
          "Battle Bots" stands as a testament to innovation and ingenuity, born out of the formidable AI, the Cyberantula, originally conceived for a Java class project. Crafted with passion and a desire to push the boundaries of gaming, this creation evolved into an immersive, action-packed gaming experience.
      </p>
      <h4>Game Features:</h4>
      <ul>
          <li>
              <strong>Epic Battles: </strong> Engage in intense showdowns against the formidable Cyberantula, equipped with a range of devastating attacks. Its primary offensive strategy involves deploying heat-seeking mini-cyberantulas that detonate after a set duration, presenting a formidable challenge.
          </li>
          <li>
              <strong>Arsenal of Weapons: </strong>Arm yourself with strategic tools, including a potent bazooka capable of delivering slow yet punishing rocket strikes. The machine gun serves as a vital tool in neutralizing the mini-cyberantulas, while the teleportation gun offers swift navigation across the battlefield.
          </li>
          <li>
              <strong>10 Levels of Chaos: </strong>Progress through increasingly demanding levels, each amplifying the number of adversaries you must conquer. Survival becomes paramount as the challenges intensify, testing your skills and resilience.
          </li>
      </ul>
      <h4>Significance:</h4>
      <p>This game not only embodies technical prowess but also reflects a narrative of determination and creativity. It symbolizes the transition from an academic project to a fully realized gaming experience, offering players an adrenaline-pumping journey against a worthy opponent, the Cyberantula.</p>
      
      <h4>Developer's Vision:</h4>
      <p>The game was conceived as a tribute to the Cyberantula, an AI that never witnessed real combat, reimagined as the ultimate antagonist. It stands as a tribute to resilience and the spirit of transformation, demonstrating how a singular idea can blossom into an immersive and challenging gaming experience.</p>
      
      <h4>Legacy:</h4>
      <p>"Battle Bots" remains an emblem of creativity, an embodiment of perseverance, and a showcase of technical acumen. It serves not only as an entertaining gaming venture but also as a testament to the creative evolution that stems from academic pursuits.</p>
      
      <h4>Closing Notes:</h4>
      <p>The Battle Bots game is a testament to the fusion of academic learning, imaginative flair, and technical expertise. It is a labor of love and dedication, showcasing the endless possibilities when innovation meets determination in the realm of game development.</p>`, 
      alignLeft: true, 
      isVideo: true 
    },
    { 
      id: 10,
      name: "Halo Energy Sword",
      content: 'LSwXAJNFUBw',
      type: "animation",
      description: `<p>
      This intricately crafted 3D model brings to life the iconic Energy Sword from the acclaimed Halo game series. Developed as the crowning piece for GRA-202 3-D Modeling and Animation at Southern New Hampshire University, this project encapsulates precision, creativity, and a profound understanding of digital sculpting and texturing techniques.
  </p>
  <p>
      The model faithfully replicates the nuanced design of the Energy Sword, meticulously emulating its sleek, alien-inspired contours and the pulsating energy core that gives it its formidable power. From the handle's intricate detailing to the blade's ethereal glow, every aspect of this model reflects a mastery of 3D design.
  </p>
  <p>
      Through the application of industry-standard software and advanced rendering techniques, the artifact showcases a high-fidelity representation, emphasizing not only the visual accuracy but also the potential for immersive interaction within virtual environments. Its creation involved a multi-layered process, including conceptualization, precise modeling, UV unwrapping, texture painting, and meticulous rendering to ensure an authentic and captivating final product.
  </p>
  <p>
      This artifact stands as a testament to the technical proficiency and creative vision honed during the course, embodying the fusion of artistic expression with technical skill in the realm of 3D modeling and animation. Its inclusion in the ePortfolio serves as a proud showcase of expertise and a testament to the dedication and talent required to produce professional-grade digital artwork.
  </p>`, 
      alignLeft: true, 
      isVideo: true 
    },
    { 
      id: 11,
      name: "Halo Energy Sword Animation",
      content: 'sEWsxjodWLg',
      type: "animation",
      description: `<p>
      This captivating animation, crafted as the culmination of GRA-202 3-D Modeling and Animation at Southern New Hampshire University, brings dynamic life to the iconic Energy Sword from the Halo game series. The sequence depicts the sword in a decisive, aggressive motion, poised for an attack, embodying the essence of power and precision.
  </p>
  <p>
      The animation seamlessly combines technical expertise with creative vision. Every frame illustrates the meticulous craftsmanship involved in the 3D modeling and animation process, showcasing the sword's fluid movement and the luminous energy blade with remarkable detail.
  </p>
  <p>
      From the initial anticipation to the swift forward thrust, the animation captures the intensity and velocity of the attack, meticulously choreographed to convey both the elegance and ferocity associated with the weapon. The shimmering energy blade extends with a compelling sense of force, emphasizing the lethal potential of the sword.
  </p>
  <p>
      Employing industry-standard animation software and employing keyframe animation techniques, this sequence required a comprehensive understanding of timing, spacing, and weight to convey a sense of realism and impact. The integration of lighting effects and texturing enhances the overall dramatic effect, emphasizing the otherworldly energy emanating from the sword's core.
  </p>
  <p>
      This animation stands as a testament to the fusion of technical skill and creative expression, reflecting the expertise and dedication honed throughout the course. Its inclusion in the ePortfolio showcases not just mastery of animation techniques, but an artistic sensibility that brings a digital creation to life with vivid, kinetic energy.
  </p>`, 
      alignLeft: false, 
      isVideo: true 
    } ,
    { 
      id: 12,
      name: "The Forgotten Backpack",
      content: 'hihVupE-Ido',
      type: "animation",
      description: `<p>
      As part of the collaborative effort within the curriculum of DMT-125 Intro to Animation at Great Bay Community College, this stop motion animation represents a light-hearted and engaging project created by a team of students pursuing an Associates Degree in Computer Technology. Titled "The Forgotten Backpack," the narrative playfully portrays the misadventure of a student who inadvertently leaves behind their backpack in a classroom, leading to a whimsical journey to retrieve their essential belongings.
  </p>
  <p>
      The animation adeptly combines humor with the classic motif of a heroic quest, drawing parallels between the protagonist's pursuit of the forgotten backpack and the archetypal journey frequently observed in video games. The intro and outro scenes cleverly allude to various video game elements, serving as a playful nod to the familiar trope of embarking on an adventure, skillfully weaving these references into the storyline.
  </p>
  <p>
      Crafted using stop motion techniques, this project involved meticulous planning, precise execution, and creative storytelling. The team's collaborative effort is evident in the seamless integration of frames and the imaginative representation of the quest, fostering an engaging and entertaining narrative that resonates with viewers.
  </p>
  <p>
      The animation not only showcases the technical skills and creativity honed during the course but also exemplifies the ability to infuse humor and relatability into the art of storytelling, providing a charming and entertaining depiction of a relatable, everyday mishap.
  </p>`, 
      alignLeft: true, 
      isVideo: true 
    },
    { 
      id: 13,
      name: "Page the Doctor",
      content: 'F7tByyOolP0',
      type: "animation",
      description: `<p>
      "Page The Doctor" stands as the culminating achievement of the DMT-125 Intro to Animation course at Great Bay Community College, serving as a testament to meticulous craftsmanship and creative ingenuity. This animated music video (AMV) is a multifaceted project showcasing original music composition, lyrical creation, and animation, underscoring a comprehensive range of skills and talents.
  </p>
  <p>
      The project encapsulates a labor of dedication and creativity. Through the fusion of original music composition, self-penned lyrics, and animated scenes, the video presents a harmonious blend of storytelling and visual artistry. The attention to detail in character creation and animation techniques vividly brings the world of "Page The Doctor" to life, illustrating a commitment to the mastery of both musical and visual storytelling elements.
  </p>
  <p>
      While crafting this endeavor, emphasis was placed on character development and scene construction, resulting in an animated world rich in depth and personality. The endeavor to synchronize the visuals with the musical narrative showcases a cohesive fusion of art forms, underscoring a harmonious relationship between sound and imagery.
  </p>
  <p>
      In an unforeseen turn, the video's conclusion took an unexpected yet creatively integrated twist. Time constraints led to an improvisation involving a surprise invasion of the Daleks, serving as a conclusion that, while improvised, adds an intriguing and unexpected element to the narrative, showcasing adaptability and creative problem-solving within the constraints of the project.
  </p>
  <p>
      "Page The Doctor" serves as a testament to the artist's ability to blend technical proficiency, storytelling, and creative adaptability, encapsulating the essence of artistic exploration and the amalgamation of music and animation.
  </p>`, 
      alignLeft: false, 
      isVideo: true 
    } 
  ]
    

  constructor() { }

  getAllArtifacts() : Artifacts[]{
    return this.artifacts;
  }
  getAllWebsites() : Artifacts[]{
    return this.artifacts.filter(artifacts => artifacts.type === "website");
  }

  getAllGames() : Artifacts[]{
    return this.artifacts.filter(artifacts => artifacts.type === "game");
  }
  
  getAllAnimations() : Artifacts[]{
    return this.artifacts.filter(artifacts => artifacts.type === "animation");
  }

  getHousingLocationById(id: Number): Artifacts | undefined {
    return this.artifacts.find(artifacts => artifacts.id === id);
  }
}
