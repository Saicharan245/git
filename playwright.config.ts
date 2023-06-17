import type  { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/login.test.ts"]
};
reporter: [["dot"], ["json", { 
  outputFile:"jsonReports/jsonReport.json"
}], ["html", {
  open: "never"
}]]

export default config;