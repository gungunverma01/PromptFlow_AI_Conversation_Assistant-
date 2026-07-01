import { checkHeading, replaceHeadingStart, checkBullet } from "../file";

const formatBold = (text) => {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (/^\*\*.*\*\*$/.test(part)) {
      return (
        <strong key={index} className="font-bold text-white">
          {part.replace(/\*\*/g, "")}
        </strong>
      );
    }

    return part;
  });
};

const Answer = ({ ans }) => {
  const lines = ans.split("\n");

  return (
    <div className="text-left text-gray-300">

      {lines.map((line, index) => {

        const trimmed = line.trim();

        if (!trimmed) {
          return <br key={index} />;
        }

        // Heading
        if (checkHeading(trimmed)) {
          return (
            <h2
              key={index}
              className="text-3xl font-bold text-cyan-400 mt-6 mb-3"
            >
              {replaceHeadingStart(trimmed)}
            </h2>
          );
        }

        // Bullet
        if (checkBullet(trimmed)) {
          return (
            <li
              key={index}
              className="ml-6 list-disc leading-8"
            >
              {formatBold(trimmed.substring(1).trim())}
            </li>
          );
        }

        // Paragraph
        return (
          <p
            key={index}
            className="leading-8"
          >
            {formatBold(trimmed)}
          </p>
        );
      })}
    </div>
  );
};

export default Answer;