# One_Course_Project

Набор учебных фронтенд‑проектов. Каждый проект живет в отдельной папке и не зависит от остальных. В основном используются HTML и SCSS, местами — JavaScript для интерактивных элементов.

## Проекты

- `ALAGER` — одностраничный лендинг про технологии/IT‑компанию, секции с навигацией и контентными блоками.
  - Входная страница: `ALAGER/index6 20.54.34 20.54.34 20.54.34 20.54.34.html`
  - SCSS: `ALAGER/src/scss`, CSS: `ALAGER/src/css`
- `Geron_Kard` — сайт для IT‑обучения: авторизация, регистрация, профиль и главная с карточками курсов.
  - Входная страница: `Geron_Kard/index6 20.54.34 20.54.34 20.54.34 20.54.34 20.54.34 20.54.34.html`
  - Страницы: `Geron_Kard/src/pages/main.html`, `Geron_Kard/src/pages/reg.html`, `Geron_Kard/src/pages/profile.html`
  - SCSS: `Geron_Kard/src/scss`, CSS: `Geron_Kard/src/css`
- `Online_Shop_Release` — многостраничный макет интернет‑магазина одежды (главная, каталог/портфолио, карточка товара, корзина, checkout, контакты).
  - Входная страница: `Online_Shop_Release/index.html`
  - Доп. страницы: `Online_Shop_Release/src/pages/portfolio.html`, `Online_Shop_Release/src/pages/tovar.html`, `Online_Shop_Release/src/pages/shoppingcard.html`, `Online_Shop_Release/src/pages/checkoutcart.html`, `Online_Shop_Release/src/pages/contactus.html`, `Online_Shop_Release/src/pages/create.html`
  - SCSS: `Online_Shop_Release/src/scss`, CSS: `Online_Shop_Release/src/css`
- `RitmStyle` — интернет‑магазин с интерактивом на JS (сортировка, модалки, авторизация через localStorage, админ‑страница).
  - Входная страница: `RitmStyle/index.html`
  - Страницы: `RitmStyle/src/pages/main.html`, `RitmStyle/src/pages/product.html`, `RitmStyle/src/pages/cart.html`, `RitmStyle/src/pages/order.html`, `RitmStyle/src/pages/admin.html`, `RitmStyle/src/pages/auth/auth.html`, `RitmStyle/src/pages/auth/reg.html`
  - JS: `RitmStyle/src/js`
  - SCSS: `RitmStyle/src/scss`, CSS: `RitmStyle/src/css`
- `Rokk` — UI‑макет музыкального сервиса/плеера с боковой навигацией.
  - Входная страница: `Rokk/index6.html`
  - CSS: `Rokk/src/css`

## Быстрый запуск (просмотр)

Проекты статические — достаточно открыть нужный HTML‑файл в браузере. Для удобства можно использовать Live Server или аналогичный плагин.

## Сборка SCSS (по желанию)

В некоторых проектах есть `package.json` со скриптом компиляции SCSS → CSS:

```bash
cd ALAGER
npm install
npm run style
```

Аналогично для:
- `Geron_Kard`
- `Online_Shop_Release`
- `RitmStyle`

## Примечания

- В ряде проектов имена файлов содержат пробелы — при запуске из терминала используйте кавычки.
- Проекты независимы, общей сборки для всего репозитория нет.
