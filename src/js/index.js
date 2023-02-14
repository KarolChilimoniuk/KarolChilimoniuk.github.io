import "../scss/main.scss";
import githubIcon from "../assets/icons/github.svg";
import compIcon from "../assets/icons/comp.svg";

("use strict");

class App {
  constructor() {
    this.reposSection = document.querySelector(".section-recentProjects--js");
  }

  startApp() {
    fetch("https://api.github.com/users/karolchilimoniuk/repos?sort=updated")
      .then((resp) => resp.json())
      .then((resp) => {
        const repos = resp;
        for (let repo of repos) {
          const { name, description, html_url, homepage } = repo;
          if (
            description &&
            repo.private === false &&
            repo.name !== "wtf-crew" &&
            repo.name !== "KarolChilimoniuk" &&
            repo.name !== "weather-app-with-bcknd" &&
            repo.name !== "KarolChilimoniuk.github.io"
          ) {
            this.reposSection.innerHTML += `<section class="recentProjects__description">
            <h4 class="recentProjects__description-title">${name}</h4>
            <p class="recentProjects__description-paragraph">${description}</p>
            <div class = "recentProjects__demo">
              <p class = "recentProjects__demo-paragraph" >
              <p class = "recentProjects__demo-paragraph" >
              ${
                homepage &&
                `<a href="${homepage}" class="recentProjects__demoLink" target="_blank" title="Project's demo.">
                <img class="recentProjects__demo-img" src="${compIcon}" alt="computer.">
                 <span class="recentProjects__demo-span">Demo</span>
              </a>`
              }
              <a href="${html_url}" class="recentProjects__codeLink" target="_blank" title="Project's git.">
                <img class="recentProjects__demo-img" src="${githubIcon}"   alt="GitHub repo">
                <span class="recentProjects__demo-span">Github</span>
              </a>
            </p>
            </div>
          </section>`;
          }
        }
      });
    console.log(
      "Hello! My name is Charlie. I am aspiring front-end developer and I am still looking for new opportunities to cooperation. Don't hesitate to ask me 😉"
    );
  }
}

const app = new App();
app.startApp();
