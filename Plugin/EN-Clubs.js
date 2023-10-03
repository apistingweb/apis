/*==============================
~> Name Temp     : STING WEB - Plugin EN - Auto
~> Version	     : 2024 / 1.0 MENA
~> Last Updated  : 02 - 10 - 2023 : 12:00 AM - 02:17 PM
~> Dev By     	 : Sting Dev  - Facebook Page ->  https://www.facebook.com/stingweb.eg
~> Desgin URL    : sting-web.blogspot.com
===============================*/
const elementsToTranslate=document.querySelectorAll(".team-name, .match-info ul li span, .match-timing .date, td.team.d-flex.ps-0.ms-md-2>a:nth-child(2), span.fw-normal > a:nth-child(2), .player-name, button#STingFariq, button#STingHadafin, span.h5.fw-light.mb-0, h1.mb-2.fs-4.fw-bold"),englishTranslations={"ترتيب الفرق":"Ranking of Teams","ترتيب الهدافين":"Ranking of Scorers","لم تبدأ بعد":"Not Start","بعد قليل":"Soon","جارية الان":"Live","إنتهت المباراة":"End",ليفربول:"Liverpool","مانشستر يونايتد":"Manchester United","مانشستر سيتي":"Manchester City",تشيلسي:"Chelsea",أرسنال:"Arsenal","ليستر سيتي":"Leicester City","توتنهام هوتسبير":"Tottenham Hotspur",إيفرتون:"Everton","وولفرهامبتون واندررز":"Wolverhampton Wanderers","أستون فيلا":"Aston Villa","ليدز يونايتد":"Leeds United","نيوكاسل يونايتد":"Newcastle United","كريستال بالاس":"Crystal Palace",ساوثهامبتون:"Southampton","برايتون & هوف ألبيون":"Brighton & Hove Albion","ويست هام يونايتد":"West Ham United",برنتفورد:"Brentford","نوريتش سيتي":"Norwich City",واتفورد:"Watford",برايتون:"Brighton","برايتون ألبيون":"Brighton & Hove Albion",برشلونة:"Barcelona","ريال مدريد":"Real Madrid","أتلتيكو مدريد":"Atletico Madrid","سيلتا فيغو":"Celta Vigo",إشبيلية:"Sevilla",فالنسيا:"Valencia","ريال بيتيس":"Real Betis",فياريال:"Villarreal","ريال سوسييداد":"Real Sociedad","أتلتيك بيلباو":"Athletic Bilbao","ريال بلد الوليد":"Real Valladolid",ليفانتي:"Levante",إيبار:"Eibar","ريال مايوركا":"Real Mallorca",أوساسونا:"Osasuna","ريال زرقاز":"Real Zaragoza",غرناطة:"Granada","ريال بامبلونا":"Real Pamplona","سبورتينغ خيخون":"Sporting Gijon",ليغانيس:"Leganes",ألافيس:"Alaves",جيرونا:"Girona",هويسكا:"Huesca",كاديز:"Cadiz",إلتشي:"Elche",ألكوركون:"Alcorcon","ريال مورسيا":"Real Murcia",كوردوبا:"Cordoba","بلد الوليد":"Valladolid",بيتيس:"Betis",فياريال:"Villareal","ريال زرقاز":"Zaragoza","رايو فايكانو":"Rayo Vallecano",إلتشي:"Elche",أوساسونا:"Osasuna",ملقة:"Malaga",لوغو:"Lugo","سبورتينغ خيخون":"Sporting Gijon",سرقسطة:"Saragossa",تينيريفي:"Tenerife",ألباسيتي:"Albacete",مايوركا:"Mallorca",جيرونا:"Girona",ليغانيس:"Leganes","بلد الوليد ب":"Valladolid B",مورسيا:"Murcia",ليدا:"Lleida",ساباديل:"Sabadell",إسبانيول:"Espanyol",قادش:"Cadiz",يوفنتوس:"Juventus","إنتر ميلان":"Inter Milan",ميلان:"AC Milan",روما:"AS Roma",نابولي:"Napoli",لاتسيو:"Lazio",أتلانتا:"Atalanta",فيورنتينا:"Fiorentina",سامبدوريا:"Sampdoria",جنوى:"Genoa",بولونيا:"Bologna",تورينو:"Torino",ساسولو:"Sassuolo",بارما:"Parma",كالياري:"Cagliari",أودينيزي:"Udinese","كييفو فيرونا":"Chievo Verona",إمبولي:"Empoli",فروزينوني:"Frosinone",بيسكارا:"Pescara",كاربي:"Carpi","هيلاس فيرونا":"Hellas Verona","سبيتسيا كالتيو":"Spezia Calcio",نوفارا:"Novara",تراباني:"Trapani",بيروجيا:"Perugia",كيتانيا:"Catania",كريمونيزي:"Cremonese",ساليرنيتانا:"Salernitana",فيتشينزا:"Vicenza",لودينيزي:"Lodigiani",أريزو:"Arezzo",أفيلينو:"Avellino","فيرتوس إنتيل":"Virtus Entella",بيزا:"Pisa",ألبينوليفي:"AlbinoLeffe",ريجينا:"Reggina",بادوفا:"Padova",بيسكارا:"Pescara",كاربي:"Carpi",كريمونيزي:"Cremonese",فروزينوني:"Frosinone",بيروجيا:"Perugia",كيتانيا:"Catania",ليتشي:"Lecce",مودينا:"Modena",أسكولي:"Ascoli",ليفورنو:"Livorno",تريستينا:"Triestina",تراباني:"Trapani",أفيلينو:"Avellino",جروسيتو:"Grosseto",بيتشنزا:"Piacenza",بوردونيزي:"Pordenone",جيانيا:"Juve Stabia",تريفيزو:"Treviso",كريستي:"Cristiano",أكيني:"Acireale",ميسينا:"Messina",بيتروسانتا:"Petrosanta",رافيننا:"Ravenna",سافونا:"Savona",إيسبيريا:"Ispieria",تيرمي:"Teramo",توريزانو:"Torizano",نيوتشاتيل:"Newcastle","بايرن ميونيخ":"Bayern Munich","بروسيا دورتموند":"Borussia Dortmund","باير ليفركوزن":"Bayer Leverkusen","راسينغ كلوب دوسلدورف":"Fortuna D\xfcsseldorf","إينتراخت فرانكفورت":"Eintracht Frankfurt","فيردر بريمن":"Werder Bremen",شالكه:"Schalke 04","هيرتا برلين":"Hertha Berlin","ريد بول لايبزيج":"RB Leipzig",فرايبورغ:"SC Freiburg",هوفنهايم:"TSG 1899 Hoffenheim",أوغسبورغ:"FC Augsburg",كولن:"FC Cologne",بادربورن:"SC Paderborn",ماينز:"Mainz 05",وولفسبورج:"VfL Wolfsburg","أونيون برلين":"Union Berlin","آرمينيا بيليفيلد":"Arminia Bielefeld",ستوتغارت:"VfB Stuttgart",الهلال:"Al-Hilal",النصر:"Al-Nassr",الأهلي:"Al-Ahli",الشباب:"Al-Shabab",الوحدة:"Al-Wehda",الاتفاق:"Al-Ittihad",الفتح:"Al-Fateh",التعاون:"Al-Taawoun",أبها:"Abha",الرائد:"Al-Raed",الفيصلي:"Al-Faisaly",الطائي:"Al-Taee",النجوم:"Al-Najma",القادسية:"Al-Qadisiyah",ضمك:"Dhamk",أحد:"Ohod",الفيحاء:"Al-Fayha",الباطن:"Al-Batin",الحزم:"Al-Hazm",الجيل:"Al-Jeel",الحمادة:"Al-Hamadah",الترجي:"Al-Taraji",النهضة:"Al-Nahda",النخيل:"Al-Nakheel",الدرعية:"Al-Durayah",الصفاء:"Al-Safa",الأنصار:"Al-Ansar",الربيع:"Al-Rabea",الرياض:"Al-Riyadh",الشعلة:"Al-Shula",الواقعة:"Al-Waqeaa",السلام:"Al-Salam",الأهلي:"Al Ahly",الزمالك:"Zamalek",الإسماعيلي:"Ismaily",بيراميدز:"Pyramids",المصري:"El Masry","المقاولون العرب":"Al Mokawloon Al Arab","الاتحاد السكندري":"Al Ittihad Alexandria",سموحة:"Smouha","طلائع الجيش":"Talaea El Gaish","وادي دجلة":"Wadi Degla",إنبي:"ENPPI","مصر المقاصة":"Misr El-Maqassa","حرس الحدود":"Haras El Hodood",الرجاء:"El Raja","نجوم المستقبل":"Nogoom El Mostakbal",طنطا:"Tanta",الأسيوطي:"Al Assiouty",الداخلية:"Al Dakhlia",الجونة:"El Gouna","الرجاء المغربي":"Raja Casablanca","الولايات المتحدة الأمريكية":"United States of America",كندا:"Canada",المكسيك:"Mexico",البرازيل:"Brazil","المملكة المتحدة":"United Kingdom",فرنسا:"France",ألمانيا:"Germany",إيطاليا:"Italy",إسبانيا:"Spain",البرتغال:"Portugal",هولندا:"Netherlands",بلجيكا:"Belgium",السويد:"Sweden",النرويج:"Norway",الدنمارك:"Denmark",فنلندا:"Finland",روسيا:"Russia",الصين:"China",الهند:"India",اليابان:"Japan","كوريا الجنوبية":"South Korea",أستراليا:"Australia",نيوزيلندا:"New Zealand","جنوب إفريقيا":"South Africa",نيجيريا:"Nigeria",كينيا:"Kenya",مصر:"Egypt",المغرب:"Morocco",الجزائر:"Algeria",تونس:"Tunisia",ليبيا:"Libya",السودان:"Sudan",العراق:"Iraq",سوريا:"Syria",لبنان:"Lebanon",الأردن:"Jordan",فلسطين:"Palestine",السعودية:"Saudi Arabia","الإمارات العربية المتحدة":"United Arab Emirates",قطر:"Qatar",البحرين:"Bahrain",عمان:"Oman",اليمن:"Yemen",الكويت:"Kuwait",قبرص:"Cyprus",تركيا:"Turkey",إيران:"Iran",أفغانستان:"Afghanistan",باكستان:"Pakistan",الهندوسية:"India",بنغلاديش:"Bangladesh",سريلانكا:"Sri Lanka",مالديف:"Maldives",تايلاند:"Thailand",ماليزيا:"Malaysia",إندونيسيا:"Indonesia",الفلبين:"Philippines",فيتنام:"Vietnam",سنغافورة:"Singapore",كمبوديا:"Cambodia",لاوس:"Laos",بروناي:"Brunei",ميانمار:"Myanmar",نيبال:"Nepal",بوتان:"Bhutan",منغوليا:"Mongolia",كازاخستان:"Kazakhstan",أوزبكستان:"Uzbekistan",قرغيزستان:"Kyrgyzstan",تاجيكستان:"Tajikistan",تركمانستان:"Turkmenistan",أذربيجان:"Azerbaijan",أرمينيا:"Armenia",جورجيا:"Georgia",أوكرانيا:"Ukraine",بيلاروس:"Belarus",ليتوانيا:"Lithuania",لاتفيا:"Latvia",إستونيا:"Estonia",فنلندا:"Finland",السويد:"Sweden",النرويج:"Norway",الدنمارك:"Denmark",أيرلندا:"Ireland","المملكة المتحدة":"United Kingdom",آيسلندا:"Iceland",فاروس:"Faroe Islands",غرينلاند:"Greenland",هولندا:"Netherlands",بلجيكا:"Belgium",لوكسمبورغ:"Luxembourg",فرنسا:"France",موناكو:"Monaco",سويسرا:"Switzerland",ليختنشتاين:"Liechtenstein",النمسا:"Austria",ألمانيا:"Germany",بولندا:"Poland",التشيك:"Czech Republic",سلوفاكيا:"Slovakia",هنغاريا:"Hungary",سلوفينيا:"Slovenia",كرواتيا:"Croatia","البوسنة والهرسك":"Bosnia and Herzegovina",صربيا:"Serbia",المونتينيغرو:"Montenegro","مقدونيا الشمالية":"North Macedonia",كوسوفو:"Kosovo",ألبانيا:"Albania",اليونان:"Greece",بلغاريا:"Bulgaria",رومانيا:"Romania",مولدوفا:"Moldova",أوكرانيا:"Ukraine",بيلاروس:"Belarus",ليتوانيا:"Lithuania",لاتفيا:"Latvia",إستونيا:"Estonia",فنلندا:"Finland",السويد:"Sweden",النرويج:"Norway",الدنمارك:"Denmark",أيرلندا:"Ireland","المملكة المتحدة":"United Kingdom",آيسلندا:"Iceland",فاروس:"Faroe Islands",غرينلاند:"Greenland",إسبتلية:"Spain",بورتغال:"Portugal",أندورا:"Andorra",موناكو:"Monaco",سويسرا:"Switzerland",ليختنشتاين:"Liechtenstein",النمسا:"Austria",ألمانيا:"Germany",بولندا:"Poland",التشيك:"Czech Republic",سلوفاكيا:"Slovakia",هنغاريا:"Hungary",سلوفينيا:"Slovenia",كرواتيا:"Croatia","البوسنة والهرسك":"Bosnia and Herzegovina",صربيا:"Serbia",المونتينيغرو:"Montenegro","مقدونيا الشمالية":"North Macedonia",كوسوفو:"Kosovo",ألبانيا:"Albania",اليونان:"Greece",بلغاريا:"Bulgaria",رومانيا:"Romania",مولدوفا:"Moldova",أوكرانيا:"Ukraine",بيلاروس:"Belarus",ليتوانيا:"Lithuania",لاتفيا:"Latvia",إستونيا:"Estonia",فنلندا:"Finland",السويد:"Sweden",النرويج:"Norway",الدنمارك:"Denmark",أيرلندا:"Ireland","المملكة المتحدة":"United Kingdom",آيسلندا:"Iceland",فاروس:"Faroe Islands",غرينلاند:"Greenland",بلغاريا:"Bulgaria",مولدوفا:"Moldova",رومانيا:"Romania",أوكرانيا:"Ukraine",بيلاروس:"Belarus",ليتوانيا:"Lithuania",لاتفيا:"Latvia",إستونيا:"Estonia",فنلندا:"Finland",السويد:"Sweden",النرويج:"Norway",الدنمارك:"Denmark",أيرلندا:"Ireland","المملكة المتحدة":"United Kingdom",آيسلندا:"Iceland",فاروس:"Faroe Islands",غرينلاند:"Greenland",ليختنشتاين:"Liechtenstein",النمسا:"Austria",ألمانيا:"Germany",بولندا:"Poland",التشيك:"Czech Republic",سلوفاكيا:"Slovakia",هنغاريا:"Hungary",سلوفينيا:"Slovenia",كرواتيا:"Croatia","البوسنة والهرسك":"Bosnia and Herzegovina",صربيا:"Serbia",المونتينيغرو:"Montenegro","مقدونيا الشمالية":"North Macedonia",كوسوفو:"Kosovo",ألبانيا:"Albania",اليونان:"Greece",بلغاريا:"Bulgaria",رومانيا:"Romania",مولدوفا:"Moldova",أوكرانيا:"Ukraine",بيلاروس:"Belarus",ليتوانيا:"Lithuania",لاتفيا:"Latvia",إستونيا:"Estonia",فنلندا:"Finland",السويد:"Sweden",النرويج:"Norway",الدنمارك:"Denmark",أيرلندا:"Ireland","المملكة المتحدة":"United Kingdom",آيسلندا:"Iceland",فاروس:"Faroe Islands",غرينلاند:"Greenland",إسبتلية:"Spain",بورتغال:"Portugal",أندورا:"Andorra",موناكو:"Monaco",سويسرا:"Switzerland",ليختنشتاين:"Liechtenstein",النمسا:"Austria",ألمانيا:"Germany",بولندا:"Poland",التشيك:"Czech Republic",سلوفاكيا:"Slovakia",هنغاريا:"Hungary",سلوفينيا:"Slovenia",كرواتيا:"Croatia","البوسنة والهرسك":"Bosnia and Herzegovina",صربيا:"Serbia",المونتينيغرو:"Montenegro","مقدونيا الشمالية":"North Macedonia",كوسوفو:"Kosovo",ألبانيا:"Albania",اليونان:"Greece",بلغاريا:"Bulgaria",رومانيا:"Romania",مولدوفا:"Moldova",أوكرانيا:"Ukraine",بيلاروس:"Belarus",ليتوانيا:"Lithuania",لاتفيا:"Latvia",إستونيا:"Estonia",فنلندا:"Finland",السويد:"Sweden",النرويج:"Norway",الدنمارك:"Denmark",أيرلندا:"Ireland","المملكة المتحدة":"United Kingdom",آيسلندا:"Iceland",فاروس:"Faroe Islands",غرينلاند:"Greenland",بلغاريا:"Bulgaria",مولدوفا:"Moldova",رومانيا:"Romania",أوكرانيا:"Ukraine",بيلاروس:"Belarus",ليتوانيا:"Lithuania",لاتفيا:"Latvia",إستونيا:"Estonia",فنلندا:"Finland",السويد:"Sweden",النرويج:"Norway",الدنمارك:"Denmark",أيرلندا:"Ireland","المملكة المتحدة":"United Kingdom",آيسلندا:"Iceland",فاروس:"Faroe Islands",غرينلاند:"Greenland",ليختنشتاين:"Liechtenstein",النمسا:"Austria",ألمانيا:"Germany",بولندا:"Poland",التشيك:"Czech Republic",سلوفاكيا:"Slovakia",هنغاريا:"Hungary",سلوفينيا:"Slovenia",كرواتيا:"Croatia","البوسنة والهرسك":"Bosnia and Herzegovina",صربيا:"Serbia",المونتينيغرو:"Montenegro","مقدونيا الشمالية":"North Macedonia",كوسوفو:"Kosovo",ألبانيا:"Albania",اليونان:"Greece",بلغاريا:"Bulgaria",رومانيا:"Romania",مولدوفا:"Moldova",أوكرانيا:"Ukraine",بيلاروس:"Belarus",ليتوانيا:"Lithuania",لاتفيا:"Latvia",إستونيا:"Estonia",فنلندا:"Finland",السويد:"Sweden",النرويج:"Norway",الدنمارك:"Denmark",أيرلندا:"Ireland","المملكة المتحدة":"United Kingdom",آيسلندا:"Iceland",فاروس:"Faroe Islands",غرينلاند:"Greenland","الوداد البيضاوي":"Wydad Casablanca","الرجاء البيضاوي":"Raja Casablanca","الفتح الرباطي":"FUS Rabat","حسنية أكادير":"Hassania Agadir","الجيش الملكي":"Renaissance Berkane","اتحاد طنجة":"Ittihad Tanger","المغرب التطواني":"Maghreb de T\xe9touan","نهضة بركان":"RS Berkane","الترجي الرياضي التونسي":"Esp\xe9rance Sportive de Tunis","النجم الساحلي":"\xc9toile Sportive du Sahel","النادي الإفريقي":"Club Africain","النادي الصفاقسي":"Stade Sportif Sfaxien","المريخ الفلسطيني":"MC Alger","شباب بلوزداد":"CR Belouizdad","نصر حسين داي":"NA Hussein Dey","اتحاد العاصمة":"USM Alger","شبيبة القبائل":"JS Kabylie","وفاق سطيف":"ES S\xe9tif","شبيبة الساورة":"CS Saoura","باريس سان جيرمان":"Paris Saint-Germain",مارسيليا:"Olympique de Marseille",ليل:"LOSC Lille",ليون:"Olympique Lyonnais",موناكو:"AS Monaco",رين:"Stade Rennais FC",بوردو:"FC Girondins de Bordeaux","سانت إتيان":"AS Saint-\xc9tienne",نيس:"OGC Nice",مونبلييه:"Montpellier HSC",نانت:"FC Nantes",ستراسبورغ:"RC Strasbourg Alsace",ميتز:"FC Metz",لوريان:"FC Lorient",تروا:"ESTAC Troyes",بوردو:"FC Girondins de Bordeaux",نيس:"OGC Nice",مونبلييه:"Montpellier HSC",نانت:"FC Nantes",ستراسبورغ:"RC Strasbourg Alsace",ميتز:"FC Metz",لوريان:"FC Lorient",تروا:"ESTAC Troyes",أنجيه:"Angers SCO",ريمس:"Stade de Reims","كليرمون فوت":"Clermont Foot",بريست:"Stade Brestois 29","أولمبيك نيم":"N\xeemes Olympique","جالطة سراي":"Galatasaray",بشكتاش:"Beşiktaş",فنربهتشه:"Fenerbah\xe7e","ترابزون سبور":"Trabzonspor","ألانيا سبور":"Alanyaspor","أنطاليا سبور":"Antalyaspor","كاسيم باشا":"Kasımpaşa",جوزتيبي:"G\xf6ztepe","كارديف سبور":"Karag\xfcmr\xfck","مالاتيا سبور":"Malatyaspor","هاتاي سبور":"Hatayspor","سيفاس سبور":"Sivasspor","يونان غوفس":"Yeni Malatyaspor","قونيا سبور":"Konyaspor",كايسيريسبور:"Kayserispor","أنقرة غوجو":"Ankarag\xfcc\xfc","كارابوك سبور":"BB Erzurumspor",ريزيسبور:"\xc7aykur Rizespor","إسكيشهير سبور":"Eskişehirspor","ماماليغ سبور":"MKE Ankarag\xfcc\xfc","أتلانتا يونايتد":"Atlanta United FC","نيو إنجلاند ريفولوشن":"New England Revolution","نيويورك سيتي إف سي":"New York City FC","نيويورك ريد بولز":"New York Red Bulls","فيلادلفيا يونيون":"Philadelphia Union","واشنطن دي سي يونايتد":"D.C. United","شيكاغو فاير":"Chicago Fire FC","كولورادو رابيدز":"Colorado Rapids","كولومبوس كرو":"Columbus Crew","سي إف سي دالاس":"FC Dallas","هيوستن داينامو":"Houston Dynamo","لوس أنجلوس إف سي":"Los Angeles FC","لوس أنجلوس غالاكسي":"LA Galaxy","ميامي سي إف":"Inter Miami CF","مينيسوتا يونايتد إف سي":"Minnesota United FC","ناشفيل سي سي":"Nashville SC","أورلاندو سيتي سي إف":"Orlando City SC","بورتلاند تيمبرز":"Portland Timbers","ريال سولت ليك":"Real Salt Lake","سان خوسي إيرثكواكس":"San Jose Earthquakes","سيتل ساوندرز":"Seattle Sounders FC","سبورتينغ كانساس سيتي":"Sporting Kansas City","تورونتو إف سي":"Toronto FC","فانكوفر وايتكابس":"Vancouver Whitecaps FC",الوحدات:"Al-Wehdat",الفيصلي:"Al-Faisaly","شباب الأردن":"Shabab Al-Jordan",الرمثا:"Al-Ramtha",البقعة:"Al-Baq'a",الصريح:"Al-Sareeh","ذات راس":"Dhahiat Al-Rasheed",العربي:"Al-Arabi",الدحيل:"Al-Duhail SC",السد:"Al-Sadd SC",الريان:"Al-Rayyan SC",لخويا:"Lekhwiya SC",العربي:"Al-Arabi SC",الغرافة:"Al-Gharafa SC",الخور:"Al-Khor SC",الوكرة:"Al-Wakrah SC",الشحانية:"Al-Shahaniya SC","أم صلال":"Umm Salal SC",الزوراء:"Al-Zawraa","القوة الجوية":"Al-Quwa Al-Jawiya",الشرطة:"Al-Shurtah",النفط:"Al-Naft",الكرخ:"Al-Karkh",الطلبة:"Al-Talaba","نفط ميسان":"Naft Maysan",الكوفة:"Al-Kufa",الصناعة:"Al-Sinaa",الحدود:"Al-Hudood",النجف:"Al-Najaf",الديوانية:"Al-Diwaniya",كربلاء:"Karbala","هلال القدس":"Hilal Al-Quds","شباب الخليل":"Shabab Al-Khaleel","بيت حانون الرياضي":"Beit Hanoun Sports Club","خدمات رفح":"Khadamat Rafah","شباب جباليا":"Shabab Jabalia","أهلي الخليل":"Ahli Al-Khaleel","ترجي وادي النيص":"Taraji Wadi Al-Nes",المريخ:"Al-Merrikh","صيد الغربية":"Sahab Al-Gharbiah",جاردنز:"Gardens","بيت لاهيا":"Beit Lahia","شباب رفح":"Shabab Rafah","كأس العالم لكرة القدم":"FIFA World Cup","كأس الأمم الأفريقية":"African Cup of Nations","كأس الأمم الأوروبية":"UEFA European Championship","كوبا أمريكا":"Copa America","كأس آسيا لكرة القدم":"AFC Asian Cup","كأس الأمم الأوقيانية":"OFC Nations Cup","كأس الأمم الوسطى الكاريبية":"CONCACAF Nations Cup","كأس الكونفدراليات":"FIFA Confederations Cup","دوري أبطال أوروبا":"UEFA Champions League","الدوري الإنجليزي الممتاز":"Premier League","الدوري الإسباني":"La Liga","الدوري الإيطالي":"Serie A","الدوري الألماني":"Bundesliga","الدوري الفرنسي":"Ligue 1","دوري الدرجة الأولى الإنجليزي":"EFL Championship","الدوري البرتغالي":"Primeira Liga","دوري الدرجة الأولى الإسكتلندي":"Scottish Premiership","دوري الدرجة الأولى التركي":"S\xfcper Lig","الدوري الهولندي":"Eredivisie","كأس العرب":"Arab Cup","دوري الدرجة الأولى الأرجنتيني":"Primera Divisi\xf3n Argentina","دوري الدرجة الأولى البرازيلي":"Campeonato Brasileiro S\xe9rie A","الدوري الإنجليزي":"Premier League","الدوري الإسباني":"La Liga","الدوري الإيطالي":"Serie A","الدوري الألماني":"Bundesliga","الدوري الفرنسي":"Ligue 1","الدوري الهولندي":"Eredivisie","الدوري البرتغالي":"Primeira Liga","الدوري البرازيلي":"Campeonato Brasileiro S\xe9rie A","الدوري الأرجنتيني":"Argentine Primera Divisi\xf3n","الدوري الروسي":"Russian Premier League","الدوري الصيني":"Chinese Super League","الدوري الياباني":"J1 League","الدوري الكوري الجنوبي":"K League","الدوري السعودي":"Saudi Professional League","الدوري المصري الممتاز":"Egyptian Premier League","عصام الشوالي":"Issam Chaouali","فارس عوض":"Fares Awad","حفيظ دراجي":"Hafid Derradji","رؤوف خليف":"Raouf Khalif","عبدالله الحربي":"Abdullah Al-Harbi","علي محمد علي":"Ali Mohammed Ali","عبدالله العريفي":"Abdullah Al-Arifi","خالد جلال":"Khaled Galal","فهد العتيبي":"Fahd Al-Otaibi","نواف التمياط":"Nawaf Al-Timyat","علي سعيد الكعبي":"Ali Saeed Al-Kaabi","سوار الذهب":"Suwar Al-Dhahab","جواد بده":"Jawad Badeh","احمد البلوشي":"Ahmed Al-Baloushi","محمد الكواليني":"Mohammed Al-Kouwalini","خليل البلوشي":"Khalil Al-Baloushi","رياض العدساني":"Riyad Al-Adasani","طارق الحديثي":"Tareq Al-Hadithi","حمزة المهندي":"Hamza Al-Muhanna","عبدالله المعيوف":"Abdullah Al-Muaioof","أندريه كريم":"Andre Karem","سامي الجابر":"Sami Al-Jaber","ماجد عبدالله":"Majed Abdullah","عبدالله جاسم":"Abdullah Jasem","محمد القحطاني":"Mohammed Al-Qahtani","محمد البكري":"Mohammed Al-Bakri"};elementsToTranslate.forEach(a=>{let e=a.textContent.trim(),i=englishTranslations[e];i&&(a.textContent=i)});
