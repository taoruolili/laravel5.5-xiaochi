<?php

namespace App\Model\Admin;

use Illuminate\Database\Eloquent\Model;

class SourceModel extends Model
{
    /**
     * @var string
     * 和模型关联的数据表
     */
    protected $table = 'data_source';

    /**
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'delete_at'];

    /**
     * @var array
     */
    protected $fillable = ['cname'];
}
