const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./test/ui",
  fullyParallel: false,
  workers: 1,
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:8123",
    headless: true,
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
  webServer: {
    command: "node test/server-statico.cjs",
    url: "http://127.0.0.1:8123/index.html",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
