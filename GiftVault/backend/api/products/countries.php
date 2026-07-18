<?php require_once __DIR__.'/../../middleware/bootstrap.php';out(['countries'=>db()->query('select * from gift_card_countries order by name')->fetchAll()]);
