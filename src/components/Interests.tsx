const TEXT_PADDING_SIZE = "1";

function Interests() {
  return (
    <div className="my-4">
      <div className="flex flex-col items-center text-center">
        <h2 id="interests" className="text-2xl font-semibold py-2">
          INTERESTS
        </h2>
        <hr className="w-[200px]" />
      </div>
      <div className="flex py-4">
        <div className="flex flex-col basis-1/2 min-w-[50%] pr-4">
          <p className={`py-${TEXT_PADDING_SIZE}`}>
            My personal interests include:
          </p>
          <ul className="list-disc">
            <li className={`py-${TEXT_PADDING_SIZE}`}>
              <b>Cloud Computing.</b> It's an exciting time for cloud computing.
              To deepen my understanding and expertise in this field, I'm
              currently working towards obtaining an AWS Certified Solutions
              Architect certification.
            </li>
            <li className={`py-${TEXT_PADDING_SIZE}`}>
              <b>Japanese food.</b> I enjoy both cooking Japanese cuisine and
              exploring new Japanese restaurants. I'm constantly on the lookout
              for new recipes to add to my collection.
            </li>
            <li className={`py-${TEXT_PADDING_SIZE}`}>
              <b>Music.</b> While I'm not as active as I once was, I used to
              play shows with my band at various venues around Portland. I still
              have a strong passion for discovering new music, both from the
              past and present, and enjoy playing music with friends whenever
              possible.
            </li>
          </ul>
        </div>
        <div className="flex flex-col basis-1/2 min-w-[50%] pl-4">
          <h3 className={`py-${TEXT_PADDING_SIZE} text-l font-semibold`}>
            RECENT PROJECTS
          </h3>
          <ul className="list-disc">
            <li className={`py-${TEXT_PADDING_SIZE}`}>
              <a
                className="underline underline-offset-4 hover:opacity-75"
                target="_blank"
                href="https://songbook.up.railway.app/"
              >
                Songbook
              </a>{" "}
              is a full-stack application that uses Next.js, React, Express, and
              MongoDB. The application enables users to discover and share their
              favorite songs with others.
            </li>
            <li className={`py-${TEXT_PADDING_SIZE}`}>
              <a
                className="underline underline-offset-4 hover:opacity-75"
                target="_blank"
                href="https://github.com/mhborthwick/awa-monitoring-v2"
              >
                awa-monitoring
              </a>{" "}
              is a service developed using Golang, InfluxDB, and Grafana that
              monitors the status of key dependencies for my partner's eCommerce
              site. It detects any outages or issues in real-time, allowing for
              improved site availability.
            </li>
          </ul>
          <h3 className={`py-${TEXT_PADDING_SIZE} text-l font-semibold`}>
            CURRENTLY LEARNING
          </h3>
          <ul className="list-disc">
            <li className={`py-${TEXT_PADDING_SIZE}`}>Terraform, Ansible</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interests;
