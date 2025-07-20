import { monthName } from "./enums";

export function updateUi(state) {
  setName(state);
  setLanguages(state);
  setExperience(state);
  setInterests(state);
  setContact(state);
}

function setName(state) {
  document.querySelector(
    "#bento-flexbox .name-box .greeting-phrase",
  ).textContent = state.nameBox.greetingPhrase;

  document.querySelector(
    "#bento-flexbox .name-box .your-info .name",
  ).textContent = state.nameBox.name;
  document.querySelector(
    "#bento-flexbox .name-box .your-info .role",
  ).textContent = state.nameBox.role;
}

function setLanguages(state) {
  const nameLenguageListDom = document.querySelector(
    "#bento-flexbox .lenguages-box .list-lenguages .name-lenguage",
  );
  nameLenguageListDom.replaceChildren();
  state.languagesBox
    .map(({ name }) => {
      const nameHtml = document.createElement("span");
      nameHtml.textContent = name;
      return nameHtml;
    })
    .map((it) => {
      const listItem = document.createElement("li");
      listItem.appendChild(it);
      return listItem;
    })
    .forEach((listItem) => {
      nameLenguageListDom.appendChild(listItem);
    });

  const levelLenguageListDom = document.querySelector(
    "#bento-flexbox .lenguages-box .list-lenguages .level-lenguage",
  );
  levelLenguageListDom.replaceChildren();
  state.languagesBox
    .map(({ level }) => {
      const progressBarHtml = document.createElement("div");
      progressBarHtml.style.width = `${(168 / 6) * level}px`;
      return progressBarHtml;
    })
    .map((it) => {
      const listItem = document.createElement("li");
      listItem.appendChild(it);
      return listItem;
    })
    .forEach((listItem) => {
      levelLenguageListDom.appendChild(listItem);
    });
}

function formatJobExperienceDates(dates) {
  const start = document.createElement("time");
  if (dates.start.month !== undefined) {
    start.textContent = `${monthName(dates.start.month)}. ${dates.start.year}`;
  } else {
    start.textContent = dates.start.year.toString();
  }
  const end = document.createElement("time");
  if (dates.end !== undefined) {
    if (dates.end.month !== undefined) {
      end.textContent = `${monthName(dates.end.month)}. ${dates.end.year}`;
    } else {
      end.textContent = dates.end.year.toString();
    }
  } else {
    end.textContent = "Present";
  }
  const period = document.createElement("span");
  period.append(start, "–", end);
  return period;
}

function setExperience(state) {
  const jobListDom = document.querySelector(
    "#bento-flexbox .experience-box .job-list",
  );
  jobListDom.replaceChildren();
  state.experienceBox
    .map((job, i) => {
      const dateHtml = formatJobExperienceDates(job.dates);
      dateHtml.className = "date";

      const topBarHtml = document.createElement("div");
      topBarHtml.className = "top-bar";
      topBarHtml.appendChild(dateHtml);
      if (i === 0) {
        const mostRecentHtml = document.createElement("span");
        mostRecentHtml.textContent = "most recent";
        const tagHtml = document.createElement("div");
        tagHtml.className = "tag";
        tagHtml.appendChild(mostRecentHtml);
        topBarHtml.appendChild(tagHtml);
      }

      const roleNameHtml = document.createElement("h3");
      roleNameHtml.className = "role-name";
      roleNameHtml.textContent = job.role;

      const infoHtml = document.createElement("span");
      infoHtml.className = "info";
      infoHtml.textContent = job.info;

      const aboutJobHtml = document.createElement("div");
      aboutJobHtml.className = "about-job";
      if (job.companyName !== undefined) {
        const companyNameHtml = document.createElement("span");
        companyNameHtml.className = "company-name";
        companyNameHtml.textContent = job.companyName;
        aboutJobHtml.appendChild(companyNameHtml);
        const divider = document.createElement("span");
        divider.className = "divider";
        divider.textContent = "|";
        aboutJobHtml.appendChild(companyNameHtml);
        aboutJobHtml.appendChild(divider);
      }
      aboutJobHtml.appendChild(infoHtml);

      const jobInfoHtml = document.createElement("div");
      jobInfoHtml.className = "job-info";
      jobInfoHtml.appendChild(roleNameHtml);
      jobInfoHtml.appendChild(aboutJobHtml);

      const featuredPointsHtml = document.createElement("ul");
      featuredPointsHtml.className = "featured-points";
      job.featuredPoints
        .map((text) => {
          const paragraphHtml = document.createElement("p");
          paragraphHtml.className = "point";
          paragraphHtml.textContent = text;
          return paragraphHtml;
        })
        .map((it) => {
          const listItem = document.createElement("li");
          listItem.appendChild(it);
          return listItem;
        })
        .forEach((listItem) => {
          featuredPointsHtml.appendChild(listItem);
        });

      const contentHtml = document.createElement("div");
      contentHtml.className = "content";
      contentHtml.appendChild(jobInfoHtml);
      contentHtml.appendChild(featuredPointsHtml);

      const jobHtml = document.createElement("article");
      jobHtml.className = "job";
      jobHtml.appendChild(topBarHtml);
      jobHtml.appendChild(contentHtml);

      return jobHtml;
    })
    .map((it) => {
      const listItem = document.createElement("li");
      // HACK: there's a bug in ESLint that doesn't allow me to access
      // this item from CSS using a simple tag name selector.
      listItem.className = "li";
      listItem.appendChild(it);
      return listItem;
    })
    .forEach((listItem) => {
      jobListDom.appendChild(listItem);
    });
}

function setInterests(state) {
  const contentDom = document.querySelector(
    "#bento-flexbox .extra-box .interests-box .content",
  );
  contentDom.replaceChildren();
  state.interestsBox
    .map((it) => {
      const tagHtml = document.createElement("span");
      tagHtml.className = "tag";
      tagHtml.textContent = it;
      return tagHtml;
    })
    .map((it) => {
      const listItem = document.createElement("li");
      listItem.appendChild(it);
      return listItem;
    })
    .forEach((listItem) => {
      contentDom.appendChild(listItem);
    });
}

function setContact(state) {
  const messageDom = document.querySelector(
    "#bento-flexbox .extra-box .contact .message",
  );
  messageDom.textContent = state.contactBox.message;

  const emailHtml = document.createElement("span");
  emailHtml.className = "email";
  emailHtml.textContent = state.contactBox.email;

  const contactDetailsDom = document.querySelector(
    "#bento-flexbox .extra-box .contact .contact-details",
  );
  contactDetailsDom.replaceChildren();
  contactDetailsDom.appendChild(emailHtml);
}
