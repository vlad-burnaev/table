### GitHub pages: https://vlad-burnaev.github.io/table/

# Тестовое задание

По задаче - [Task.md](Task.md) создан проект на основе Create React App.      
 
Методы сортировки, фильтрации реализованы с применением библиотеки lodash.

### Запуск

Запустить проект можно при помощи команды `npm start`

Также добавлен Dockerfile, на основе которого можно собрать образ приложения.     
В docker hub находится актуальная версия приложения. Для ее запуска необходимо выполнить команду   
`docker run -d --name <some_name> -p <some_port>:80 vladburnaev/future-demo:latest`.
