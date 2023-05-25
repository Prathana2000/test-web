import React from "react";
import "./Layout.scss";
import { Button, Space } from "antd";
import { useTranslation } from "react-i18next";

function Layout() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container">
        <Button type="primary" className="mr-1">
          <span className="triangle-left"></span>
          <p>{t('MOVE_LEFT')}</p>
        </Button>
        <Button type="primary" className="mr-1">
          <span className="triangle-up mr-3"></span>
          <span className="triangle-down"></span>
          <p>{t('MOVE_UP_DOWN')}</p>
        </Button>
        <Button type="primary">
          <span className="triangle-right"></span>
          <p>{t('MOVE_RIGHT')}</p>
        </Button>
      </div>

      <div className="my-3">
        <div className="right-container">
          <Button type="primary" className="mr-1">
            <span className="rectangle"></span>
          </Button>
          <Button type="primary" className="mr-1">
            <span className="parallelogram"></span>
          </Button>
          <Button type="primary" className="mr-1">
            <span className="oval"></span>
          </Button>
        </div>
        <div className="left-container my-1">
          <Button type="primary" className="mx-1">
            <span className="square"></span>
          </Button>
          <Button type="primary" className="mr-1">
            <span className="trapezoid"></span>
          </Button>
          <Button type="primary">
            <span className="circle"></span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Layout;
