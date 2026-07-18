<?php require_once __DIR__.'/../../middleware/bootstrap.php';$u=user();out(['user'=>['id'=>$u['id'],'email'=>$u['email'],'name'=>$u['name'],'role_id'=>$u['role_id']]]);
