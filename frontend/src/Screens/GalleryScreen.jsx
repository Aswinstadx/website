import React from "react";

function GalleryScreen() {
  return (
    <div>
      <div className="row gallery-banner">
        <div className="col-md-6">
          <h1>VIDEO</h1>
        </div>
        <div className="col-md-6">
          <h1>IMAGES</h1>
        </div>
      </div>
      <div>
        <div className="about-page p-4">
          <div className="container-fluid p-5">
            <h4 className="text-center title">VIDEO GALLERY</h4>
            <div className="row mt-4">
              <div className="col-md-6">
                <img
                  src="https://s3-alpha-sig.figma.com/img/1769/506c/027620a13843027607a8df79f2b0f2fb?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mbZrOw8-SCm5KYKdkLOikzb3WX0oeX7WIXLwDXsIzSrfk3wMrttGGWZybSa91DUUR2qTIadTWcaIEfB32yyXKBb-TjkCsBLJ9Hk4hm7rqfojyl9XzGruYOVmy8kvEvlme5XCE22UKU56Qm2dDl7CyDD3YxcJDiKXa6J587gcNAHNQSVnYNUcgnStYcla~VYH6VNWqURuLzbx2akwu68xtOXhNYqevXzdxzTLAHKSwmiJvRqrcBF5POXyswq0oR-ZNmK9pXTT4G~afeq5lyi5n3aIcjbBIyJwpDKmV~VanlWcC0CEt9gaDJGfpyWgwtZD0oMAkkg5xMzbvdfn4o33GQ__"
                  className="gallery-image w-100 image-fluid"
                />
              </div>
              <div className="col-md-6">
                <img
                  src="https://s3-alpha-sig.figma.com/img/8c71/daef/91932bc6d1fbe50f55c76e921a407fa3?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oeNztgZC2x-w3CQIq2J5~a800qwZgzo2dEMToHptza5GwIEmkoSB7qfF4kb4godtGAVM7yFnwPVH9uKLZck0xd9QcqZA8kHlO7Lo8FLXMcN1qTlm2usF0ERUkcSMBD~hbiPQQ374LZ4mlt8GKrV1juSpdl9BQEcj5H-Ro-ceea2XHkuSi8wYUTh27BhtHMNFhgx6BEhehMBW5u7iSatE1Tkx0~gEX3lD12QSmpdUxDWmptkw6Gm6EQcrWizY8~Au9UAbsKhUIAvrzdpNmV556DFypqnxrSkrjfF5gQoUiWxO0s02D-obmxd5OtqeI1BIqbGGTW3vAQiMBkt0JB3JIQ__"
                  className="gallery-image w-100 image-fluid"
                />
              </div>
            </div>
            <div className="mt-5 ">
              <h4 className="text-center title">IMAGE GALLERY</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryScreen;
