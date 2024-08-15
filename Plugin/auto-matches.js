/*==============================
~> Name Temp     : Table Match Auto Plugin
~> Version	     : V 2.0 STABLE
~> Last Updated  : 01 - 07 - 2024
~> Dev By     	 : STING WEB  - Facebook Page ->  https://www.facebook.com/stingweb.eg
~> Desgin URL    : www.sting-web.com
==============================*/
const STWJSap = async function get() {
  const loadingIcon = document.getElementById("STING-WEB_LoadingTable");

  const STWYesterday = document.querySelector(".STING-WEB_Yesterday");
  const STWToday = document.querySelector(".STING-WEB_Today");
  const STWTomorrow = document.querySelector(".STING-WEB_Tomorrow");

  loadingIcon.style.display = "block";
  loadingIcon.style.padding = "10px";
  loadingIcon.style.borderRadius = "5px";
  loadingIcon.style.margin = "0 auto";
  loadingIcon.style.textAlign = "center";
  loadingIcon.innerHTML = `<img width="30px" height="30px" src="https://sting-web.com/api/oo/v1/get%D8%9Fauto=all=matches/loading.gif" alt="Loading...">`;

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.sting-web.com/api/oo/v1/get%D8%9Fauto=all=matches/"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      loadingIcon.style.display = "none";

      const ses = document.getElementsByTagName("body")[0];
      const src = document.createElement("style");
      ses.prepend(src);
      src.classList.add("TableStingStyle");
      const rew = document.querySelector(".TableStingStyle");

      if (STWYesterday) { if (STWYesterday.getAttribute('stw') == 1) { rew.innerHTML = data.CssStyle; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWYesterday) { if (STWYesterday.getAttribute('stw') == 2) { rew.innerHTML = data.CssStyle; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWYesterday) { if (STWYesterday.getAttribute('stw') == 3) { rew.innerHTML = data.CssStyle; } else { rew.innerHTML = data.CssStyle1; }; }

      if (STWToday) { if (STWToday.getAttribute('stw') == 1) { rew.innerHTML = data.CssStyle; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWToday) { if (STWToday.getAttribute('stw') == 2) { rew.innerHTML = data.CssStyle; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWToday) { if (STWToday.getAttribute('stw') == 3) { rew.innerHTML = data.CssStyle; } else { rew.innerHTML = data.CssStyle1; }; }

      if (STWTomorrow) { if (STWTomorrow.getAttribute('stw') == 1) { rew.innerHTML = data.CssStyle; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWTomorrow) { if (STWTomorrow.getAttribute('stw') == 2) { rew.innerHTML = data.CssStyle; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWTomorrow) { if (STWTomorrow.getAttribute('stw') == 3) { rew.innerHTML = data.CssStyle; } else { rew.innerHTML = data.CssStyle1; }; }

      const setMatchesData = (matchesElement, data, URLs) => {
        if (matchesElement) {
          matchesElement.innerHTML = data;
          const href = matchesElement.querySelectorAll(".match-container a");
          for (let i = 0; i < href.length; i++) {
            if (matchesElement && href[i] && URLs[i]) {
              href[i].setAttribute("href", URLs[i]);
            }
          }
        }
      };

      if (STWYesterday) {
        setMatchesData(STWYesterday, data.Yesterday, URLYes);
      }
      if (STWToday) {
        setMatchesData(STWToday, data.Today, URLTod);
      }
      if (STWTomorrow) {
        setMatchesData(STWTomorrow, data.Tomorrow, URLTom);
      }

      document.querySelector(".albaflex").classList.add("STING-WEB-FLEX");
      document.querySelector(".STING-WEB-FLEX").classList.remove("albaflex");

      // الحصول على جميع العناصر التي تحتوي على الكلاس ".match-timing"
      const matchTimingElements = document.querySelectorAll(".match-timing");

      // إنشاء عنصر <span> جديد
      const spanElement = document.createElement("span");
      spanElement.classList.add("STING-WEB-Timo");
      spanElement.innerText = "بتوقيت جهازك";

      // إضافة العنصر الجديد إلى كل عنصر في القائمة
      matchTimingElements.forEach((matchTimingElement) => {
        const newSpanElement = spanElement.cloneNode(true);
        matchTimingElement.prepend(newSpanElement);
      });

      // الحصول على جميع عناصر المباريات
      const matchContainers = document.querySelectorAll(".match-container");

      // المرور على كل عنصر مباراة
      matchContainers.forEach((container) => {
        // الحصول على عنصر الوقت
        const matchTimeElement = container.querySelector("#match-time");

        if (matchTimeElement) {
          // استخراج وقت المباراة كنص
          const matchTimeText = matchTimeElement.innerText;

          // إنشاء عنصر div جديد للعد التنازلي
          const countdownElement = document.createElement("div");
          countdownElement.classList.add("countdown-timer");

          // إضافة عنصر العد التنازلي بعد عنصر .result
          const resultElement = container.querySelector(".result");
          if (resultElement) {
            resultElement.insertAdjacentElement("afterend", countdownElement);
          }

          // وظيفة لحساب الوقت المتبقي وعرضه
          function updateCountdown() {
            const matchTime = new Date();
            const [time, period] = matchTimeText.split(" ");
            let [hours, minutes] = time.split(":").map(Number);

            // تحويل الوقت إلى تنسيق 24 ساعة
            if (period === "PM" && hours !== 12) hours += 12;
            if (period === "AM" && hours === 12) hours = 0;

            matchTime.setHours(hours, minutes, 0, 0);

            const now = new Date();
            const timeDifference = matchTime - now;

            if (timeDifference > 0) {
              const hoursLeft = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              );
              const minutesLeft = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
              );
              const secondsLeft = Math.floor(
                (timeDifference % (1000 * 60)) / 1000
              );

              // عرض الوقت المتبقي بشكل "HH:MM:SS"
              countdownElement.innerText = `${hoursLeft
                .toString()
                .padStart(2, "0")}:${minutesLeft
                .toString()
                .padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
            } else {
              const timeSinceMatchStarted = now - matchTime;
              const twoHoursInMilliseconds = 2 * 60 * 60 * 1000;

              if (timeSinceMatchStarted < twoHoursInMilliseconds) {
                countdownElement.innerText = "مباشر";
                countdownElement.classList.add("STING-WEB-LIVE-NOW");
              } else {
                countdownElement.innerText = "إنتهت";
                countdownElement.classList.remove("STING-WEB-LIVE-NOW");
                countdownElement.classList.add("STING-WEB-END");
                clearInterval(countdownInterval);
              }
            }
          }

          // تحديث العد التنازلي كل ثانية
          const countdownInterval = setInterval(updateCountdown, 1000);

          // تحديث العد التنازلي فورًا عند الإنشاء
          updateCountdown();
        }
      });

      const imgEl = document.querySelectorAll("img.hqy-lazy");
      for (let i = 0; i < imgEl.length; i++) {
        if (imgEl[i].getAttribute("data-src")) {
          imgEl[i].setAttribute("src", imgEl[i].getAttribute("data-src"));
          imgEl[i].removeAttribute("class");
        }
      }

      console.group(
        "%cTable Matchs Auto - STING WEB",
        "font-weight:500;color:#000;font-size:20px;"
      );
      console.log("=> Designed by   : STING WEB");
      console.log("=> FB Page URL   : https://fb.com/stingweb.eg");
      console.log("=> Version       : 2.0 - STABLE");
      console.log("=> Design URL    : https://sting-web.blogspot.com");
      console.log("=> اطلب نسخة لموقعك الان - من خلال ستينج ويب");
      console.groupEnd();
    } catch (error) {
      console.log("NOT Active");
      loadingIcon.innerHTML = `<div class="NotAllow"> <span>الإضافة غير مفعلة علي موقعكم الرجاء التواصل معنا لطلب الترخيص الخاص بك</span> <a href="https://www.sting-web.com"><span>ستينج ويب</span></a> <style> .NotAllow { text-align: center; background: #f7f8fc; padding: 10px; display: grid; border-radius: 8px; font-weight: 600; box-shadow: 0 1px 6px rgb(32 33 36 / 10%); font-size: 16px; }.NotAllow > a { text-align: center; background: #100d48; color: #fff; margin: 0 auto; padding: 2px 10px; font-size: 16px; border-radius: 8px; margin-top: 10px; } </style> </div>`;
    }
  }

  fetchData();
};

STWJSap();
