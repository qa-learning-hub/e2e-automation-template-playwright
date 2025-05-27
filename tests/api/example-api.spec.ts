import { test, expect, request } from '@playwright/test';

test('GET /api/users with API key returns 200', async () => {
  const apiContext = await request.newContext({
    extraHTTPHeaders: {
      'x-api-key': process.env.API_KEY || 'reqres-free-v1',
    },
  });

  const response = await apiContext.get('https://reqres.in/api/users');
  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data).toHaveProperty('data');
});
