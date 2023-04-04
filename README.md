# Brain game progression project

*simple math console game*

## Игра "Арифметическая прогрессия"

Необходимо реализовать игру "Арифметическая прогрессия".

Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

* Рекомендуемая длина прогрессии – 10 чисел. Длина может генерироваться случайным образом, но должна содержать **не менее 5 чисел**
* Позиция спрятанного элемента каждый раз изменяется (выбирается случайным образом)

```text
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
```

В случае, если пользователь даст неверный ответ, необходимо завершить игру и вывести сообщение:

```text
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```

В случае, если пользователь ввел верный ответ, нужно отобразить:

```text
Correct!
```

и приступить к следующему вопросу.

Пользователь должен дать правильный ответ на три вопроса подряд. После успешной игры нужно вывести:

```text
Congratulations, Bill!
```

Вывод должен получиться следующий:

```text
brain-progression

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```

* Любой некорректный ввод считается ошибкой (например, `n`) и равносилен неправильному ответу.

## Создание репозитория

Для начала работы над заданием вам нужно создать репозиторий в своем аккаунте, используя данный репозиторий как темплейт.

Для этого вверху страницы нажмите "Use this template" и выберете "Create new repository". После этого задайте имя вашему репозиторию и нажмите "Create"

## Требования к файловой структуре

Не изменяйте и не удаляйте никакие файлы, уже существующие в репозитории.

Код вашего решения вы можете располагать так, как вам удобно.

Важное требование к исполняемому файлу, через который будет проверяться работа всего вашего кода:

1. Исполняемый файл **brain-progression.js** должен лежать в папке **bin**. Пропишите в нём шебанг с правильно указанным интерпретатором (node) — `#!/usr/bin/env node`.
1. Добавьте файлу *bin/brain-progression.js* права на исполнение, выполнив в корневой директории проекта команду `chmod +x bin/brain-progression.js`. Это позволит запускать исполняемый файл напрямую из консоли без указания интерпретатора (node) - `./bin/brain-progression.js`.
1. Также нужно добавить право на выполнение этому файлу в git: `git update-index --chmod=+x ./bin/brain-progression.js`

## Подготовка проекта

1. Инициализируйте npm-пакет внутри корневой директории проекта, используя команду npm init
1. Добавьте в package.json секцию "type" со значением "module"
1. Добавьте запись в секцию bin в package.json:
    ```json
    "bin": {
      "brain-progression": "bin/brain-progression.js"
    }
    ```

1. Подключите к проекту библиотеку readline-sync
1. Установите пакеты для разработки: eslint, eslint-config-airbnb-base и eslint-plugin-import
1. Настройте правильно .eslintrc.yml. Документация: <https://eslint.org/docs/user-guide/configuring>. Сверяйтесь с [nodejs-package](https://github.com/hexlet-boilerplates/nodejs-package)
1. Установите пакет в систему с помощью `npm link` и убедитесь в том, что он работает, запустив `brain-progression` в терминале. Команда `npm link` может потребовать запуск с `sudo`

## Полезные ссылки

* [Скрипты, модули и библиотеки](https://ru.hexlet.io/blog/posts/skripty-moduli-i-biblioteki)
* [Шебанг](https://goo.gl/p7IdS8)
* [Npm Scripts](https://docs.npmjs.com/misc/scripts)
* [Именование в программировании](https://ru.hexlet.io/blog/posts/naming-in-programming)
* [Ошибки именования в программировании I](https://ru.hexlet.io/blog/posts/naming-errors-1)
* [Ментальное программирование](https://www.youtube.com/watch?v=EEq1wdM2M2w)
* [Нисходящее и восходящее проектирование](https://ru.hexlet.io/blog/posts/sovershennyy-kod-nishodyaschee-i-voshodyaschee-proektirovanie)
* [Проектирование функций](https://ru.hexlet.io/blog/posts/sovershennyy-kod-proektirovanie-funktsiy)

## Запуск проверки вашего решения

Ваш код проверяется на правильность работы и соответствие стайл-гайду в GitHub Actions.
Эти проверки требуют установленных Docker и Docker compose. Если вы не знаете, что это такое Docker и Docker compose, не проверяйте локально, смотрите вывод ошибок на GitHub.

Проверки локально можно запустить с помощью следующих команд:

```bash
make compose-setup // подготовка
make compose-test // запуск тестов
make compose-lint // запуск линтера
```
