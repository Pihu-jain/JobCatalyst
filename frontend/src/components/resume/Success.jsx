import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../../Context/ThemeContext";
import "./Success.css";
import { Link } from "react-router-dom";

const Success = () => {
  const { theme } = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let userId = localStorage.getItem("userId");
      const url = `http://localhost:5000/api/resume/get-resume/${userId}`;
      try {
        const response = await axios.get(url);
        if (response.data) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error(error);
        alert("Server error");
      }
    };
    fetchData();
  }, []);


  return (
    <div
      className={`resume-container ${theme === "dark" ? " dark-theme" : ""}`}
      style={{ backgroundColor: "rgb(246, 242, 242)" }}
    >
      <div className="resume-header">
        <h1>{data.name}</h1>
        <p className="mt-2 font-bold">
          Email:{" "}
          <span
            className="blue-color font-normal"
            style={{ textDecoration: "underline" }}
          >
            {data.email}
          </span>
        </p>
        <p className="mb-2 font-bold">
          Contact: <span className="font-normal">(+91) {data.phone}</span>
        </p>

        <div>
          <p className="mb-2 font-bold" style={{ display: "inline-block" }}>
            LinkedIn:
          </p>
          <span>
            <Link
              to={data.linkedin}
              className="blue-color"
              style={{ textDecoration: "underline" }}
            >
              {data.linkedin}
            </Link>
          </span>
        </div>
        <div className="mt-2">
          <p className="mb-2 font-bold" style={{ display: "inline-block" }}>
            GitHub:
          </p>
          <span>
            <Link
              to={data.github}
              className="blue-color"
              style={{ textDecoration: "underline" }}
            >
              {data.github}
            </Link>
          </span>
        </div>
      </div>
      <hr style={{ border: "1px solid #333", margin: "10px 0" }} />

      <div className="container">
        <div className="resume-section">
          <h3>Skills</h3>
          <p>{data.skills}</p>
        </div>

        <div className="resume-section">
          <h3>Experience</h3>
          <p>
            <b>
              {data.exp1_org}, {data.exp1_pos}
            </b>{" "}
            ({data.exp1_dur})
          </p>
          <p>{data.exp1_desc}</p>
          <p>
            <b>
              {data.exp2_org}, {data.exp2_pos}
            </b>{" "}
            ({data.exp2_dur})
          </p>
          <p>{data.exp2_desc}</p>
        </div>

        <div className="resume-section">
          <h3>Projects</h3>
          <p>
            <b>{data.proj1_title}</b> (
            <a href={data.proj1_link}>{data.proj1_link}</a>)
          </p>
          <p>{data.proj1_desc}</p>
          <p>
            <b>{data.proj2_title}</b> (
            <a href={data.proj2_link}>{data.proj2_link}</a>)
          </p>
          <p>{data.proj2_desc}</p>
        </div>

        <div className="resume-section">
          <h3>Education</h3>
          <p>
            <b>{data.edu1_school}</b> ({data.edu1_qualification},{" "}
            {data.edu1_year})
          </p>
          <p>{data.edu1_desc}</p>
          <p>
            <b>{data.edu2_school}</b> ({data.edu2_qualification},{" "}
            {data.edu2_year})
          </p>
          <p>{data.edu2_desc}</p>
        </div>

        <div className="resume-section">
          <h3>Extra-Curriculars/Activities</h3>
          <ul style={{ listStyleType: "circle" }}>
            <li>
              <b>Languages: </b>
              {data.extra_1}
            </li>
            <li>
              <b>Hobbies: </b>
              {data.extra_2}
            </li>
          </ul>
        </div>
      </div>

      <div className="resume-footer">
        <p>Generated by Resume Generator</p>
      </div>
    </div>
  );
};

export default Success;
