import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { LocaleProvider } from "./i18n/LocaleProvider.tsx";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error('Root element "#root" was not found in the document.');
}

createRoot(container).render(
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>
);
