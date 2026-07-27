<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;
use App\Models\Order;

/*
|--------------------------------------------------------------------------
| API Routes — House of Tintu
|--------------------------------------------------------------------------
*/

Route::get('/v1/health', function () {
    return response()->json([
        'status' => 'healthy',
        'app' => 'House of Tintu API',
        'version' => '1.0.0',
        'timestamp' => now()->toIso8601String(),
    ]);
});

// Products API
Route::get('/v1/products', function (Request $request) {
    $query = Product::query()->with(['category', 'collection', 'images']);

    if ($request->has('category')) {
        $query->whereHas('category', function ($q) use ($request) {
            $q->where('slug', $request->category);
        });
    }

    if ($request->has('age')) {
        $query->whereHas('ageGroup', function ($q) use ($request) {
            $q->where('slug', $request->age);
        });
    }

    return response()->json([
        'success' => true,
        'data' => $query->get(),
    ]);
});

// Order Placement API
Route::post('/v1/orders', function (Request $request) {
    $validated = $request->validate([
        'customer_name' => 'required|string|max:255',
        'customer_phone' => 'required|string|max:20',
        'shipping_address' => 'required|string',
        'city' => 'required|string',
        'pincode' => 'required|string',
        'items' => 'required|array|min:1',
        'payment_method' => 'required|string',
    ]);

    $orderNumber = 'HOT-' . strtoupper(bin2hex(random_bytes(4)));

    $order = Order::create([
        'order_number' => $orderNumber,
        'customer_name' => $validated['customer_name'],
        'customer_phone' => $validated['customer_phone'],
        'shipping_address' => $validated['shipping_address'],
        'city' => $validated['city'],
        'pincode' => $validated['pincode'],
        'subtotal' => 1299.00,
        'shipping_fee' => 0,
        'gift_wrap_fee' => $request->boolean('gift_wrap') ? 99.00 : 0,
        'total_amount' => $request->boolean('gift_wrap') ? 1398.00 : 1299.00,
        'payment_method' => $validated['payment_method'],
        'payment_status' => $validated['payment_method'] === 'cod' ? 'pending' : 'paid',
        'order_status' => 'pending',
        'gift_wrap' => $request->boolean('gift_wrap'),
        'gift_message' => $request->input('gift_message'),
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Order created successfully',
        'order_number' => $order->order_number,
        'order' => $order,
    ], 201);
});
