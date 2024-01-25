import React from "react";
import "./Portfolio.css";
import { PORTFOLIO_IMAGE } from "../../Contants/Images/urls";

function Portfolio() {
  return (
    <div>
      <div
        className="portfolio-page mt-5"
        style={{
          top: "30px",
          position: "relative",
        }}
      >
        <div className="container-fluid  p-5">
          <div className="row">
            <div className="col-md-4">
              <div className="left-title">
                <h1 style={{ color: "#BC9B5D" }}>ACTING</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="241"
                  height="96"
                  viewBox="0 0 241 96"
                  fill="none"
                  className="svg-image"
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
            <div className="col-md-8">
              <div className="m-5">
                <img src={PORTFOLIO_IMAGE} className="portfolio-image" />
              </div>
            </div>
          </div>
          <div className="portfolio-page-content">
            <h1>PORTFOLIO</h1>
            <div className="container">
              <p className="mt-5">
                Marten Eckerstrom's acting portfolio is a tapestry of diverse
                roles and performances, showcasing his adeptness in both the
                nuances of character-driven storytelling and the demands of
                physically-engaging roles. With a rich foundation in the
                principles of classical theater and method acting from the Lee
                Strasberg Theatre & Film Institute and the American Academy of
                Dramatic Arts, Marten brings a depth of understanding to his
                craft that is rare and compelling. His journey in acting has
                taken him from the intense spotlight of New York stages to the
                dynamic and fast-paced world of television and film, where he
                has not only embraced but also elevated the material with his
                distinctive approach. Whether it's a heart-wrenching drama or a
                high-stakes thriller, Marten's performances are imbued with a
                realism that transcends the screen and stage, captivating
                audiences across the globe.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ top: "240px", position: "relative" }}
          className="row porfolio-cards"
        >
          <div className="row">
            <div className="col-md-4 px-0">
              <div className="">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e6b9/eded/e322ab0f64d491a207ce4f6e1e37d503?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ou4eAhzStNqVbjAG6xu3PqitPkrgbQlJaxSzfm3U0tVu1tIGTzYOv1URUH4k9-X25QKfXk4ys4iYxgZdj6PDiF0g8iX~n~Z6RLDW~LG4OtfnRMJR6EIkw37cY-xzX9rdIOef8et6mZ2nKsZE0WkAE4ITBHFAcrz1CRQJGvKIBmKms28YzaiYUzJGCBa5O~6heCfW4yCUZVzFkkgdt14UkS3FPt2llBgZOpvkkXCqt6ilxLydd1nSJAWOSSnEfN6P5TitP7caUR2Ltui6OEe7obll2NO2vLk5w68ljD1Fq6WFUVFS58P7izf9APK0B-mYq3its1js3KrqPCstJrSiCw__"
                  className="card-image"
                  style={{ width: "100%", height: "90%", objectFit: "cover" }}
                />
              </div>
              <div className="mt-5">
                <h4>Theatre</h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <hr />
                </div>
                <div className="content">
                  <span className="bold">The Hardest Color Co-Star</span>
                  <br />
                  <span className="semi-bold">
                    {" "}
                    Dir. Beth Guinella / AMC Theatre
                    <span />
                    <br />
                    Somber Rhythms Co-Star / Dir. Gabrielle Hansen / Tribeca
                    Stage A Midsummer Night's Dream Lysander / Dir. Christopher
                    James / Off-Broadway
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-0">
              <div className="">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e6b9/eded/e322ab0f64d491a207ce4f6e1e37d503?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ou4eAhzStNqVbjAG6xu3PqitPkrgbQlJaxSzfm3U0tVu1tIGTzYOv1URUH4k9-X25QKfXk4ys4iYxgZdj6PDiF0g8iX~n~Z6RLDW~LG4OtfnRMJR6EIkw37cY-xzX9rdIOef8et6mZ2nKsZE0WkAE4ITBHFAcrz1CRQJGvKIBmKms28YzaiYUzJGCBa5O~6heCfW4yCUZVzFkkgdt14UkS3FPt2llBgZOpvkkXCqt6ilxLydd1nSJAWOSSnEfN6P5TitP7caUR2Ltui6OEe7obll2NO2vLk5w68ljD1Fq6WFUVFS58P7izf9APK0B-mYq3its1js3KrqPCstJrSiCw__"
                  className="card-image"
                  style={{ width: "100%", height: "90%", objectFit: "cover" }}
                />
              </div>
              <h4>Theatre</h4>
            </div>
            <div className="col-md-4 px-0">
              <div className="">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e6b9/eded/e322ab0f64d491a207ce4f6e1e37d503?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ou4eAhzStNqVbjAG6xu3PqitPkrgbQlJaxSzfm3U0tVu1tIGTzYOv1URUH4k9-X25QKfXk4ys4iYxgZdj6PDiF0g8iX~n~Z6RLDW~LG4OtfnRMJR6EIkw37cY-xzX9rdIOef8et6mZ2nKsZE0WkAE4ITBHFAcrz1CRQJGvKIBmKms28YzaiYUzJGCBa5O~6heCfW4yCUZVzFkkgdt14UkS3FPt2llBgZOpvkkXCqt6ilxLydd1nSJAWOSSnEfN6P5TitP7caUR2Ltui6OEe7obll2NO2vLk5w68ljD1Fq6WFUVFS58P7izf9APK0B-mYq3its1js3KrqPCstJrSiCw__"
                  className="card-image"
                  style={{ width: "100%", height: "90%", objectFit: "cover" }}
                />
              </div>
              <h4>Theatre</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
