import React from "react";
import nightOwl from "react-syntax-highlighter/dist/esm/styles/prism/night-owl";

import SyntaxHighlighter from "./SyntaxHighlighter";

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent = ({ code, showLineNumbers, wrapLines }) => (
  <SyntaxHighlighter
    language={"jsx"}
    copyable={true}
    padded={true}
    style={nightOwl}
    showLineNumbers={showLineNumbers}
    wrapLines={wrapLines}
  >
    {code}
  </SyntaxHighlighter>
);
