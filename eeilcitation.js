let prevScrollPos = window.scrollY;
let clicked = false;

window.onscroll = function () {
  const currentScrollPos = window.scrollY;
  const header = document.querySelector('.header');

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the header
    if (!clicked) {
      header.classList.remove('hide');
    }
  } else {
    // Scrolling down, hide the header
    header.classList.add('hide');
  }
  prevScrollPos = currentScrollPos;
};

const headerButtons = document.querySelectorAll('.top');

headerButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = button.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollIntoView({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
      clicked = true;
      setTimeout(() => {
        clicked = false;
      }, 200);
    }
  });
});


function copyText(str, tooltip) {
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
    console.log("copied " + str);

    var tooltip = document.getElementById(tooltip);
    tooltip.innerHTML = "Copied";
};

function outFunc(tooltip) {
    var tooltip = document.getElementById(tooltip);
    tooltip.innerHTML = "Copy to clipboard";
}

function quotGenerate(){
  var lname = document.querySelector('[name="quot-lname"]').value;
  var fname = document.querySelector('[name="quot-fname"]').value;
  var name = document.querySelector('[name="quot-name"]').value;
  var title = document.querySelector('[name="quot-title"]').value;
  var url = document.querySelector('[name="quot-url"]').value;
  var pubdate = document.querySelector('[name="quot-pubdate"]').value;
  var city = document.querySelector('[name="quot-city"]').value;
  var vol = document.querySelector('[name="quot-vol"]').value;
  var num = document.querySelector('[name="quot-num"]').value;
  var page = document.querySelector('[name="quot-page"]').value;
  const en = "quot-source-en";
  const fr ="quot-source-fr";
 
  if (url === ""){
    document.getElementById(fr).innerHTML = `${lname.toUpperCase()}, ${fname}. « ${title} », <i>${name} (${city})</i>, vol. ${vol}, n&deg; ${num} (${pubdate}), p. ${page}.`;
    document.getElementById(en).innerHTML = `${lname.toUpperCase()}, ${fname}. "${title}", <i>${name} (${city})</i>, vol. ${vol}, n&deg; ${num} (${pubdate}), p. ${page}.`;
  } else{
    document.getElementById(fr).innerHTML = `${lname.toUpperCase()}, ${fname}. « ${title} », <i>${name} (${city})</i>, vol. ${vol}, n&deg; ${num} (${pubdate}), [Disponible en ligne à l'addresse : ${url}]`;
    document.getElementById(en).innerHTML = `${lname.toUpperCase()}, ${fname}. "${title}" »", <i>${name} (${city})</i>, vol. ${vol}, n&deg; ${num} (${pubdate}), [Available online at the address: ${url}]`;
  }
}

function blogGenerate(){
  var lname = document.querySelector('[name="blog-lname"]').value;
  var fname = document.querySelector('[name="blog-fname"]').value;
  var title = document.querySelector('[name="blog-title"]').value;
  var url = document.querySelector('[name="blog-url"]').value;
  var pubdate = document.querySelector('[name="blog-pubdate"]').value;
  const en = "blog-source-en";
  const fr ="blog-source-fr";
  document.getElementById(fr).innerHTML = `${lname.toUpperCase()}, ${fname}. <i>${title}</i> [en ligne], adresse URL: ${url} (page publiée le ${pubdate}).`;
  document.getElementById(en).innerHTML = `${lname.toUpperCase()}, ${fname}. <i>${title}</i> [online], URL address: ${url} (page published on ${pubdate}).`;
}