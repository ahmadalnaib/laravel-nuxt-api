<?php

use App\Models\User;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
   return UserResource::make($request->user());
})->middleware('auth:sanctum');



Route::get('/products',function(){

   return Product::all();

});


Route::get('/products/{product}',function(Product $product){

  dd($product);
})->name('products.show');

Route::get('/users/{user}',function(User $user){

   dd($user);
 })->name('users.show');
 

