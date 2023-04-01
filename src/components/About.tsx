const TEXT_PADDING_SIZE = "1";

function AboutMe() {
  return (
    <div className="my-4">
      <div className="flex flex-col items-center text-center">
        <h2 id="about-me" className="text-2xl font-semibold py-2">
          ABOUT ME
        </h2>
        <hr className="w-[200px]" />
      </div>
      <div className="flex py-4">
        <div className="flex flex-col basis-1/2 min-w-[50%] pr-4">
          <p className={`py-${TEXT_PADDING_SIZE}`}>
            With over 7 years of experience in the tech industry, I have a
            proven track record of success. Beginning as a Customer Support
            Advisor at{" "}
            <a
              className="underline underline-offset-4 hover:opacity-75"
              target="_blank"
              href="https://squarespace.com"
            >
              Squarespace
            </a>
            , I gradually advanced to the role of Software Engineer in test.
            Presently, I work to enhance and maintain the test automation in our
            continuous deployment pipeline and lead QA efforts for the Payments
            team.
          </p>
          <p className={`py-${TEXT_PADDING_SIZE}`}>
            I love building things that can scale and exploring the inner
            workings of complex systems. My specialty is in automation and
            optimizing workflows, which allows me to develop innovative
            solutions that improve the efficiency and productivity of both my
            team and systems. I'm looking for an Individual Contributor role
            where I can take on collaborative team leadership responsibilities,
            and gain experience with architecture and cloud computing.
          </p>
        </div>
        <div className="flex flex-col basis-1/2 min-w-[50%] pl-4">
          <h3 className={`py-${TEXT_PADDING_SIZE} text-l font-semibold`}>
            HIGHLIGHTS
          </h3>
          <ul className="list-disc">
            <li className={`py-${TEXT_PADDING_SIZE}`}>
              Enhanced error handling in crucial code utilized in over 6% of our
              end-to-end (E2E) tests, eliminating incomplete fixes and reducing
              toil due to incomplete error logs, resulting in a streamlined
              deployment process.
            </li>
            <li className={`py-${TEXT_PADDING_SIZE}`}>
              Implemented SonarQube's{" "}
              <a
                className="underline underline-offset-4 hover:opacity-75"
                target="_blank"
                href="https://docs.sonarqube.org/latest/user-guide/clean-as-you-code/"
              >
                Clean as You Code
              </a>{" "}
              methodology to my embedded team's workflow, providing timely
              feedback to developers through PR decorations and improving code
              quality visibility across the team.
            </li>
            <li className={`py-${TEXT_PADDING_SIZE}`}>
              Collaborated with Test Infrastructure to utilize their
              experimental API testing toolset and developed comprehensive
              purchase tests for multiple product lines, resulting in a 40%
              boost in testing speed and improved stability in comparison to the
              previous UI-based end-to-end (E2E) tests.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
