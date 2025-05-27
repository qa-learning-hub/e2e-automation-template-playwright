# 🎭 E2E Automation Template with Playwright and TypeScript

This repository provides a robust, scalable, and maintainable foundation for End-to-End (E2E) test automation using **Playwright** and **TypeScript**. It follows industry best practices including the **Page Object Model (POM)** design pattern, clean code conventions, and Continuous Integration (CI) workflows.

## 📚 Table of Contents

- [Quick Start](#quick-start)
- [Allure Reports](#allure-reports)
- [Project Structure](#project-structure)
- [Page Object Model](#page-object-model)
- [Continuous Integration](#continuous-integration)
- [Best Practices](#best-practices)
- [Useful Commands](#useful-commands)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---
<a name="quick-start"></a>
## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/qa-learning-hub/e2e-automation-template-playwright.git
cd e2e-automation-template-playwright
```

### 2. Install Dependencies

```bash
npm install
npx playwright install
```

### 3. Run UI Tests

```bash
npm test
# or
npx playwright test --project="UI Tests"
```

### 4. Run API Tests

```bash
npm test
# or
npx playwright test --project="API Tests"
```

<a name="allure-reports"></a>
## 📊 Allure Reports

### 1. Install Dependencies

```bash
npm install --save-dev allure-playwright
```

### 2. Generate a Report

```bash
npx playwright test
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

<a name="project-structure"></a>
## 📂 Project Structure

```
e2e-automation-template-playwright/
├── .github/
│   └── workflows/
│       └── playwright-tests.yml
├── src/
│   ├── pages/          # Page Objects
│   └── utils/          # Utility functions and helpers
├── tests/              # Test spec files
├── .eslintrc.js
├── .prettierrc
├── .gitignore
├── playwright.config.ts
├── package.json
└── tsconfig.json
```
<a name="page-object-model"></a>
## 🧩 Page Object Model

The project utilizes the Page Object Model (POM) design pattern to enhance readability, maintainability, and reusability of test code.

Example:

```bash
// src/pages/login.page.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://example.com/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }
}
```
<a name="continuous-integration"></a>
## ⚙️ Continuous Integration

CI is set up with GitHub Actions to automatically run tests on each push or pull request.

### Workflow

* Install dependencies
* Install Playwright browsers
* Run tests and generate reports
* Check the workflow file in .github/workflows/ci.yml

<a name="best-practices"></a>
## ✅ Best Practices

* Clean and Maintainable Code: ESLint and Prettier configured for consistent coding style.
* Robust Tests: Video and screenshots on test failures for easy debugging.
* Configurable Environments: Playwright config allows customization for different test environments.

<a name="useful-commands"></a>
## 📚 Useful Commands

| Command                    | Description                  |
| -------------------------- | ---------------------------- |
| `npm install`              | Install project dependencies |
| `npm test`                 | Execute tests                |
| `npm run lint`             | Run ESLint checks            |
| `npm run format`           | Run Prettier to format code  |
| `npx playwright test --ui` | Open Playwright Test UI      |

<a name="documentation"></a>
## 📖 Documentation

* [Playwright Documentation](https://playwright.dev/docs/intro)
* [TypeScript Documentation](https://playwright.dev/docs/intro)

<a name="contributing"></a>
## 📬 Contributing

Contributions are welcome! Please open a pull request or an issue to discuss potential improvements.

<a name="license"></a>
## 📜 License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
