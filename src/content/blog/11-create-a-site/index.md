---
title: "Как создать подобный сайт"
description: "Гайд для дегенератов."
date: "2024-12-26"
tags:
  - сайт
---

## Всем привет!
 В этом гайде я расскажу как я создал сайт с доменом первого уровня (вида site.ru / site.com итд) и бесплатно разместил его на хостинге. Платил я только за домен kaban.blog что вышло мне около 5 долларов в год.
## Покупка домена
Купил домен kaban.blog на porkbun.com, но можно использовать любой другой сайт. 
Домен на год вышел мне в $3.58. Ренью стоит дороже но его можно сделать так же на любом другом регистраторе где это будет дешевле просто перенеся туда домен.
![[Снимок экрана 2024-12-26 в 14.49.01.png]]
## Создание сайта
Для создания сайта я использовал Astro. Почему? Потому что на ничто другое мне не хватило прямых рук + это реально все что мне нужно было для статического блога.
### Шаг 1
Качаем и устанавливаем [Visual Studio Code](https://code.visualstudio.com)
Подробно не останавливаюсь, там все элементарно.
### Шаг 2
#### Устанавливаем [Homebrew](https://brew.sh)
- Открываем терминал
- Пишем туда:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
- Готово
### Шаг 3
#### Устанавливаем [npm](https://www.npmjs.com)
- Открываем терминал
- Пишем туда:
```
brew install node
```
- Готово
### Шаг 4
#### Устанавливаем [Astro](https://astro.build)
- Открываем терминал
- Пишем туда:
```
npm install astro
```
- Готово

### Шаг 5
#### Качаем и устанавливаем Github Desktop
- [Качаем](https://desktop.github.com/download/) и устанавливаем, регистрируемся/логинимся в программе

### Шаг 6 Самый сложный

#### Выбираем и устанавливаем [тему](https://astro.build/themes/) сайта
- [Выбираем](https://astro.build/themes/)
- Устанавливаем. Показываю как это сделать на примере темы [Astro Micro](https://astro.build/themes/details/astro-micro/): 
1. Переходим по ссылке выше, и нажимаем ==Deploy to Netlify==
![](./screen1.png)

2. Нажимаем ==Connect to Github==
![](./screen2.png)

3. Нажимаем ==Save to Deploy==
4. Ждем пару минут, пока **Post-Processing** не станет **Complete**
![](./screen3.png)
5. Слева нажимает ==Site overview==
![](./screen4.png)
6. Нажимаем ==GitHub==
![](./screen5.png)
7. Запоминаем имя репозитория
![](./screen6.png)
8. Переходим в свежескаченный GitHub Desktop и повторяем по шагам:
- Нажимаем сюда ![](./screen7.png)
- Сюда ![](./screen8.png)
 - Сюда ![](./screen9.png)
 - Выбираем репозиторий с шага ШАГ, запоминаем путь и нажимаем ==Clone== ![](./screen10.png)

 9. Открываем VS Code и открываем папку с проектом следующим образом: ![](./screen11.png)


*Зачем я вам это показал? Чтоб объяснить как создавать и редактировать посты в блоге и сам блог. Об этом в следующем шаге.*

### Шаг 6
#### Пост создаем следующим образом:
1. В VS Code переходим в /scr/content/blog ![](./screen12.png)

2. Видим список постов. 
3. Дублируем один их них с помощью CTRL+C CTRL+V
4. Переходим в свежесдублированную папку и открываем файл index.md
5. Редактируем его по своему усмотрению, не забыв про Title и прочие атрибуты
6. Переименовываем папку, это будет адрес статьи блога на вашем сайте.

### Шаг 7
- Синхронизируем сайт чтоб новые статьи и все изменения стали видны в интернете.
- Нажимаем по очереди:
![](./screen13.png)
![](./screen14.png)
![](./screen15.png)
![](./screen16.png)

### Шаг 8
**Готово**! Ваш сайт готов, осталось только прикрепить к нему домен но об этом я напишу в след раз тк заебался. Или можете сами додуматься, это просто.