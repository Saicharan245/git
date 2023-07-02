import type  { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch:  ["**/*.js"]
};
reporter: [["dot"], ["json", { 
  outputFile:"jsonReports/jsonReport.json"
}], ["html", {
  open: "never"
}]]

export default config;
