const today = new Date();
const year = document.querySelector("#year");
const short = document.querySelector("#short");
const lastModified = document.lastModified();
year.innerHTML = `©<span class="highlight"> ${today.getFullYear()} Gerard Vigo Rodrigues Trujillo</span>`;
short.innerHTML = `Last Modification:<span class="highlight>${lastModified}</span>`;