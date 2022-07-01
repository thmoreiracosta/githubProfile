import githubImage from '../assets/github-big-logo.svg'
import linkedin from '../assets/linkedin.svg'

export function Logo() {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex float-lg-left">
        <a
          href="https://github.com/thmoreiracosta"
          target="_blank"
        >
          <img
            className="m-1"
            height="25px"
            src={githubImage}
            alt="logo github"
          />
        </a>
      </div>
      <div className="d-flex float-lg-right">
        <a
          href="https://www.linkedin.com/in/thmoreiracosta/"
          target="_blank"
        >
          <img
            className=""
            height="20px"
            src={linkedin}
            alt="logo github"
          />
        </a>
      </div>
    </div>
  )
}