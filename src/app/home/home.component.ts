import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  
    <div class="jumbotron rightAlign">

    <img src="/assets/lzw8p787egwqdj.jpg" alt="Evan Lawrence" width="300px"/>
    <h1>Evan Lawrence</h1>
    <h2>Professional</h2>
    <h2>Software Engineer</h2>
    <h2>Entrepreneur</h2>
</div>

<div class="row">
    <div class="col-md-4">
        <h2>Who I am</h2>
        <p>
            Hello, and thank you for visiting my ePortfolio.  My name is Evan Lawrence and I am a professional software engineer.  I got a very early start coding, teaching myself basic HTML, CSS, and JavaScript when I was just 10 years old.  
        </p>
        <p>
        I graduated to C# and Visual Basic as a teenager, and was eventually exposed to Java, C++, and more advanced JavaScript during my time in college. Since then, I have dedicated myself to maintaining and polishing this skillset. I am extremely passionate about what I do, and I love opportunities to learn something new.
        </p>
        <p>
            <a class="btn btn-default btn-hover" href="resume">View Resume &raquo;</a>
            <a class="btn btn-default btn-hover" href="contact">View Contact Info &raquo;</a>            

        </p>
    </div>
    <div class="col-md-4">
        <h2>What I do</h2>
        <p>
            In the time I was not developing test frameworks, full stack monitoring services, or backend APIs for companies such as Liberty Mutual Insurance and Southern New Hampshire University, I was employing my skills as an entrepreneur and freelancer.
            </p>
            <p>
            I have applications and websites for several companies including Eagle Wood Flooring and Mr. Bubble’s Carwash. I have developed video games, as well as useful tools for investors. Where there’s a problem to solve, I’ll be first in line to find a unique solution.
        </p>
        <p>
            <a class="btn btn-default btn-hover" href="websites">View Websites &raquo;</a>
            <a class="btn btn-default btn-hover" href="https://github.com/Newlance" target="_blank">View Github &raquo;</a>
        </p>
    </div>
    <div class="col-md-4">
        <h2>Academic</h2>
        <p>
            I returned to school in 2012, graduated Cum Laude and top of my class with an Associates of Science in Computer Technologies
            from Great Bay Community College in Portsmouth, New Hampshire in May of 2015. From there I transferred to Southern New Hampshire University,
            where I was also working at the time. I graduated SNHU Summa Cum Laud with my Bachelor's degree in April of 2019.
        </p>
        <p>
            <a class="btn btn-default btn-hover" href="games">View Games &raquo;</a>            
            <a class="btn btn-default btn-hover" href="animation">View Animation &raquo;</a>
        </p>
    </div>
</div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
