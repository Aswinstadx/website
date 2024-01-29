import React, { useEffect, useState } from "react";
import {
  ABOUT_PAGE_IMAGE,
  BANNER_IMAGE,
  PORTFOLIO_IMAGE,
} from "../Contants/Images/urls";
import Footer from "../Components/Footer/Footer";
import GalleryScreen from "./GalleryScreen";
import ReactPlayer from "react-player";

function HomeScreen() {
  const [openGalery, setOpenGalery] = useState(false);
  const [imageWidth, setImageWidth] = useState(window.innerWidth / 3);

  const clickGalery = () => {
    setOpenGalery(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setImageWidth(window.innerWidth / 3);
    };

    // Attach the event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand mt-3" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="153"
              height="62"
              viewBox="0 0 153 62"
              fill="none"
              className="ml-sm-auto"
              style={{ left: "121px",top:'15px', position: "absolute" }}
            >
              <path
                d="M70.7885 42.1458C88.2584 28.8097 104.448 13.9911 121.748 0.532691C121.965 0.787726 122.189 1.04807 122.406 1.30311C117.89 5.00642 113.326 8.66723 108.863 12.4343C104.357 16.2386 99.8943 20.096 95.5003 24.0278C91.0531 28.0074 86.7122 32.1092 82.5998 36.5935C83.3011 36.2375 83.9706 35.7753 84.7145 35.5681C85.4052 35.3768 86.1756 35.4565 86.9141 35.414C86.8026 36.0675 86.7069 36.721 86.5741 37.3639C86.5263 37.6083 86.3934 37.8421 86.2181 38.2778C88.4497 38.6444 90.5962 39.1757 89.4698 42.4593C89.6717 42.4859 89.8683 42.5178 90.0702 42.5443C94.4058 39.4308 98.7626 36.3491 103.072 33.1984C111.812 26.8013 120.472 20.3032 129.271 13.9964C132.002 12.0358 135.084 10.5587 138.006 8.85851C138.139 9.04447 138.272 9.23575 138.405 9.42171C137.554 10.0699 136.72 10.7447 135.854 11.3663C125.547 18.7517 115.202 26.0893 104.953 33.549C102.546 35.3024 100.431 37.4489 98.2313 39.4733C97.9284 39.7496 97.9391 40.3606 97.8062 40.8122C98.226 40.86 98.6882 41.046 99.0602 40.9291C106.026 38.7826 113.268 39.9143 120.345 39.1226C125.074 38.5966 129.845 38.1875 134.595 38.2141C139.775 38.2459 144.956 38.8038 150.126 39.2289C151.103 39.3086 152.044 39.8346 153 40.1534C152.947 40.3447 152.894 40.5412 152.835 40.7325C152.118 40.6156 151.401 40.4456 150.678 40.3925C146.831 40.0843 142.969 39.4839 139.127 39.5796C128.288 39.8399 117.449 40.3393 106.621 40.8707C104.182 40.9929 101.775 41.6676 99.3418 42.0077C98.4173 42.1352 96.9508 42.4221 96.6108 41.9758C95.1018 39.9727 93.9913 41.301 92.7321 42.114C91.8448 42.6878 90.9681 43.3147 90.0011 43.7079C89.4326 43.9364 88.6941 43.7451 88.0352 43.7398C88.0352 43.166 87.9449 42.5656 88.0671 42.0183C88.5187 39.994 88.3168 39.7549 86.2394 39.8665C85.4796 39.909 84.7091 39.7815 83.944 39.7336C84.2363 39.0642 84.5338 38.3947 84.8207 37.7252C84.9217 37.4915 85.0014 37.2471 84.8101 36.5829C82.0047 38.3203 79.1993 40.0577 76.394 41.7952C76.2292 41.5986 76.0698 41.4073 75.9051 41.2107C76.6437 40.35 77.3769 39.4839 78.1154 38.6232C78.0623 38.5488 78.0039 38.4744 77.9507 38.4053C75.7723 40.0684 73.6523 41.8058 71.3995 43.3573C70.4697 43.9948 69.2583 44.2286 68.1744 44.6431C68.7057 43.6495 69.1627 42.5975 69.7949 41.6676C70.4644 40.6847 71.3092 39.8133 71.8883 38.7188C68.4773 41.131 65.0821 43.5645 61.6498 45.9501C60.348 46.8534 59.041 47.7938 57.6117 48.4473C56.8466 48.798 55.8159 48.5801 54.902 48.6173C55.1039 47.831 55.072 46.848 55.5449 46.2955C57.8242 43.6229 60.2205 41.046 62.6274 38.4903C63.2172 37.8634 64.0195 37.4436 64.8324 36.8432C61.9686 35.0793 61.6976 34.4789 63.6103 32.3217C68.727 26.525 73.7745 20.6326 79.3375 15.2769C83.8165 10.9679 88.9703 7.33893 93.9063 3.50809C95.5641 2.2223 97.4396 1.19153 99.2939 0.192645C99.8784 -0.120835 100.729 0.0545011 101.456 0.00668208C101.164 0.676148 101.021 1.49438 100.543 1.9832C98.7679 3.81095 96.9296 5.58556 95.0221 7.2858C90.4262 11.3876 85.793 15.4522 81.1333 19.4796C80.1451 20.3351 78.9815 20.9833 77.8976 21.7271L77.515 21.1533C84.8048 14.7031 92.0998 8.2528 99.3896 1.80255C99.2408 1.61127 99.092 1.42531 98.938 1.23404C94.9955 4.1138 90.915 6.82354 87.132 9.8999C79.2631 16.297 71.9202 23.2627 65.6453 31.2591C64.9015 32.2048 64.5933 33.4853 64.0832 34.6117C65.3743 34.2451 66.8461 34.1548 67.9247 33.4587C70.7301 31.6522 73.3442 29.5535 76.0805 27.6301C76.7287 27.1732 77.5522 26.9607 78.2961 26.6365C78.4555 26.881 78.6149 27.1307 78.7743 27.3751C77.4779 28.443 76.2983 29.7182 74.8584 30.5418C68.6526 34.0804 63.4616 38.7826 58.7594 44.0692C57.9518 44.9778 57.1973 45.9395 56.4216 46.8799C56.5172 47.0606 56.6128 47.2412 56.7032 47.4166C57.4895 47.0871 58.3609 46.8852 59.0463 46.407C63.0843 43.5857 67.0639 40.6741 71.102 37.8528C72.0956 37.1567 72.8394 35.6796 74.4759 36.4819C73.9286 37.5021 73.4451 38.5647 72.8182 39.537C72.2178 40.4615 71.4686 41.2851 70.7832 42.1565L70.7885 42.1458Z"
                fill="white"
              />
              <path
                d="M41.6668 6.63227C37.2249 11.2495 32.5971 15.7072 28.3837 20.5263C21.1418 28.7937 14.1655 37.2896 7.06707 45.6791C5.64844 47.3581 4.22981 49.0424 2.69961 50.6204C2.20016 51.1411 1.36599 51.3643 0.654016 51.6406C0.49462 51.7043 0.0376827 51.4599 0.0111166 51.3111C-0.0313892 51.0349 0.0483091 50.5939 0.244898 50.4451C8.18285 44.4837 12.6566 35.5203 19.415 28.544C26.3275 21.4083 33.2134 14.2514 40.11 7.10514C40.2322 6.97763 40.3703 6.86605 40.5085 6.75978C41.5286 5.97874 42.5753 4.74076 43.8611 5.77152C44.1374 5.99468 43.3723 7.98714 42.6816 8.84257C37.3259 15.4841 31.8692 22.0459 26.4497 28.6343C26.1309 29.0222 25.844 29.4419 25.8599 30.1539C27.5442 28.5759 29.1966 26.966 30.9128 25.4304C35.1103 21.6793 39.3024 17.9175 43.5955 14.2674C44.4456 13.5448 45.7367 13.3269 46.8206 12.8753C46.3158 13.9751 46.0342 15.2556 45.2798 16.1429C38.8933 23.6452 32.4218 31.0678 25.9821 38.5275C25.4455 39.1545 24.9833 39.8452 24.8398 40.8707C26.2212 39.8505 27.5708 38.7826 29.0001 37.8315C29.4357 37.5446 30.0893 37.5924 30.6418 37.4861C30.5728 37.9643 30.4346 38.4478 30.4452 38.926C30.4824 40.2543 30.3177 41.6623 30.7215 42.8844C31.1732 44.2446 32.1986 43.4104 32.7937 42.8366C35.0677 40.6369 37.3365 38.4266 39.499 36.1153C46.895 28.2039 54.3494 20.3616 62.8293 13.5713C64.2692 12.4184 65.7888 11.361 67.3349 10.3621C67.675 10.1443 68.2913 10.3409 68.7801 10.3515C68.7164 10.835 68.828 11.4567 68.5623 11.7755C67.3828 13.1941 66.1448 14.5702 64.8484 15.8879C58.5522 22.2903 52.1763 28.6131 45.9439 35.0739C42.4372 38.7135 39.1483 42.5603 35.9179 46.4283C38.5692 44.6006 41.1514 42.6718 43.8824 40.9769C45.8748 39.739 47.9789 38.8676 50.1095 41.0619C50.6514 41.6198 51.8628 41.5401 53.3612 41.8961C51.4431 42.8684 50.0404 43.1713 48.813 41.7367C47.7929 40.5412 46.6346 40.5572 45.5029 41.216C43.4573 42.4062 41.3002 43.5379 39.5574 45.1C34.5099 49.6162 29.643 54.3291 24.707 58.9675C23.9206 59.706 23.113 60.4339 22.316 61.1619L21.7794 60.6465C26.4231 55.2801 30.9819 49.8341 35.7319 44.5634C40.4979 39.2661 45.402 34.091 50.3379 28.9531C55.3271 23.7568 60.4384 18.672 65.4913 13.5341C65.369 13.396 65.2468 13.2525 65.1193 13.1144C62.468 15.3725 59.6626 17.4819 57.1973 19.9206C50.1307 26.9181 43.2182 34.0644 36.2154 41.1204C35.1049 42.2415 33.9042 43.2935 32.6343 44.2233C31.6514 44.9459 30.2221 45.286 29.6536 43.9789C28.9788 42.4328 28.1074 42.4965 26.5294 43.2829C26.9438 42.1405 27.1989 41.4498 27.4486 40.7538C27.3636 40.6369 27.2733 40.52 27.1882 40.3978C25.1745 41.9174 23.1661 43.4316 21.1524 44.9512C20.9346 44.7918 20.7221 44.6377 20.5042 44.4783C21.0887 43.4423 21.535 42.2999 22.2735 41.386C25.2595 37.6934 28.2828 34.0272 31.3857 30.4355C35.2962 25.9086 39.3024 21.4668 43.2607 16.9824C43.6592 16.5308 43.994 16.026 44.3553 15.5479C44.2118 15.3885 44.063 15.2344 43.9196 15.075C41.3852 17.3597 38.8242 19.6231 36.3164 21.9343C33.6597 24.3784 31.0084 26.8278 28.4369 29.3569C25.929 31.8223 23.5221 34.3939 21.078 36.9229C18.6658 39.4202 16.2643 41.928 13.8627 44.4305C13.6183 44.2446 13.3792 44.0639 13.1348 43.8779C13.8096 42.8791 14.4153 41.8217 15.1697 40.8919C24.0853 29.8882 33.0222 18.9111 41.9484 7.91806C42.1078 7.72148 42.214 7.47707 42.3469 7.25391L41.6349 6.63227H41.6668Z"
                fill="white"
              />
            </svg>
          </a>
          <button
            style={{ color: "white", top: "20px", position: "relative" }}
            class="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon text-white"></span> */}
            <i className="fa fa-bars"></i>
          </button>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="/"
                  style={{ color: !openGalery ? "#BC9B5D" : "#A0A09F" }}
                >
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about" style={{ color: "#A0A09F" }}>
                  Acting
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link "
                  onClick={clickGalery}
                  style={{ color: openGalery ? "#BC9B5D" : "#A0A09F" }}
                >
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#footer"
                  style={{ color: "#A0A09F" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {openGalery ? (
        <GalleryScreen />
      ) : (
        <>
          <section className="banner">
            <div className="banner-container">
              {/* <img src={BANNER_IMAGE} className="banner-image" alt="Banner" /> */}
              {/* <video src="https://drive.google.com/file/d/1t_HeH81vUWoeqWe92rMV5gkFvyYJxJGx/view" /> */}
              <ReactPlayer
                url={process.env.PUBLIC_URL + "/video.mp4"}
                playing={true}
                loop={true}
                volume={0}
                controls={false}
                width="100%"
                height="auto"
              />
              <div className="banner-text">
                <h2>Marten</h2>
                <h4>Eckerstrom</h4>
                <h5>Actor</h5>
              </div>
            </div>
          </section>
          <section
            className="about"
            id="about"
            style={{ top: "-10px", position: "relative" }}
          >
            <div className="about-page">
              <div className=" p-3">
                <div className="row">
                  <div className="col-md-4">
                    <h1>ABOUT</h1>
                  </div>
                  <div className="col-md-8">
                    <div className="m-5">
                      <p className="m-5">
                        Marten Eckerstrom, a distinguished actor trained at the
                        prestigious Lee Strasberg Theatre & Film Institute and
                        the American Academy of Dramatic Arts, stands out with
                        his profound understanding of classical theater and the
                        nuances of method acting. His educational journey in New
                        York has laid a robust groundwork, allowing him to
                        deliver performances that resonate with authenticity and
                        emotional depth. Marten's versatility is evident across
                        a spectrum of roles in acclaimed TV productions and
                        films, as well as in his commanding stage appearances.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-page-image">
                  <img src={ABOUT_PAGE_IMAGE} className="mt-5" />
                </div>
              </div>
            </div>
          </section>
          <section className="portfolio">
            <div className="container-fluid mt-5 p-4">
              <div
                className="row mt-5"
                style={{ top: "200px", position: "relative" }}
              >
                <div className="col-md-6" style={{ position: "relative" }}>
                  <div className="text-contents">
                    <h1 className="" style={{ marginBottom: "0" }}>
                      ACTING
                    </h1>
                    <div className="svg-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="241"
                        height="96"
                        viewBox="0 0 241 96"
                        fill="none"
                      >
                        <path
                          d="M111.11 66.1523C138.531 45.2198 163.942 21.9605 191.096 0.836115C191.438 1.23642 191.788 1.64506 192.13 2.04537C185.041 7.85811 177.877 13.6041 170.872 19.517C163.8 25.4882 156.795 31.5427 149.898 37.7141C142.917 43.9605 136.104 50.3987 129.649 57.4374C130.75 56.8786 131.801 56.1531 132.968 55.8278C134.052 55.5276 135.262 55.6527 136.421 55.586C136.246 56.6118 136.096 57.6375 135.887 58.6466C135.812 59.0303 135.604 59.3972 135.328 60.0811C138.831 60.6565 142.2 61.4905 140.432 66.6444C140.749 66.6861 141.058 66.7361 141.375 66.7778C148.18 61.8908 155.018 57.0538 161.782 52.1084C175.501 42.0674 189.094 31.868 202.905 21.9688C207.191 18.8915 212.028 16.5731 216.615 13.9044C216.824 14.1963 217.032 14.4965 217.241 14.7884C215.906 15.8058 214.597 16.8649 213.238 17.8407C197.059 29.4328 180.821 40.9499 164.734 52.6588C160.956 55.4109 157.637 58.7801 154.184 61.9575C153.709 62.3912 153.726 63.3502 153.517 64.0591C154.176 64.1341 154.902 64.426 155.485 64.2426C166.419 60.8733 177.786 62.6497 188.894 61.4071C196.316 60.5815 203.805 59.9393 211.261 59.981C219.392 60.031 227.523 60.9067 235.638 61.5739C237.172 61.699 238.648 62.5246 240.15 63.025C240.066 63.3252 239.983 63.6338 239.891 63.934C238.765 63.7505 237.639 63.4837 236.505 63.4003C230.467 62.9166 224.404 61.9742 218.375 62.1243C201.362 62.5329 184.349 63.3169 167.353 64.1508C163.525 64.3426 159.747 65.4018 155.927 65.9355C154.476 66.1357 152.175 66.586 151.641 65.8855C149.272 62.7414 147.529 64.8263 145.553 66.1023C144.16 67.003 142.784 67.9871 141.266 68.6042C140.374 68.9628 139.215 68.6626 138.181 68.6542C138.181 67.7536 138.039 66.8112 138.231 65.9522C138.939 62.7748 138.623 62.3995 135.362 62.5746C134.169 62.6413 132.96 62.4412 131.759 62.3661C132.218 61.3153 132.685 60.2645 133.135 59.2137C133.294 58.8468 133.419 58.4632 133.118 57.4207C128.715 60.1478 124.312 62.8749 119.908 65.6019C119.65 65.2934 119.4 64.9931 119.141 64.6846C120.3 63.3335 121.451 61.9742 122.61 60.6231C122.527 60.5064 122.435 60.3896 122.352 60.2812C118.933 62.8915 115.605 65.6186 112.069 68.0538C110.61 69.0546 108.708 69.4215 107.007 70.072C107.841 68.5125 108.558 66.8612 109.551 65.4018C110.601 63.8589 111.927 62.4912 112.836 60.7733C107.482 64.5595 102.153 68.379 96.7658 72.1235C94.7226 73.5413 92.671 75.0174 90.4277 76.0432C89.2268 76.5936 87.6089 76.2517 86.1744 76.3101C86.4913 75.0758 86.4413 73.533 87.1835 72.6656C90.7613 68.4708 94.5224 64.426 98.3003 60.4147C99.226 59.4306 100.485 58.7717 101.761 57.8294C97.2662 55.0606 96.8409 54.1182 99.8431 50.7323C107.874 41.6337 115.797 32.3851 124.529 23.9787C131.559 17.2152 139.648 11.5192 147.396 5.50633C149.998 3.48813 152.942 1.87023 155.852 0.302377C156.77 -0.189664 158.104 0.0855452 159.247 0.0104882C158.788 1.06129 158.563 2.34559 157.812 3.11284C155.027 5.98169 152.141 8.76713 149.147 11.4358C141.933 17.874 134.661 24.2539 127.347 30.5754C125.796 31.918 123.97 32.9355 122.268 34.103L121.668 33.2023C133.11 23.078 144.56 12.9536 156.002 2.82929C155.769 2.52907 155.535 2.23718 155.294 1.93695C149.106 6.45705 142.701 10.7103 136.763 15.5389C124.412 25.5799 112.886 36.5132 103.037 49.0644C101.87 50.5488 101.386 52.5587 100.585 54.3267C102.612 53.7513 104.922 53.6095 106.615 52.517C111.018 49.6815 115.121 46.3874 119.416 43.3684C120.434 42.6512 121.726 42.3176 122.894 41.8089C123.144 42.1925 123.394 42.5845 123.645 42.9681C121.61 44.6444 119.758 46.6459 117.498 47.9385C107.757 53.4927 99.6096 60.8733 92.229 69.1713C90.9614 70.5974 89.7772 72.1069 88.5596 73.583C88.7097 73.8665 88.8598 74.1501 89.0016 74.4253C90.2359 73.9082 91.6036 73.5913 92.6794 72.8408C99.0175 68.4124 105.264 63.8423 111.602 59.4139C113.162 58.3214 114.329 56.003 116.898 57.2623C116.039 58.8635 115.28 60.5314 114.296 62.0576C113.353 63.5087 112.178 64.8013 111.102 66.169L111.11 66.1523Z"
                          fill="white"
                        />
                        <path
                          d="M65.4004 10.4101C58.4284 17.6572 51.1646 24.6542 44.5512 32.2183C33.1843 45.1948 22.2343 58.5299 11.0925 71.6982C8.86583 74.3336 6.63914 76.9772 4.23732 79.4541C3.45339 80.2714 2.14406 80.6217 1.02655 81.0553C0.776358 81.1554 0.0591469 80.7718 0.0174486 80.5383C-0.0492687 80.1046 0.0758263 79.4124 0.384394 79.1789C12.8438 69.8218 19.8658 55.7528 30.4739 44.8028C41.3238 33.6027 52.132 22.3691 62.9569 11.1523C63.1487 10.9521 63.3655 10.777 63.5824 10.6102C65.1836 9.38428 66.8265 7.44114 68.8447 9.05903C69.2783 9.4093 68.0774 12.5367 66.9933 13.8794C58.5869 24.3039 50.0221 34.6034 41.5156 44.9446C41.0152 45.5534 40.5649 46.2122 40.5899 47.3297C43.2336 44.8529 45.8272 42.3259 48.5209 39.9158C55.1093 34.028 61.6892 28.1235 68.4277 22.3942C69.762 21.26 71.7886 20.918 73.4899 20.2092C72.6976 21.9355 72.2556 23.9453 71.0714 25.3381C61.0471 37.1137 50.8894 48.7642 40.7817 60.4731C39.9394 61.4571 39.2139 62.5413 38.9887 64.1508C41.157 62.5496 43.2753 60.8734 45.5186 59.3806C46.2025 58.9302 47.2283 59.0053 48.0956 58.8385C47.9872 59.5891 47.7704 60.348 47.787 61.0985C47.8454 63.1834 47.5869 65.3935 48.2207 67.3116C48.9296 69.4465 50.5391 68.1372 51.4732 67.2365C55.0425 63.7839 58.6036 60.3146 61.9978 56.6868C73.6066 44.2691 85.3072 31.9597 98.6173 21.3017C100.877 19.492 103.262 17.8324 105.689 16.2645C106.223 15.9226 107.19 16.2311 107.958 16.2478C107.858 17.0067 108.033 17.9825 107.616 18.4829C105.764 20.7095 103.821 22.8695 101.786 24.9378C91.9038 34.987 81.8962 44.9112 72.1138 55.0523C66.6096 60.7649 61.4474 66.8029 56.3769 72.8741C60.5384 70.0053 64.5914 66.978 68.878 64.3176C72.0054 62.3745 75.3079 61.0068 78.6521 64.4511C79.5028 65.3267 81.4042 65.2016 83.756 65.7604C80.7454 67.2866 78.5437 67.7619 76.6172 65.5102C75.016 63.6338 73.198 63.6588 71.4216 64.6929C68.2109 66.561 64.825 68.3374 62.0896 70.7892C54.1669 77.8779 46.5277 85.2752 38.7802 92.5557C37.5459 93.715 36.2783 94.8575 35.0274 96L34.185 95.1911C41.4739 86.768 48.6293 78.2199 56.085 69.9469C63.5657 61.6323 71.2632 53.5094 79.0107 45.445C86.8417 37.2888 94.8644 29.3077 102.795 21.2433C102.604 21.0265 102.412 20.8013 102.212 20.5844C98.0502 24.1288 93.6468 27.4396 89.7772 31.2676C78.6855 42.2509 67.8356 53.4677 56.8439 64.5428C55.1009 66.3025 53.2162 67.9537 51.223 69.4132C49.6801 70.5474 47.4368 71.0811 46.5444 69.0295C45.4853 66.6027 44.1176 66.7028 41.6407 67.937C42.2912 66.144 42.6915 65.0599 43.0835 63.9674C42.95 63.7839 42.8083 63.6004 42.6748 63.4086C39.5141 65.7938 36.3617 68.1706 33.201 70.5557C32.859 70.3055 32.5255 70.0637 32.1835 69.8135C33.1009 68.1872 33.8014 66.3942 34.9606 64.9598C39.6475 59.1637 44.3928 53.4094 49.2632 47.7717C55.4011 40.6664 61.6892 33.6944 67.9023 26.6557C68.5278 25.9469 69.0532 25.1546 69.6203 24.404C69.3951 24.1538 69.1616 23.912 68.9364 23.6618C64.9584 27.2478 60.9387 30.8005 57.0024 34.4283C52.8325 38.2645 48.671 42.1091 44.6346 46.0788C40.6983 49.9484 36.9205 53.9848 33.0842 57.9545C29.298 61.8741 25.5285 65.8104 21.7589 69.7384C21.3753 69.4465 21 69.163 20.6164 68.8711C21.6756 67.3032 22.6263 65.6436 23.8105 64.1842C37.8045 46.9128 51.8318 29.683 65.8424 12.4283C66.0926 12.1197 66.2594 11.7361 66.4679 11.3858L65.3504 10.4101H65.4004Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="port-image">
                    <img
                      src={PORTFOLIO_IMAGE}
                      className="w-100 image-fluid"
                      style={{ width: "960px" }}
                    />
                  </div>
                </div>
              </div>
              <div style={{}}>
                <div
                  className="portfolio-page-content"
                  style={{ top: "150px", position: "relative" }}
                >
                  <h1>PORTFOLIO</h1>
                  <div className="">
                    <p className="mt-5 paragraph-text">
                      Marten Eckerstrom's acting portfolio is a tapestry of
                      diverse roles and performances, showcasing his adeptness
                      in both the nuances of character-driven storytelling and
                      the demands of physically-engaging roles. With a rich
                      foundation in the principles of classical theater and
                      method acting from the Lee Strasberg Theatre & Film
                      Institute and the American Academy of Dramatic Arts,
                      Marten brings a depth of understanding to his craft that
                      is rare and compelling. His journey in acting has taken
                      him from the intense spotlight of New York stages to the
                      dynamic and fast-paced world of television and film, where
                      he has not only embraced but also elevated the material
                      with his distinctive approach. Whether it's a
                      heart-wrenching drama or a high-stakes thriller, Marten's
                      performances are imbued with a realism that transcends the
                      screen and stage, captivating audiences across the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-5"
              style={{ top: "180px", position: "relative" }}
            >
              <div className="same-row-cards">
                <div className="same-row-card">
                  <img
                    style={{
                      width: `${imageWidth}px`,
                      minHeight: "370px",
                      maxHeight: "370px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/e6b9/eded/e322ab0f64d491a207ce4f6e1e37d503?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ou4eAhzStNqVbjAG6xu3PqitPkrgbQlJaxSzfm3U0tVu1tIGTzYOv1URUH4k9-X25QKfXk4ys4iYxgZdj6PDiF0g8iX~n~Z6RLDW~LG4OtfnRMJR6EIkw37cY-xzX9rdIOef8et6mZ2nKsZE0WkAE4ITBHFAcrz1CRQJGvKIBmKms28YzaiYUzJGCBa5O~6heCfW4yCUZVzFkkgdt14UkS3FPt2llBgZOpvkkXCqt6ilxLydd1nSJAWOSSnEfN6P5TitP7caUR2Ltui6OEe7obll2NO2vLk5w68ljD1Fq6WFUVFS58P7izf9APK0B-mYq3its1js3KrqPCstJrSiCw__"
                    className="image-fluid w-100"
                  />
                  <div className="card-text">
                    <h4 className="text-center mt-3">Theatre</h4>
                    <div
                      className="text-center"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <hr className="mt-3 text-center" />
                    </div>
                    <div className="mt-4">
                      <div className="text-center text-content">
                        <h4 style={{ fontWeight: "bold" }}>
                          The Hardest Color Co-Star{" "}
                        </h4>
                        <h6>Dir. Beth Guinella / AMC Theatre</h6>
                      </div>

                      <div className="text-center text-content mt-4">
                        <h4 style={{ fontWeight: "bold" }}>Somber Rhythms </h4>
                        <h6>Co-Star / Dir. Gabrielle Hansen / Tribeca Stage</h6>
                      </div>

                      <div className="text-center text-content mt-4">
                        <h4 style={{ fontWeight: "bold" }}>
                          A Midsummer Night's Dream{" "}
                        </h4>
                        <h6>
                          Lysander / Dir. Christopher James / Off-Broadway
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="same-row-card">
                  <img
                    style={{
                      width: `${imageWidth}px`,
                      minHeight: "370px",
                      maxHeight: "370px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/077d/6e49/a7d76ca465bbc7892588ffbc3faf8ebd?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~Hfl3t0Qg~Hzld7QqiWdkOCaiU1C2FvdUsoOubT2pZVJci50BWIIyaqW2elrG9jRaIDErEDyY0E5JiEW~DdPPyQ6F-IdZcZOaKcidpu4VoSwqcykHYZvZxBjq6EzhnI408uxGL8HhcvF7FFcKAl~VltRd4mKIW44jelyQqQD4~HrQj-V3iQJmLD~3zsNC8QPxpX5q3DCwjRlBICpf909cmd0AQlnIEXQJw8~JYpzWuWgfzNJ2JDbpHgtddKQa6VIIVvI-f6HOT49XhfmsZvQpqRLUEl8SFh5N-~-JikcqTmc17~QBXSv4tWa-plhHyYeCFmIEcroq4-IulWCfv6Hw__"
                    className="image-fluid w-100"
                  />
                  <div className="card-text">
                    <h4 className="text-center mt-3">TV & Movies</h4>
                    <div
                      className="text-center"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <hr className="mt-3 text-center" />
                    </div>
                    <div className="mt-4">
                      <div className="text-center text-content">
                        <h4 style={{ fontWeight: "bold" }}>
                          Open Heart Co-Star{" "}
                        </h4>
                        <h6>Dir. Alex Choi / SYFY</h6>
                      </div>

                      <div className="text-center text-content mt-4">
                        <h4 style={{ fontWeight: "bold" }}>
                          Crown of Lies Co-Star{" "}
                        </h4>
                        <h6>
                          Dir. Amanda Carlson The Unseen Co-Star Dir. Olivia
                          Thorne / Netflix
                        </h6>
                      </div>

                      <div className="text-center text-content mt-4">
                        <h4 style={{ fontWeight: "bold" }}>
                          Eternal Vigil Co-Star
                        </h4>
                        <h6>Dir. Michelle Taran / Sky Entertainment</h6>
                      </div>

                      <div className="text-center text-content mt-4">
                        <h4 style={{ fontWeight: "bold" }}>Lost Call</h4>
                        <h6>
                          Co-Star / Dir. Jack Morse / Skyland Entertainment
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="same-row-card">
                  <img
                    style={{
                      width: `${imageWidth}px`,
                      minHeight: "370px",
                      maxHeight: "370px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/e6b9/eded/e322ab0f64d491a207ce4f6e1e37d503?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ou4eAhzStNqVbjAG6xu3PqitPkrgbQlJaxSzfm3U0tVu1tIGTzYOv1URUH4k9-X25QKfXk4ys4iYxgZdj6PDiF0g8iX~n~Z6RLDW~LG4OtfnRMJR6EIkw37cY-xzX9rdIOef8et6mZ2nKsZE0WkAE4ITBHFAcrz1CRQJGvKIBmKms28YzaiYUzJGCBa5O~6heCfW4yCUZVzFkkgdt14UkS3FPt2llBgZOpvkkXCqt6ilxLydd1nSJAWOSSnEfN6P5TitP7caUR2Ltui6OEe7obll2NO2vLk5w68ljD1Fq6WFUVFS58P7izf9APK0B-mYq3its1js3KrqPCstJrSiCw__"
                    className="image-fluid w-100"
                  />
                  <div className="card-text">
                    <h4 className="text-center mt-3">Commercial</h4>
                    <div
                      className="text-center"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <hr className="mt-3 text-center" />
                    </div>
                    <div className="mt-4">
                      <div className="text-center text-content">
                        <h4 style={{ fontWeight: "bold" }}>The Rush Co-Star</h4>
                        <h6>Dir. Kat Winter / LuxMedia ABC Global</h6>
                      </div>

                      <div className="text-center text-content mt-4">
                        <h4 style={{ fontWeight: "bold" }}>Omnia Co-Star </h4>
                        <h6>Dir. Carl MacKenzie / Lime Street B / NBC</h6>
                      </div>

                      <div className="text-center text-content mt-4">
                        <h4 style={{ fontWeight: "bold" }}>Horizons Co-Star</h4>
                        <h6>Dir. Brandon Dern / SRTB</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default HomeScreen;
