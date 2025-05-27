import { test, expect, request } from '@playwright/test';

test('GET /api/users returns 200', async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://your-api-endpoint.com/api/users');
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('users');
});
