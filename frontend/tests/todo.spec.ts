import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.goto('http://localhost:8080/#/');
  await page.goto('http://localhost:8080/#/todos');
  await page.getByPlaceholder('Adicione uma tarefa').click();
  await page.getByPlaceholder('Adicione uma tarefa').fill('edio');
  await page.locator('button.btn-primary').click();
  await page.getByRole('button.btn-undo').click();
  await page.getByRole('button.btn-warning').click();
  await page.getByRole('button.btn-undo').click();
  await page.getByRole('button.btn-danger').click();
  //   await page.getByRole('button', { name: '' }).click();
  //   await page.getByRole('button', { name: '' }).click();
  //   await page.getByRole('button', { name: '' }).click();
  //   await page.getByRole('button', { name: '' }).click();
});