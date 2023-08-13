import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./eclipse.png"
								alt="eclipse"
								className="work-image"
								link="https://www.eclipse.org/"
							/>
							<div className="work-title">Eclipse Foundation by IBM</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./GSoC.png"
								alt="GSoC"
								className="work-image"
							/>
							<div className="work-title">Google Summer of Code 2023</div>
							<div className="work-subtitle">
								Open Source Software Development
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
