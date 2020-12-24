import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="Card">
      <div>
        <h1 className="second">
          <span>Latest Product</span>
        </h1>
      </div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="container carousel-inner no-padding">
          <div className="carousel-item active">
            <div className="col-xs-3 col-sm-3 col-md-3">
              <img
                src="https://images.ctfassets.net/od02wyo8cgm5/5kpFyd0r2uP97j7TIwahLc/49be548876c61e93ac58efab04906d5f/cloud_waterproof_2-fw19-black_lunar-w-g1.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81QnGdrGwsL._UL1500_.jpg"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3">
              <img
                src="https://images.ctfassets.net/od02wyo8cgm5/3EfoQCOVEYhdsiLUv3t2O9/23b02d79f25e28186b6704d9eabb5aca/cloud_x-fw20-white_black-m-g1.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3">
              <img
                src="https://www.rei.com/media/5bbcbee2-1b95-4b9a-9347-065a3937152c?size=784x588"
                alt=""
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-xs-3 col-sm-3 col-md-3">
              <img
                src="https://media.wired.com/photos/5c7082419d5bf17d94aac203/191:100/w_2400,h_1256,c_limit/Topo-Athletic-Ultraventure_2.jpg"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3">
              <img
                src="https://cbsnews3.cbsistatic.com/hub/i/r/2019/10/10/c10e71d7-8f32-4485-bf8d-8666e04005a1/thumbnail/1200x630/104310b882aeea87123e5606bc31576b/screen-shot-2019-10-10-at-3-05-25-pm.png"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3">
              <img
                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/194837/01/sv01/fnd/IND/fmt/png/PUMA-x-one8-Virat-Kohli-SOFTRIDE-Rift-Tech-Shoes"
                alt=""
              />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3">
              <img
                src="https://dks.scene7.com/is/image/GolfGalaxy/19NIKMRMX270BLKPNMNS_Black_White_Solar_Red?qlt=70&wid=600&fmt=pjpeg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};

export default Card;
