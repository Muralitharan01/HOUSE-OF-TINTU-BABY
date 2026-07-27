<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Categories Table
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('image_url')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });

        // Collections Table (Storybook Worlds)
        Schema::create('collections', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('subtitle')->nullable();
            $table->text('description')->nullable();
            $table->string('theme_name')->default('default');
            $table->string('image_url')->nullable();
            $table->string('badge')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        // Age Groups Table
        Schema::create('age_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('age_range');
            $table->text('description')->nullable();
            $table->string('image_url')->nullable();
            $table->timestamps();
        });

        // Products Table
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('subtitle')->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('original_price', 10, 2)->nullable();
            $table->foreignId('category_id')->nullable()->constrained('categories')->nullOnDelete();
            $table->foreignId('collection_id')->nullable()->constrained('collections')->nullOnDelete();
            $table->foreignId('age_group_id')->nullable()->constrained('age_groups')->nullOnDelete();
            $table->text('description')->nullable();
            $table->json('features')->nullable();
            $table->string('material')->nullable();
            $table->boolean('is_organic')->default(false);
            $table->boolean('in_stock')->default(true);
            $table->decimal('rating', 3, 2)->default(5.00);
            $table->unsignedInteger('review_count')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });

        // Product Images Table
        Schema::create('product_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
            $table->string('image_url');
            $table->boolean('is_primary')->default(false);
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        // Orders Table
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('customer_name');
            $table->string('customer_email')->nullable();
            $table->string('customer_phone');
            $table->text('shipping_address');
            $table->string('city');
            $table->string('pincode');
            $table->decimal('subtotal', 10, 2);
            $table->decimal('shipping_fee', 10, 2)->default(0);
            $table->decimal('gift_wrap_fee', 10, 2)->default(0);
            $table->decimal('total_amount', 10, 2);
            $table->string('payment_method')->default('upi'); // upi, razorpay, cod
            $table->string('payment_status')->default('pending'); // pending, paid, failed
            $table->string('order_status')->default('pending'); // pending, packed, shipped, delivered, cancelled
            $table->boolean('gift_wrap')->default(false);
            $table->text('gift_message')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        // Order Items Table
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('orders')->cascadeOnDelete();
            $table->foreignId('product_id')->constrained('products');
            $table->string('product_name');
            $table->decimal('unit_price', 10, 2);
            $table->unsignedInteger('quantity');
            $table->decimal('line_total', 10, 2);
            $table->timestamps();
        });

        // Memory Book Entries Table
        Schema::create('memory_entries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->string('milestone_date');
            $table->string('category')->default('Milestone');
            $table->string('image_url')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('memory_entries');
        Schema::dropIfExists('order_items');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('product_images');
        Schema::dropIfExists('products');
        Schema::dropIfExists('age_groups');
        Schema::dropIfExists('collections');
        Schema::dropIfExists('categories');
    }
};
