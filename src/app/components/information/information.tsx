import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
    return (
        <div className="info">
            <SectionTitle text="Experience" />
            <div className="experience-info">
                <span>💻Internship - Compass UOL</span>
            </div>
            <SectionTitle text="Education" />
            <div className="educationa-infos">
                <span>🎓</span>
                <span>Studying Computer Science - Integrated Regional University</span>
            </div>
        </div>
    )
}
