<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Price extends Model {
    protected $table = 'prices';

    public $timestamps = false;

    public function product() {
        return $this->belongsTo(Product::class);
    }
}
