<?php require_once __DIR__.'/../../middleware/bootstrap.php';$st=db()->prepare('select * from gift_cards where id=? and enabled=1');$st->execute([$_GET['id']??0]);out(['product'=>$st->fetch()]);
