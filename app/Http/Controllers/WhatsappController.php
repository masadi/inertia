<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WhatsappController extends Controller
{
    public function index(){
        $response = Http::withHeaders([
            'Authorization' => config('app.fonnte_token'),
        ])->post('https://api.fonnte.com/send', [
            'target' => '087864496339',
	    	'message' => 'working great!',
	    	'url' => 'https://filesamples.com/samples/image/jpg/sample_640%C3%97426.jpg',
	    	'filename' => 'document',
        ]);
        $data = [
            'request' => request()->all(),
            'response' => $response->object(),
            'fonnte_token' => config('app.fonnte_token'),
        ];
        return response()->json($data);
    }
}
