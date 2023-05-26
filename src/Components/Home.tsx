import React from "react";
import ContactApi from "./ContactApi";
import Layout from "./Layout";
import Form from "./Form";
import { Card, Space } from "antd";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="card">
      <div>
        <Link to="/layout">
          <Card title="Test 1" style={{ width: 300 }}>
            <p>Layout & Style</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default Home;
