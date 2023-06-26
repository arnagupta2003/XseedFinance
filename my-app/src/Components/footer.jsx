import React from "react";
import BlackStrip from "./blackStrip";
import '../css/footer.css'

function Footer() {
  return (
    <div class="col-sm-12 align-items-center">
      <BlackStrip bgcolor="#252525" height="2.2em" />
      <div class="row justify-content-center" id="footerContainer">
        <div class="col-sm-12 col-md-3 footerItem">
          <h5 class="footerItemHeading">Label</h5>
          <ul>
            <li>
              <a href="https://www.dhando.in/search/label/crypto?&max-results=5">
              <i class="fa-solid fa-arrow-right"></i>&nbsp;Crypto
              </a>
            </li>
            <hr />
            <li>
              <a href="https://www.dhando.in/search/label/finance?&max-results=5">
              <i class="fa-solid fa-arrow-right"></i>&nbsp;Finance
              </a>
            </li>
          </ul>
        </div>
        
        <div class="col-sm-12 col-md-3 footerItem align-items-center">
          <h5 class="footerItemHeading">Featured Post</h5>
          <a href="https://www.dhando.in/2022/09/l-future-of-crypto-currency-orem-ipsum.html">
          <img alt="footerImg" src="https://lh3.googleusercontent.com/blogger_img_proxy/AByxGDSuBLi12122sLRN_acFr31uEhPsFlTKk4ku38O_yQqAiY45sHB2fR5ZkYO2pjm-i2EcnCpSfLbjjxh1ePOHXW8kKG6zuFo-46b8gO6eZGMlP7kST_q8c2JAq0aTAJ-ZwrI0B369RdMxeUi--Zm-tN4WEjcri9wVabH4Jf7-Ba5g6murLOeaSDOUb6fDhUI=w373-h187-p-k-no-nu"/>
          </a>
          <div class="row justify-content-between">
            <a class="col" href="https://www.blogger.com/profile/14203513000927050438">
              BY XSeed Finance
            </a>
            <div class="col">
            <i class="fa-regular fa-calendar-days"></i>&nbsp;
            September 22,2022
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-3 footerItem">
          <h5 class="footerItemHeading">Popular Posts</h5>
          <ul>
            <li>
              <div class="row justify-content-between">
                <div class="col">
                  <a href="https://www.dhando.in/search/label/crypto?&max-results=5">
                    <img alt="footerImg" id="popularPostImg" src="https://lh3.googleusercontent.com/blogger_img_proxy/AByxGDSuBLi12122sLRN_acFr31uEhPsFlTKk4ku38O_yQqAiY45sHB2fR5ZkYO2pjm-i2EcnCpSfLbjjxh1ePOHXW8kKG6zuFo-46b8gO6eZGMlP7kST_q8c2JAq0aTAJ-ZwrI0B369RdMxeUi--Zm-tN4WEjcri9wVabH4Jf7-Ba5g6murLOeaSDOUb6fDhUI=w83-h66-p-k-no-nu"/>
                  </a>
                </div>
              
                <div class="col">
                  <i class="fa-regular fa-calendar-days"></i>&nbsp;
                September 22,2022
                </div>
              </div>
            </li>
            <hr />
            <li>
            <div class="row justify-content-between">
                <div class="col">
                  <a href="https://www.dhando.in/2022/09/lorem-ipsum-dolor-sit-lorem-ipsum-dolor.html">
                    <img alt="footerImg" id="popularPostImg" src="https://lh3.googleusercontent.com/blogger_img_proxy/AByxGDQbRO3_aENejuPSxa2k-J86pgMiH7KdCitCbLd5hEfSFRcXmFr0XLS7ASkA-HFgtWQZyWCuy4KDgehVEWjlME_T5z1MSauwLWCETYoj36ZFlkVsWjPFOs2456yboqFJecQ_EkOY2YGa0iA89hlt4jIv-dG_KLzZtzaLLJyDww-MJR4vFFa9XtpWj6ih6pKZSn2b2-dKX7Le35diNUQXEQXHwK5CZaj9WwzDwATjkmWUF6j55FCSLU-rLT-ZprUt5YCaOkKzHIr4IuWGzp-0ud-gVVFFsmSVCYDCCiNhzFYyvOr20aTVdtiiDbTy92WXqyo=w83-h66-p-k-no-nu"/>
                  </a>
                </div>
              
                <div class="col">
                  <i class="fa-regular fa-calendar-days"></i>&nbsp;
                September 13,2022
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <BlackStrip bgcolor="#252525" height="4em" />
    </div>
    
    
  );
}
export default Footer;
