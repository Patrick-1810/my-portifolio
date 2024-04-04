import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import "./about.scss"

export function About() {
  return (
    <div className="about-me">
      <SectionTitle text="About me" />
      <p>Developer looking to evolve and improve his technical skills to become an expert in the field and add value to his company.</p>
      <div className="languagens-time">
        <div className="about-languagens">
          <Image
            src="/react.png"
            alt="React Logo"
            width={40}
            height={40}
            priority
          />
          <div className="about-unit">
            <div className="about-measure measure-1">
              <span>1 year</span>
            </div>
          </div>
        </div>
        <div className="about-languagens">
          <Image
            src="/js.png"
            alt="Javascript Logo"
            width={50}
            height={50}
            priority
          />
          <div className="about-unit">
            <div className="about-measure measure-2">
              <span>2 years</span>
            </div>
          </div>
        </div>
        <div className="about-languagens">
          <Image
            src="/ts.png"
            alt="Typescript Logo"
            width={50}
            height={50}
            priority
          />
          <div className="about-unit">
            <div className="about-measure measure-2">
              <span>2 years</span>
            </div>
          </div>
        </div>
        <div className="about-languagens">
          <Image
            src="/java.png"
            alt="Java Logo"
            width={50}
            height={50}
            priority
          />
          <div className="about-unit">
            <div className="about-measure measure-3">
              <span>4 months</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}