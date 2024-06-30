/*==============================
~> Name Temp     : Table Match Auto Plug
~> Version	     : V 2.0
~> Last Updated  : 01 - 08 - 2023
~> Dev By     	 : Sting Dev  - Facebook Page ->  https://www.facebook.com/stingweb.eg
~> Desgin URL    : sting-web.blogspot.com
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
  loadingIcon.innerHTML = `<img width="30px" height="30px" src="https://sting-web.com/api/v3/clients/get%d8%9fauto=all=matches/loading.gif" alt="Loading...">`;

  async function fetchData() {
    try {
      const response = await fetch('https://sting-web.com/api/v3/clients/get%d8%9fauto=all=matches/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
    
      loadingIcon.style.display = "none";

      const ses = document.getElementsByTagName("body")[0];
      const src = document.createElement("style");
      ses.prepend(src);
      src.classList.add("TableStingStyle");
      const rew = document.querySelector(".TableStingStyle");
      
      if (STWYesterday) { if (STWYesterday.getAttribute('stw') == 1) { rew.innerHTML = data.CssStyle1; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWYesterday) { if (STWYesterday.getAttribute('stw') == 2) { rew.innerHTML = data.CssStyle2; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWYesterday) { if (STWYesterday.getAttribute('stw') == 3) { rew.innerHTML = data.CssStyle3; } else { rew.innerHTML = data.CssStyle1; }; }
      
      if (STWToday) { if (STWToday.getAttribute('stw') == 1) { rew.innerHTML = data.CssStyle1; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWToday) { if (STWToday.getAttribute('stw') == 2) { rew.innerHTML = data.CssStyle2; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWToday) { if (STWToday.getAttribute('stw') == 3) { rew.innerHTML = data.CssStyle3; } else { rew.innerHTML = data.CssStyle1; }; }

      if (STWTomorrow) { if (STWTomorrow.getAttribute('stw') == 1) { rew.innerHTML = data.CssStyle1; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWTomorrow) { if (STWTomorrow.getAttribute('stw') == 2) { rew.innerHTML = data.CssStyle2; } else { rew.innerHTML = data.CssStyle1; }; }
      if (STWTomorrow) { if (STWTomorrow.getAttribute('stw') == 3) { rew.innerHTML = data.CssStyle3; } else { rew.innerHTML = data.CssStyle1; }; }
      
      
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

      if (STWYesterday) { setMatchesData(STWYesterday, data.Yesterday, URLYes); }
      if (STWToday) { setMatchesData(STWToday, data.Today, URLTod); }
      if (STWTomorrow) { setMatchesData(STWTomorrow, data.Tomorrow, URLTom); }

      document.querySelector(".albaflex").classList.add("STING-WEB_FLEX");
      document.querySelector(".STING-WEB_FLEX").classList.remove("albaflex");
      
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
      console.log("=> Version       : 2.0 - MENA");
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
