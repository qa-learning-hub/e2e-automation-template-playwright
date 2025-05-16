# 🎭 E2E Automation Template with Playwright and TypeScript

This repository provides a robust, scalable, and maintainable foundation for End-to-End (E2E) test automation using **Playwright** and **TypeScript**. It follows industry best practices including the **Page Object Model (POM)** design pattern, clean code conventions, and Continuous Integration (CI) workflows.

## 📚 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Page Object Model](#page-object-model)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Continuous Integration](#continuous-integration)
- [Best Practices](#best-practices)
- [Useful Commands](#useful-commands)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

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

### 3. Run Tests

```bash
npm test
# or
npx playwright test
```

## 📂 Project Structure

e2e-automation-template-playwright/
├── .github/
│   └── workflows/
│       └── ci.yml
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
## ⚙️ Continuous Integration

CI is set up with GitHub Actions to automatically run tests on each push or pull request.

### Workflow

* Install dependencies
* Install Playwright browsers
* Run tests and generate reports
* Check the workflow file in .github/workflows/ci.yml

## ✅ Best Practices

* Clean and Maintainable Code: ESLint and Prettier configured for consistent coding style.
* Robust Tests: Video and screenshots on test failures for easy debugging.
* Configurable Environments: Playwright config allows customization for different test environments.

## 📚 Useful Commands

| Command                    | Description                  |
| -------------------------- | ---------------------------- |
| `npm install`              | Install project dependencies |
| `npm test`                 | Execute tests                |
| `npm run lint`             | Run ESLint checks            |
| `npm run format`           | Run Prettier to format code  |
| `npx playwright test --ui` | Open Playwright Test UI      |

## 📖 Documentation

* [Playwright Documentation](https://playwright.dev/docs/intro)
* [TypeScript Documentation](https://playwright.dev/docs/intro)

## 📬 Contributing

Contributions are welcome! Please open a pull request or an issue to discuss potential improvements.

## 📜 License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
