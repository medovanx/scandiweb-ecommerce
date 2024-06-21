<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Attribute extends Model {
    protected $table = 'attributes';

    public function product() {
        return $this->belongsTo(Product::class);
    }
}
