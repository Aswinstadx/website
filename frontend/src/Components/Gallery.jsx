import React, { useState } from "react";
import "./Gallery.css"; // Create this file for styling

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    "https://s3-alpha-sig.figma.com/img/077d/6e49/a7d76ca465bbc7892588ffbc3faf8ebd?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A~Hfl3t0Qg~Hzld7QqiWdkOCaiU1C2FvdUsoOubT2pZVJci50BWIIyaqW2elrG9jRaIDErEDyY0E5JiEW~DdPPyQ6F-IdZcZOaKcidpu4VoSwqcykHYZvZxBjq6EzhnI408uxGL8HhcvF7FFcKAl~VltRd4mKIW44jelyQqQD4~HrQj-V3iQJmLD~3zsNC8QPxpX5q3DCwjRlBICpf909cmd0AQlnIEXQJw8~JYpzWuWgfzNJ2JDbpHgtddKQa6VIIVvI-f6HOT49XhfmsZvQpqRLUEl8SFh5N-~-JikcqTmc17~QBXSv4tWa-plhHyYeCFmIEcroq4-IulWCfv6Hw__",
    "https://s3-alpha-sig.figma.com/img/38f8/e6c3/73470c49e802ae31467a6f93edfc3be5?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KqpGRhKE09RWLX1NJ5od9qROqJzB6hLnjoK3i~O4WlTC6TQPi7CSeLv2X~ktbG1C-LKt0Q7QqwOo~HQ-Dl7~WBMCiIXu6HMHeKrqf9jnRqG94MmLybwHSYPhhm2RuitkxioaXO9Tr90vzvspOB6eTtWeLwyQVXIM1q~vHK~zS49Osxb14ZGNOiJhJ9VQhlS5n~7cSxV4ecsshJspGDTdFyiKHkJnRbjKoiCUO69rbsiplZg9IbwntV1eVbFHsd-yDFHK34M5v0PrXPpCAZjU8xwl-Z3Da6ihY0WuRGOsrtyuRlJK~uxewErw30MUBvQPadZBBuWnbBOwDSjXrYZyfA__",
    "https://s3-alpha-sig.figma.com/img/e6b9/eded/e322ab0f64d491a207ce4f6e1e37d503?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ou4eAhzStNqVbjAG6xu3PqitPkrgbQlJaxSzfm3U0tVu1tIGTzYOv1URUH4k9-X25QKfXk4ys4iYxgZdj6PDiF0g8iX~n~Z6RLDW~LG4OtfnRMJR6EIkw37cY-xzX9rdIOef8et6mZ2nKsZE0WkAE4ITBHFAcrz1CRQJGvKIBmKms28YzaiYUzJGCBa5O~6heCfW4yCUZVzFkkgdt14UkS3FPt2llBgZOpvkkXCqt6ilxLydd1nSJAWOSSnEfN6P5TitP7caUR2Ltui6OEe7obll2NO2vLk5w68ljD1Fq6WFUVFS58P7izf9APK0B-mYq3its1js3KrqPCstJrSiCw__",
    "https://s3-alpha-sig.figma.com/img/cac6/ce79/ee1cccd4c1bb28e165f37f1983c6a189?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jj~7janwvruTzywV-r4~K0YsxtQaPCp9PeTEBV1eWeL8jEOQyFOpeb00lWwYy8YasqWaoOqSTa8L~QXCXo9oxxPf-58vLM~jQbm2GbrLVZWOFEYr9ycq13x8vH~ivXoTEJsYN5LcywVXkju41pOkz2g~j9JA0TwFh1urcmDDyK4xSekJ-sMyMokgyqeDR12NrvbhW3ZKysHlzPv5s0FbVVM4~QHRs11NTopwIay3W-6pGgDqIG7WFRcUpgk44WyF-3t8FLKxP47~-ahFwwqK5uXlxG2FJKnmM7v90nPUw1H3dIg8KK67N7jClHp1c0WL~-x0MrLj~gOoXDVbkX0uJQ__",
    "https://s3-alpha-sig.figma.com/img/8e60/68fa/5180e8193b07f9437d28170472b7bf83?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKfJUDRb2NZlb3CagWVw21WwhbmbTKhOs4GFqCyT7WFQ9ry6RmdtYYF-3fDaHovkK9OyP9-83enyh7z8-A5NwBOPQ0yxeJXtiw14ryITe9Kn8cEidwPlTOjnbCrsBvwQ00W7TOQ79L1AOn7CqSyiQetth1YiwOYIVhl3GuqWN0laFuAXfJ9mFpoCko-KO9AVbgFdR6BnxTWDg5rZFIrShj5m4ZTp8-s5mm1HNKMjgks0EDUnwKpwLtJ5p6VaiVj8k4~BOgAuxmcTurxdOdmbt-VSrWpNabF-riIneP6TfE6QdLxgiZwDRRCI2NuTeP1wx7~O0F-oKhLvAdrKGiV~Kw__",
    "https://s3-alpha-sig.figma.com/img/cfab/b667/ffb62f97eea10fcc8c00b5b0bf947b0b?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMXc~ftDQed3V02U5goHRNKOQd5guZG55opg7dxJubTcoTBglOayo1T0tJS52XVMJdSNvFtVMhT1d4paE~BYSNE8OTKSSajRNYbPGJB0O8AjEe2iIEuCkdTMHz3shCiX1z4L1L0GyGWvEKj6ka-fP91n1Q09sSwZ64fbCPccfjy-LZGrbH9fGt~V7kiNB1891nK46dnchq6k8YNg1uTIy6ZscHYnVa-92BunOJ2Hce9fNHlm2wsPMqXy9q2Fio7JKBAFC1myUF7o1wDDnImlIs6OwDYim2ELGpwCUN9QoHnKHexcz90VWjMbE6Y1igrY3Hv9w-gAGxLZxhoCbg9OAw__",
    "https://s3-alpha-sig.figma.com/img/e6b9/eded/e322ab0f64d491a207ce4f6e1e37d503?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ou4eAhzStNqVbjAG6xu3PqitPkrgbQlJaxSzfm3U0tVu1tIGTzYOv1URUH4k9-X25QKfXk4ys4iYxgZdj6PDiF0g8iX~n~Z6RLDW~LG4OtfnRMJR6EIkw37cY-xzX9rdIOef8et6mZ2nKsZE0WkAE4ITBHFAcrz1CRQJGvKIBmKms28YzaiYUzJGCBa5O~6heCfW4yCUZVzFkkgdt14UkS3FPt2llBgZOpvkkXCqt6ilxLydd1nSJAWOSSnEfN6P5TitP7caUR2Ltui6OEe7obll2NO2vLk5w68ljD1Fq6WFUVFS58P7izf9APK0B-mYq3its1js3KrqPCstJrSiCw__",
    "https://s3-alpha-sig.figma.com/img/66b5/4ab2/c2569d0206bfc1b9f6afe0830224f141?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGt9z~WHlBVt~aDVzxtvqImp~2vEQ2AKzdlJZWSPQUNohX2sb6mRsK9HAD0NJYKXWokxKONChpz5FzbjIruOrOl3NW93cD3ZnNufILuPqdNNBrsYodk4KNLhP3zDRK7mb4EQw8gj~Ju7m~Jt~sAJh7dpD1Th9hjFFh8bG7dBwmWsZLoEkf5ZlPf92yApcfQgizOAR-AO5gbwXvD~940N8yzU~BnUhcxRq0btFn69hKoX0w4OOALgd5yZvoXltkRxEZqkHPi6lGmo2kCl9i0q13TZ01Tep445U5yfA1loal4HtdLKb7paA4WuQryA2g3QImN4seqV0SBxJm-IxGuq2A__",
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrevClick = () => {
    setSelectedImage((prevSelected) =>
      prevSelected === 0 ? images.length - 1 : prevSelected - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImage((prevSelected) =>
      prevSelected === images.length - 1 ? 0 : prevSelected + 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="image-gallery-box">
        <div
          className="nav-arrow navarrow1"
          onClick={handlePrevClick}
         
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="96"
            viewBox="0 0 75 96"
            fill="none"
            className="nav-arrow-icons"
          >
            <path
              d="M0 48L75 0.368607V95.6314L0 48Z"
              fill="url(#paint0_linear_132_2097)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_132_2097"
                x1="0"
                y1="48"
                x2="100"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BC9B5D" />
                <stop offset="1" stop-color="#BC9B5D" stop-opacity="0.49" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="main-image-container">
          <img src={images[selectedImage]} alt={`Image ${selectedImage + 1}`} />
        </div>
        <div
          className="nav-arrow navarrow2"
          onClick={handleNextClick}
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="96"
            viewBox="0 0 75 96"
            fill="none"
            className="nav-arrow-icons"
          >
            <path
              d="M75 48L0 95.6314V0.368603L75 48Z"
              fill="url(#paint0_linear_132_2096)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_132_2096"
                x1="75"
                y1="48"
                x2="-25"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BC9B5D" />
                <stop offset="1" stop-color="#BC9B5D" stop-opacity="0.49" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="image-list-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === selectedImage ? "selected" : ""}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
