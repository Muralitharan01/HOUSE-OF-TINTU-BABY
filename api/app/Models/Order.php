<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'order_number',
        'user_id',
        'customer_name',
        'customer_email',
        'customer_phone',
        'shipping_address',
        'city',
        'pincode',
        'subtotal',
        'shipping_fee',
        'gift_wrap_fee',
        'total_amount',
        'payment_method',
        'payment_status',
        'order_status',
        'gift_wrap',
        'gift_message',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'shipping_fee' => 'decimal:2',
        'gift_wrap_fee' => 'decimal:2',
        'total_amount' => 'decimal:2',
        'gift_wrap' => 'boolean',
    ];

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
