import { BsPersonCircle } from "react-icons/bs";

const TEXT_PADDING_SIZE = "1";

function AboutMe() {
  return (
    <div className="bg-slate-200">
      <div className="px-8 my-4 py-4 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <BsPersonCircle size="1.75em" />
            <h2 id="about-me" className="text-2xl font-semibold py-2">
              ABOUT ME
            </h2>
          </div>
        </div>
        <div className="flex py-4">
          <div className="flex flex-col basis-1/2 min-w-[50%] pr-4">
            <p className={`py-${TEXT_PADDING_SIZE}`}>
              With over 7 years of experience in the tech industry, I have a
              proven track record of success. Beginning as a Customer Support
              Advisor at{" "}
              <a
                className="underline underline-offset-4 hover:opacity-75 text-indigo-600"
                target="_blank"
                href="https://squarespace.com"
              >
                Squarespace
              </a>
              , I gradually advanced to the role of Software Engineer in test.
              Currently, I work to enhance and maintain the test automation in
              the continuous deployment pipeline and lead QA efforts for the
              Payments team.
            </p>
            <p className={`py-${TEXT_PADDING_SIZE}`}>
              I love building things that can scale and exploring the inner
              workings of complex systems. My specialty is in automation and
              optimizing workflows, which allows me to develop innovative
              solutions that improve the efficiency and productivity of both my
              team and systems. I'm looking for an Individual Contributor role
              where I can take on collaborative team leadership
              responsibilities, and gain experience with architecture and cloud
              computing.
            </p>
          </div>
          <div className="flex flex-col basis-1/2 min-w-[50%] pl-4">
            <h3 className={`py-${TEXT_PADDING_SIZE} text-l font-semibold`}>
              HIGHLIGHTS
            </h3>
            <ul className="list-disc ml-0 pl-4">
              <li className={`py-${TEXT_PADDING_SIZE}`}>
                Improved error handling in crucial code utilized in over 6% of
                end-to-end (E2E) tests in the deployment pipeline, eliminating
                incomplete fixes and reducing toil caused by incomplete error
                logs.
              </li>
              <li className={`py-${TEXT_PADDING_SIZE}`}>
                Implemented SonarQube's{" "}
                <a
                  className="underline underline-offset-4 hover:opacity-75 text-indigo-600"
                  target="_blank"
                  href="https://docs.sonarqube.org/latest/user-guide/clean-as-you-code/"
                >
                  Clean as You Code
                </a>{" "}
                methodology to embedded team's workflow, providing timely
                feedback to developers through PR decorations and improving code
                quality visibility across the team.
              </li>
              <li className={`py-${TEXT_PADDING_SIZE}`}>
                Collaborated with the Test Infrastructure team to utilize their
                experimental API testing toolset and developed comprehensive
                purchase tests for multiple product lines, resulting in a 40%
                boost in testing speed and improved stability in comparison to
                the previous UI-based end-to-end (E2E) tests.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
