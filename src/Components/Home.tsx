import { Card } from "antd";
import { Link } from "react-router-dom";
import "./Home.scss";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="card">
      <div className="layout-card">
        <Link to="/layout">
          <Card title={t('TEST_ONE')} style={{ width: 300 }}>
            <p>{t('LAYOUT_STYLE')}</p>
          </Card>
        </Link>
      </div>
      <div className="api-card">
        <Link to="api">
          <Card title={t('TEST_TWO')} style={{ width: 300 }}>
            <p>{t('FORM_TABLE')}</p>
          </Card>
        </Link>
      </div>
      <div className="form-card">
        <Link to="/form">
          <Card title={t('TEST_THREE')} style={{ width: 300 }}>
            <p>{t('CONNECT_API')}</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default Home;
