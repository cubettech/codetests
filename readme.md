## Developer Notes

LARAVEL APIs in CubetTest folder

VUE in cubet-app folder

# CubetTest

## Project setup
Please follow these instructions to set up your development environment:

Rename .env.example to .env
composer update
sudo chmod -R 0777 storage
Set db user name & password in .env ( DB_USERNAME & DB_PASSWORD )
php artisan make:database
php artisan key:generate
php artisan migrate
php artisan config:cache
php artisan serve


# cubet-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


