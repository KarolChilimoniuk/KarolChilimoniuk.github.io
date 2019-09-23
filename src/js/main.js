"use strict";

const projectsSection = document.querySelector('.section-recentProjects');

fetch('https://api.github.com/users/karolchilimoniuk/repos?sort=updated')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (let repo of repos) {
      const {
        name,
        description,
        html_url,
        homepage
      } = repo;
      projectsSection.innerHTML +=
        `<section class="recentProjects__description">
          <img class="recentProjects__description-img" src="assets/svg/github.svg" alt="github">
          <h4 class="recentProjects__description-title">${name}</h4>
          ${
            (description == null) ? `<p class="recentProjects__description-paragraph">${'empty 😢'}</p>`:`<p class="recentProjects__description-paragraph">${description}</p>`
          }
          <div class = "recentProjects__demo">
            <p class = "recentProjects__demo-paragraph" >
              <a href="${homepage}" class="recentProjects__demoLink" target="_blank">
                <img class="recentProjects__demo-img" src="assets/svg/comp.svg"   alt="computer">
                 Demo
              </a>
              <a href="${html_url}" class="recentProjects__codeLink" target="_blank">
                <img class="recentProjects__demo-img" src="assets/svg/code.svg"   alt="code">
                 Github
              </a>
            </p>
          </div>
        </section>`
    }
  });


console.log("Hello! My name is Charlie. I am aspiring front-end developer and I am still looking for new opportunities to cooperation. Don't hesitate to ask me 😉");