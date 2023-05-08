import React from "react";
import BlackStrip from "./blackStrip";
import '../css/footer.css'

const customStyle = {
  display: "inline-block !important",
  fontSize: "inherit!important",
  color: "#ff00ba!important",
  visibility: "visible!important",
  zIndex: "99!important",
  opacity: "1!important",
  position: "relative!important",
};
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
          <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AByxGDTh-0uVL8Y3bNN4g0mpomD8EyPnZD0r91j9TJBP7fZv1aeBUhk0G6pntOurVq4MAQvC0C98SbvslRUpQp8PmA0Fh-VQjiJ1h1DOXHLfP98PXACsaJdzi-E5IpWQxSRofuQblVJRZfUTc648h0Ni-kOLRQS_wTWc5HNyTy3AV8u2FRdFduj8Ly1Beoa3Jbs=w373-h187-p-k-no-nu"/>
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
                    <img id="popularPostImg" src="https://lh3.googleusercontent.com/blogger_img_proxy/AByxGDTh-0uVL8Y3bNN4g0mpomD8EyPnZD0r91j9TJBP7fZv1aeBUhk0G6pntOurVq4MAQvC0C98SbvslRUpQp8PmA0Fh-VQjiJ1h1DOXHLfP98PXACsaJdzi-E5IpWQxSRofuQblVJRZfUTc648h0Ni-kOLRQS_wTWc5HNyTy3AV8u2FRdFduj8Ly1Beoa3Jbs=w373-h187-p-k-no-nu"/>
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
                    <img id="popularPostImg" src="https://lh3.googleusercontent.com/blogger_img_proxy/AByxGDS8-Dm8EhQIokhrJbb8CfB-vVp0GXum5BhrZ3p-vFZ7B9G38V2rsqEMO4fQ7qfS-iurTdXWwN7B8hZOWUYcFckqZ-_1037ZDtHpwUyXM0IQICJewQUeO19uOpyGVzC9CRsE4CDUc8odI6CUI9lvGLlN9YL2Ch9EkyWNZZp-9b8IL4uWdWO8XXHKdMLkQseZLppqGBsxOEHWtAJ8dZKi3jUkj5KO94u8SuoeVN0UxuiLU1zwjZF9McWY9-yl8c8gwYYtm05SU0DpWL0h2IjISrzw74A5UZxkVN3QsWrm979QHIjCRnohBhGMPn2CS9P84TM=w83-h66-p-k-no-nu"/>
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
