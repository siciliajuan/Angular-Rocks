If you wanna prove yourself the tests on spec.js you need four things:

- Instrall Protractor
- Start webdriver-manager
- Run the AngularJS application on a server (I Use XAMP with an apache)
- Run Protractor

To run this project on an apache server is necesary add 
a .htaccess file on root folder with the next content:

RewriteEngine On
Options FollowSymLinks

RewriteBase /

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /#/$1 [L] 
