/* Mobile menu section */

function showMobileMenu() {
  document.querySelector('.mobile-menu').classList.add('mobile-menu-active');
  document.querySelector('body').style.overflow = 'hidden';
}

function backToNormal() {
  document.querySelector('.mobile-menu').classList.remove('mobile-menu-active');
  document.querySelector('body').style.overflow = 'visible';
}

const mobileMenu = document.querySelector('.union');
const closingCross = document.querySelector('.cross-button');
const mobileMenuListItems = document.querySelectorAll('.mobile-menu-listItems');

mobileMenu.addEventListener('click', showMobileMenu);

closingCross.addEventListener('click', backToNormal);

mobileMenuListItems.forEach((item) => {
  item.addEventListener('click', backToNormal);
});

/* Project pop up section */

const projects = [
  {
    projectName: 'Campus Hour',
    projectDescription: `It is a simple project that can be used both in mobile and desktop version. 
    It demonstrates a website ideal for a university festival.`,
    projectImage: ['images/Campus_hour_project_mobile.jpg', 'images/Campus_hour_project.jpg'],
    projectTechnologies: ['html', 'CSS', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    linkToLive: 'https://prangonghose.github.io/Capstone-Project---University-Campus-Hour/',
    linkToSource: 'https://github.com/PrangonGhose/Capstone-Project---University-Campus-Hour',
  },

  {
    projectName: 'Awesome Books Website',
    projectDescription: `This is a simple website where anyone can store their favourite books along with author's name. The created list will not be removed until removed
    by the user because of using LocalStorage.`,
    projectImage: ['images/awesome_books_mobile.jpg', 'images/awesome_books_desktop.jpg'],
    projectTechnologies: ['html', 'CSS', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    linkToLive: 'https://prangonghose.github.io/Awesome-Books-ES6/#form',
    linkToSource: 'https://github.com/PrangonGhose/Awesome-Books-ES6',
  },

  {
    projectName: 'To Do List',
    projectDescription: `This is a simple website where the user can list and manage daily tasks. User can add, remove, and mark as completed the tasks. Reloading
    page will keep the task in the app because LocalStorage has been used. All completed tasks can be deleted at once.`,
    projectImage: ['images/to_do_list_mobile.jpg', 'images/to_do_list_desktop.jpg'],
    projectTechnologies: ['html', 'CSS', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    linkToLive: 'https://prangonghose.github.io/To-do-list/dist/',
    linkToSource: 'https://github.com/PrangonGhose/To-do-list',
  },

  {
    projectName: 'Multi-Post Stories',
    projectDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae
    tempore temporibus
    quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A
    assumenda
    explicabo
    perspiciatis soluta tempora facilis suscipit culpa quo, alias nesciunt omnis similique quisquam
    fuga
    consectetur
    error laboriosam! Quis, quos repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae
    tempore temporibus
    quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A
    assumenda
    explicabo.`,
    projectImage: ['images/Tonic1.svg', 'images/Snapshoot Portfoliodesktop.png'],
    projectTechnologies: ['html', 'CSS', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    linkToLive: 'https://prangonghose.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/PrangonGhose/My-Portfolio.git',
  },
];

const body = document.querySelector('body');
const seeProject = document.querySelectorAll('.see-more');

function bodyNormal() {
  body.style.overflow = 'visible';
}

seeProject.forEach((button) => {
  button.addEventListener('click', () => {
    const section = document.createElement('section');
    section.innerHTML = `
    <div class="pop-up-container">
      <div class="pop-up-head">
        <div>
          <h1 class="project-body pop-up-title">${projects[button.id].projectName}</h1>
        </div>
        <div class="disabled-button">
          <img src="images/Disableddesktop-cross.png" alt="disabled-button" class="disabled-button-image">
        </div>
      </div>
      <div class="canopy-segment pop-up-canopy">
        <h2 class="canopy">CANOPY</h2>
        <ul class="canopy-items">
          <li><img src="images/Counter.svg" alt=""></li>
          <li class="item">Back End Dev</li>
          <li><img src="images/Counter.svg" alt=""></li>
          <li class="item">2022</li>
        </ul>
      </div>
      <div class="pop-up-image">
        <div class="mobile-project-image image-container">
          <img src="${projects[button.id].projectImage[0]}" alt="project image">
        </div>
        <div class="desktop-project-image image-container">
          <img src="${projects[button.id].projectImage[1]}" alt="project image">
        </div>
      </div>
      <div class="pop-up-text">
        <div class="pop-up-para">
          <p class="project-description">
            ${projects[button.id].projectDescription}
          </p>
        </div>
        <div class="pop-up-list-buttons">
          <div class="pop-up-list">
            <ul class="coding-languages pop-up-languages">
            </ul>
          </div>
          <div class="pop-up-buttons">
            <button class="see-project pop-up-buttonItem1"><a href="${projects[button.id].linkToLive}" target="_blank" style="text-decoration: none">See live<img src="images/Icon - Exportlive.svg" alt="live link"></a></button>
            <button class="see-project pop-up-buttonItem2"><a href="${projects[button.id].linkToSource}" target="_blank" style="text-decoration: none">See Source<img src="images/Framesource.png" alt="live source"></a></button>
          </div>
        </div>
      </div>
    </div>`;
    section.classList.add('pop-up');
    body.appendChild(section);
    const technologyList = document.querySelector('.pop-up-languages');
    for (let i = 0; i < projects[button.id].projectTechnologies.length; i += 1) {
      const technologyItem = document.createElement('li');
      technologyItem.classList.add('item-languages');
      technologyItem.innerText = projects[button.id].projectTechnologies[i];
      technologyList.appendChild(technologyItem);
    }
    body.style.overflow = 'hidden';
    const crossButton = document.querySelector('.disabled-button-image');
    crossButton.addEventListener('click', () => {
      body.removeChild(section);
      bodyNormal();
    });
  });
});

/* Form validation */

const form = document.querySelector('.get-in-touch');
const email = document.querySelector('.email');
const submit = document.querySelector('.submit-message');

function validation() {
  const temp = email.value.toLowerCase();
  let valid = true;
  for (let i = 0; i < temp.length; i += 1) {
    if (temp[i] !== email.value[i]) {
      valid = false;
      break;
    }
  }
  return valid;
}

form.addEventListener('submit', (event) => {
  const valid = validation();
  if (valid) {
    submit.classList.add('valid');
  } else {
    event.preventDefault();
    submit.innerText = 'Insert valid email with only lowercase letters';
    submit.classList.add('invalid');
  }
});

/* Using local storage */

let storedData = {
  name: '',
  email: '',
  text: '',
};

const nameValue = document.querySelector('.name');
const emailValue = document.querySelector('.email');
const textValue = document.querySelector('.text-input');

function dataStore() {
  localStorage.setItem('name', JSON.stringify(storedData));
}

form.addEventListener('change', () => {
  storedData.name = nameValue.value;
  storedData.email = emailValue.value;
  storedData.text = textValue.value;
  dataStore();
});

if (JSON.parse(localStorage.getItem('name')) !== null) {
  storedData = JSON.parse(localStorage.getItem('name'));
  nameValue.setAttribute('value', storedData.name);
  emailValue.setAttribute('value', storedData.email);
  textValue.value = storedData.text;
}
