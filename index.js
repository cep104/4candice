document.addEventListener("DOMContentLoaded", loadLinks);
const container = document.getElementById('list')

function loadLinks(){
  return fetch('https://api.scraper.ai/api/website/e8e62c80-6ba7-44d4-a1bc-091f8a26685d?api_key=d24901b6dca751ba77128b7f9464e25d&json')
    .then(resp => resp.json())
    .then(data => makeLinks(data.data))
}

function makeLinks(students){
  // console.log(students)
 return students.forEach(student => {
    let stu = document.createElement('li');
    let link = `https://learn.co/${student.login}/admin`;
    stu.innerHTML = `<a href="${link}"> ${student.name} </a>`;
    document.getElementById('list').appendChild(stu);
  })
}