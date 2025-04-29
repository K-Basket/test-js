# Webpack

шаблон Webpack для використання в робочих проектах

## Налаштування та клонування шаблону

1. Відкрити цей репозітиторій та клонувати собі в комп (відкриваємо папку з усіма проектами в VSCode та пишемо в терміналі 
`git clone https://github.com/K-Basket/webpack-template.git`) - створюється папка з темплейт проектом.

2. Створити репозиторій на GitHub (обов‘язково README.md)

3. Відкрити папку, в якій будемо працювати в VS Code та зробити теж саме з створеним репозиторіієм як у п.1 `git clone https://github.com/K-Basket/назва_створеного_проекту.git`

4. Потім локально копіюємо webpack-template в робочий проект.

5. Заходимо на цей репозиторій та переходимо в `Settings => Actions => General` ставимо галки на :
    - _« Read and write permission »_
    - _« Allow GitHub Actions to create and approve pull requests »_ та зберігаємо.

6. У файлі package.json змінюємо в полі 2 та 5 на назву свого репозиторія та робимо всі стартові зміни в проекті.

7. Змінюємо Favicon та таке інше.

8. Робимо Pull request з комітом, наприклад Start.

9. Налаштовуємо живу сторінку `settings => pages => none => gh-pages => save`.

10. Якщо в проеті буде використовуватись маршрутизація то обгортаємо App в BrowserRouter

```html
<BrowserRouter basename="/your_repo_name">
    <App />
</BrowserRouter>
```
