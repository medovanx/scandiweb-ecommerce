<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'product_id', 'quantity', 'total_price'
    ];
    public $timestamps = true; // Disable automatic timestamp management

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
