<?php
return ['db'=>['host'=>getenv('DB_HOST')?:'localhost','name'=>getenv('DB_NAME')?:'giftvault','user'=>getenv('DB_USER')?:'root','pass'=>getenv('DB_PASS')?:''],'jwt_secret'=>getenv('JWT_SECRET')?:'change-me','reloadly'=>['client_id'=>getenv('RELOADLY_CLIENT_ID')?:'','client_secret'=>getenv('RELOADLY_CLIENT_SECRET')?:'','base'=>getenv('RELOADLY_BASE')?:'https://giftcards.reloadly.com']];
