<?php

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
