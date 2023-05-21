document.addEventListener("DOMContentLoaded", (event) => {
var input = document.querySelector(".search");
  var showContainer = document.querySelector(".show");
  var country = document.querySelector(".country");
  var button = document.querySelector(".submit-button");
  var data_1 = document.querySelector(".data_1");
  var data_2 = document.querySelector(".data_2");
  var data_3 = document.querySelector(".data_3");
  var data_4 = document.querySelector(".data_4");
    var data_5 = document.querySelector(".data_5");
    var data_6 = document.querySelector(".data_6");
    var data_7 = document.querySelector(".data_7");
    var data_8 = document.querySelector(".data_8");
    var data_9 = document.querySelector(".data_9");
    var data_10 = document.querySelector(".data_10");

  var incase = "If you did enter in one of the countries above and are seeing this message, please make sure the country is spelled exactly like it is above and has the proper capitalizations.";

  var blank = ""    
  var canada_explanation = "While Canada is has many satellites both active and inactive, the amount debris the nation has left in space is minimal.";
  var isis1_deb  = "ISIS 1 DEB: 1969-01-30";
  var isis2_deb = "ISIS 2 DEB: 1971-04-01";
  var canada_conclusion = "Canada only has two trackable prominent pieces of debris in space!";


 var france_explanation = "France, being a present power in space exploration, has left a good degree of debris in space.";
  var araiane1_deb = "Araine 1 Deb: 1986-02-22";
var araine42p_deb = "Araine 42P Deb: 1992-08-10";
  var araine40_deb = "Araine 40 Deb: 1993-09-26";
  var helios2A_deb = "Helios 2A Deb: 2004-12-18";
  var araine3_deb = "Araine 3 Deb: 1984-11-10";
  var araine44lp_deb = "Araine 44LP Deb: 2023-05-10";
  var araine2_deb = "Araine 2 Deb: 1989-01-27";
var diamantbp4_deb = "Diamant B-P4 Deb: 1975-02-06";
  var france_conclusion = "France has the 4th most space debris in the world, having more than 500 pieces of debris!";


var china_explanation = "China is extremely involved with space through satellites and travel and sadly leaves a lot of debris behind.";
var fengyun1c_deb = "Fengyun 1C Deb: 1999-05-10";
var cz6a_deb = "CZ-6A Deb: 2022-11-11";
var cz2c_deb = "CZ-2Z Deb: 2013-7-15";
var cz4_deb = "CZ-4 Deb: 1990-09-03";
var cz3c_deb = "CZ-3C Deb: 2012-02-24";
var cz3a_deb = "CZ-3A Deb: 2007-02-02";
var cz4b_deb = "CZ-4B Deb: 2011-12-22";
var fengyun2e_deb = "Fengyun 2E Deb: 2008-12-23";
var china_conclusion = "China has the 3rd most space debris in the world with more than 3,800 pieces of debris floating around space!";

var us_explanation = "The United States is a space superpower with many satellites and many adventures into space.";
var titan34d_rb = "Titan 34D Transtage R/B: 1989-05-10";
var delta1_deb = "Delta 1 Deb: 1973-11-06";
var nimbus2_deb = "Nimbus 2 Deb: 1966-05-15";
var ops4682_deb = "Ops 4682 Deb: 1965-04-03";
var delta1_rb = "Delta 1 R/B: 1965-07-02";
var thorb_rb = "Thor Agena B R/B: 1966-05-15";
var pegasus_rb = "Pegasus R/B: 2021-06-13";
var pegasus_deb = "Pegasus Deb: 1994-05-19";
var us_conclusion = "The United States is the second biggest contributer to space debris! They have contributed more than 5000 pieces of debris floating through space."

  var japan_explanation = "Japan contributes to the international advancement of space exploration and expansion, but by doing this they also pollute space with debris and rocket bodies."
var h2_rb = "H-2 R/B: 1994-02-03";
var h2a_deb = "H-2A Deb: 2012-05-17";
var n1_rb = "N-1 R/B: 1975-09-09";
var m4s_rb = "M-4S R/B: 1971-02-16";
var tansei3_deb = "Tansei 3 Deb: 1977-02-19";
var epsilon_rb = "Epsilon R/B: 2018-01-17";
var n2_rb = "N-2 R/B: 1987-02-19";
var epsilon_deb = "Epsilon Deb: 2013-09-14";
var japan_conclusion = "Japan is the world's 5th largest contributer to space debris!";

  var india_explanation = "A byproduct of India's space innovations and advancements is the increase of debris and rocket bodies left in space."
  var pslv_deb = "PSLV Deb: 2001-10-22";
  var pslv_rb = "PSLV R/B: 2022-02-14";
  var tes_deb = "TES Deb: 2001-10-22";
  var irsp4_deb = "IRS P4 Deb: 1999-05-26";
  var irs1d_deb = "IRS 1D Deb: 1997-09-29";
  var irsb3_deb = "IRS B3 Deb: 1996-03-21";
  var insat2c_deb = "Insat 2C Deb: 1995-12-06";
  var irs1d_deb = "IRS 1D Deb: 1997-09-29";
var india_conclusion = "Unfortunately, India leaves a lot of debris and rocket bodies in space. Which makes them the 6th biggest contributer to space debris in the world.";

  //button = document.getElementById("thebutton") the code isnt working now it was before
  button.addEventListener("click", (event)=>{
    showContainer.style.display = "block";
    if(input.value === "Canada"){
      country.innerHTML = input.value;
     data_1.innerHTML = canada_explanation;
     data_2.innerHTML = isis1_deb;
    data_3.innerHTML = isis2_deb;
    data_4.innerHTML = canada_conclusion;
     data_5.innerHTML = blank;
       data_6.innerHTML = blank;
       data_7.innerHTML = blank;
       data_8.innerHTML = blank;
       data_9.innerHTML = blank;
       data_10.innerHTML = blank;
    }
  else if(input.value === "France"){
    country.innerHTML = input.value;
    data_1.innerHTML = france_explanation;
     data_2.innerHTML = araiane1_deb;
    data_3.innerHTML = araine42p_deb;
    data_4.innerHTML = araine40_deb;
    data_5.innerHTML = helios2A_deb;
    data_6.innerHTML = araine3_deb;
      data_7.innerHTML = araine44lp_deb;
    data_8.innerHTML = araine2_deb;
    data_9.innerHTML = diamantbp4_deb;
    data_10.innerHTML = france_conclusion;
  }
    else if(input.value === "China"){
      country.innerHTML = input.value;
      data_1.innerHTML = china_explanation;
      data_2.innerHTML = cz6a_deb;
      data_3.innerHTML = fengyun1c_deb;
      data_4.innerHTML = cz2c_deb;
      data_5.innerHTML = cz4_deb;
      data_6.innerHTML = cz3c_deb;
      data_7.innerHTML = cz3a_deb;
      data_8.innerHTML = cz4b_deb;
      data_9.innerHTML = fengyun2e_deb;
      data_10.innerHTML = china_conclusion;
      
    }
      else if(input.value === "The United States"){
        country.innerHTML = input.value;
      data_1.innerHTML = us_explanation;
      data_2.innerHTML = titan34d_rb;
      data_3.innerHTML = delta1_deb;
      data_4.innerHTML = nimbus2_deb;
      data_5.innerHTML = ops4682_deb;
      data_6.innerHTML = delta1_rb;
      data_7.innerHTML = thorb_rb;
      data_8.innerHTML = pegasus_rb;
      data_9.innerHTML = pegasus_deb;
      data_10.innerHTML = us_conclusion;
      }
        else if(input.value==="Japan"){
        country.innerHTML = input.value;
          data_1.innerHTML = japan_explanation;
      data_2.innerHTML = h2_rb;
      data_3.innerHTML = h2a_deb;
      data_4.innerHTML = n1_rb;
      data_5.innerHTML = m4s_rb;
      data_6.innerHTML = tansei3_deb;
      data_7.innerHTML = epsilon_rb;
      data_8.innerHTML = n2_rb;
      data_9.innerHTML = epsilon_deb;
      data_10.innerHTML = japan_conclusion;
          }
      else if(input.value==="India"){
        country.innerHTML = input.value;
        data_1.innerHTML = india_explanation;
       data_2.innerHTML = pslv_deb;
      data_3.innerHTML = pslv_rb;
      data_4.innerHTML = tes_deb;
      data_5.innerHTML = irsp4_deb;
      data_6.innerHTML = irs1d_deb;
      data_7.innerHTML = irsb3_deb;
      data_8.innerHTML = insat2c_deb;
      data_9.innerHTML = irs1d_deb;
        data_10.innerHTML = india_conclusion;
      }
    else {
      country.innerHTML = "Enter In One of The Countries Above.";
       data_1.innerHTML = incase;
       data_2.innerHTML = blank;
       data_3.innerHTML = blank;
       data_4.innerHTML = blank;
       data_5.innerHTML = blank;
       data_6.innerHTML = blank;
       data_7.innerHTML = blank;
       data_8.innerHTML = blank;
       data_9.innerHTML = blank;
       data_10.innerHTML = blank;
    }
    }
                          )
                          }
                         );
                        


function toggleDisplay(){
  
}