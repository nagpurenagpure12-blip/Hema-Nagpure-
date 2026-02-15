package com.hema;

import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebSettings;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    WebView web;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        web = findViewById(R.id.web);
        WebSettings settings = web.getSettings();
        settings.setJavaScriptEnabled(true);

        web.loadUrl("file:///android_asset/index.html");
    }
}
