import React from "react";
import "./ProjectPageWindow.styles.scss";

const ProjectPageWindow = ({
  openWindow,
  openWindowHandler,
  url,
  ımageAlt,
}) => {
  return (
    <>
      <div className={`${openWindow ? "open-window" : "open"}`}>
        <div className="open-window-close" onClick={openWindowHandler}>
          <div className="span-close">
            <span>&#10007;</span>
          </div>
          <div className="open-window-img">
            <img src={url} alt=""></img>
            <div className="project-logo">
              <div className="lg-logos">
                <i className="fa-brands fa-html5"></i>
              </div>
              <div className="lg-logos">
                <i className="fa-brands fa-react"></i>
              </div>
              <div className="lg-logos">
                <i className="fa-brands fa-css3"></i>
              </div>
              <div className="lg-logos">
                <i className="fa-brands fa-square-js"></i>
              </div>
            </div>
          </div>
          {ımageAlt === 1 ? (
            <div className="open-window-text">
              <h3>Weather App</h3>
              <p>
                İstenilen şehirin hava durumunu ve detaylarını bildiren hava
                uygulması react ile api üzerinden veriler alınmıştır
              </p>
              <div className="project-logo">
                <div className="lg-logos">
                  <i className="fa-brands fa-html5"></i>
                </div>
                <div className="lg-logos">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="lg-logos">
                  <i className="fa-brands fa-css3"></i>
                </div>
                <div className="lg-logos">
                  <i className="fa-brands fa-square-js"></i>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {ımageAlt === 2 ? (
            <div className="open-window-text">
              <h3>Bankist</h3>
              <p>
                Banka Transfer Uygulamasıdır para gönderim alma ve isteme
                işlemlerini gerçekleştirir
              </p>
              <div className="project-logo">
                <div className="lg-logos">
                  <i className="fa-brands fa-html5"></i>
                </div>
                <div className="lg-logos">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="lg-logos">
                  <i className="fa-brands fa-css3"></i>
                </div>
                <div className="lg-logos">
                  <i className="fa-brands fa-square-js"></i>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {ımageAlt === 3 ? (
            <div className="open-window-text">
              <h3>Clothing E-Shop</h3>
              <p>
                Api üzerinden alınan ürünlerin listeliyim sepete eklmem ve
                fiyatlarını toplayna e-shop uygulaması
              </p>
              <div className="project-logo">
                <div className="lg-logos">
                  <i className="fa-brands fa-html5"></i>
                </div>
                <div className="lg-logos">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="lg-logos">
                  <i className="fa-brands fa-css3"></i>
                </div>
                <div className="lg-logos">
                  <i className="fa-brands fa-square-js"></i>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectPageWindow;
