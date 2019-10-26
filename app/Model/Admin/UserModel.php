<?php

namespace App\Model\Admin;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    /**
     * @var string
     * 和模型关联的数据表
     */
    protected $table = 'data_user';

    /**
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'delete_at'];

    /**
     * @var array
     */
    protected $fillable = ['u_name', 'u_pwd', 'type'];


}
