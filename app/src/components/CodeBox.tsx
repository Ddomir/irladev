import React from "react";

interface CodeBoxProps {
  language: string;
  code: string;
}

const CodeBox: React.FC<CodeBoxProps> = ({language, code}) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-md w-full max-w-3xl mx-auto transition duration-300 ease-in-out hover:scale-[1.01]">
      {/* Top Label */}
      <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-semibold">{language}</div>

      {/* Code Block */}
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm whitespace-pre">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBox;
