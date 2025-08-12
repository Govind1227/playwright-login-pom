# Playwright POM Framework

## 📌 Overview
This project implements the **Page Object Model (POM)** design pattern in Playwright for easier maintenance, better readability, and scalability of test automation scripts.

---

## 📂 Folder Structure
```
POM-Project/
├── pages/             # Page classes (POM)
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   └── ProductPage.ts
├── tests/             # Test files
│   ├── login.spec.ts
│   └── product.spec.ts
├── utils/             # Utility functions
│   └── helpers.ts
├── fixtures/          # Test data and fixtures
│   └── testData.json
├── package.json       # Project dependencies
├── playwright.config.ts # Playwright config
└── README.md          # Documentation
```

---

## ⚙️ Installation
```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶️ Running Tests
```bash
# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run specific file
npx playwright test tests/login.spec.ts
```

---

## 🏗 Sample Code

### pages/LoginPage.ts
```typescript
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

### tests/login.spec.ts
```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid login should succeed', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('testuser', 'password123');
  await expect(page).toHaveURL('https://example.com/dashboard');
});
```

---

## 🏗 POM Workflow Diagram
```
[Test Spec] → [Page Object Class] → [Playwright Actions] → [Assertions]
```

---

## ✨ Advantages of POM
- Separation of concerns
- Code reusability
- Easier maintenance
- Better readability

---

## 📄 License
This project is licensed under the MIT License.
