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
  tooltip.innerHTML = "Copy";
}

function authorsFormatter(lname, fname, lname2, fname2, authors3, alert) {
  var alertMessageMissingFirstAuthorInfo = "Error: Missing information for the author.";
  var alertMessageMissingSecondAuthorInfo = "Error: Missing information for the second author.";

  if (!lname && !fname && !lname2 && !fname2 && !authors3) { // no author
    return ["S.A.,", "S.A.,"];
  }
  if (lname && fname && !lname2 && !fname2 && !authors3) { // one author
    const author = `${lname.toUpperCase()}, ${fname}.`;
    return [author, author];
  } else if ((lname && !fname) || (!lname && fname)) {
    console.error(alertMessageMissingFirstAuthorInfo);
    alert.innerHTML = alertMessageMissingFirstAuthorInfo;
    return;
  }
  if (lname && fname && lname2 && fname2 && !authors3) { // two authors
    const [primary, secondary] = lname.localeCompare(lname2) <= 0
      ? [`${lname.toUpperCase()}, ${fname}`, `${fname2} ${lname2.toUpperCase()}`]
      : [`${lname2.toUpperCase()}, ${fname2}`, `${fname} ${lname.toUpperCase()}`];
    return [`${primary} et ${secondary}.`, `${primary} and ${secondary}.`];
  } else if (lname && fname && (!lname2 || !fname2) && !authors3) {
    console.error(alertMessageMissingSecondAuthorInfo)
    alert.innerHTML = alertMessageMissingSecondAuthorInfo;
    return;
  }
  if (lname && fname && authors3) { //three authors
    const primaryAuthor = `${lname.toUpperCase()}, ${fname}`;
    return [`${primaryAuthor} <i>et al.</i>`, `${primaryAuthor} <i>et al.</i>`];
  }
}

function dateFormatter(inputDateString, alert) {
  var alertMessageInvalidDate = "Error: Invalid date.";
  const inputDate = new Date(inputDateString);
  const currentDate = new Date();
  if (inputDate > currentDate) {
    console.error(alertMessageInvalidDate);
    alert.innerHTML = alertMessageInvalidDate;
    return;
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDateFr = new Intl.DateTimeFormat('fr-FR', options).format(inputDate);
  const formattedDateEn = new Intl.DateTimeFormat('en-US', options).format(inputDate);
  return [formattedDateFr, formattedDateEn];


}

function websiteGenerate() {
  var lname = document.querySelector('[name="web-lname"]').value.trim();
  var fname = document.querySelector('[name="web-fname"]').value.trim();
  var lname2 = document.querySelector('[name="web-lname2"]').value.trim();
  var fname2 = document.querySelector('[name="web-fname2"]').value.trim();
  var title = document.querySelector('[name="web-title"]').value.trim();
  var url = document.querySelector('[name="web-url"]').value.trim();
  var oname = document.querySelector('[name="web-oname"]').value.trim();
  var refdate = document.querySelector('[name="web-refdate"]').value;
  var authors3 = document.querySelector('[name="web-3authors"]').checked;

  const fr = document.getElementById("web-source-fr");
  const en = document.getElementById("web-source-en");
  const sourcesDiv = document.getElementById("web-sources");
  const alert = document.getElementById("web-alert");

  if (!title || !url || !refdate) {
    alert.classList.remove("invisible");
    sourcesDiv.classList.add("invisible");
    return;
  }

  var authors = authorsFormatter(lname, fname, lname2, fname2, authors3, alert);
  var dates = dateFormatter(refdate, alert);

  if (authors === undefined || dates === undefined) {
    alert.classList.remove("invisible");
    sourcesDiv.classList.add("invisible");
    return;
  }

  var authorSrcFr = authors[0];
  var authorSrcEn = authors[1];
  var dateFr = dates[0];
  var dateEn = dates[1];

  alert.classList.add("invisible");
  sourcesDiv.classList.remove("invisible");

  oname = oname ? `${oname},` : "";

  fr.innerHTML = `${authorSrcFr} ${oname} (réf. du ${dateFr}), <i>${title} [en ligne]</i>, adresse URL: ${url}`;
  en.innerHTML = `${authorSrcEn} ${oname} (ref. of ${dateEn}), <i>${title} [online]</i>, URL address: ${url}`;
}

function quotGenerate() {
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
  const fr = "quot-source-fr";
  const sourcesDiv = "quot-sources";
  const alert = "quot-alert";

  if (title === "" || name === "") {
    console.log("please provide necessary information");
    document.getElementById(alert).classList.remove("invisible");
    document.getElementById(sourcesDiv).classList.add("invisible");
    return;
  }

  if (url === "") {
    document.getElementById(fr).innerHTML = `${lname.toUpperCase()}, ${fname}. « ${title} », <i>${name} (${city})</i>, vol. ${vol}, n&deg; ${num} (${pubdate}), p. ${page}.`;
    document.getElementById(en).innerHTML = `${lname.toUpperCase()}, ${fname}. "${title}", <i>${name} (${city})</i>, vol. ${vol}, n&deg; ${num} (${pubdate}), p. ${page}.`;
  } else {
    document.getElementById(fr).innerHTML = `${lname.toUpperCase()}, ${fname}. « ${title} », <i>${name} (${city})</i>, vol. ${vol}, n&deg; ${num} (${pubdate}), [Disponible en ligne à l'addresse : ${url}]`;
    document.getElementById(en).innerHTML = `${lname.toUpperCase()}, ${fname}. "${title}" »", <i>${name} (${city})</i>, vol. ${vol}, n&deg; ${num} (${pubdate}), [Available online at the address: ${url}]`;
  }
}

function blogGenerate() {
  var lname = document.querySelector('[name="blog-lname"]').value;
  var fname = document.querySelector('[name="blog-fname"]').value;
  var title = document.querySelector('[name="blog-title"]').value;
  var url = document.querySelector('[name="blog-url"]').value;
  var pubdate = document.querySelector('[name="blog-pubdate"]').value;
  const en = "blog-source-en";
  const fr = "blog-source-fr";
  document.getElementById(fr).innerHTML = `${lname.toUpperCase()}, ${fname}. <i>${title}</i> [en ligne], adresse URL: ${url} (page publiée le ${pubdate}).`;
  document.getElementById(en).innerHTML = `${lname.toUpperCase()}, ${fname}. <i>${title}</i> [online], URL address: ${url} (page published on ${pubdate}).`;
}