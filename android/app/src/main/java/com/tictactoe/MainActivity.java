package com.tictactoe;

import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;



// import com.reactnativenavigation.controllers.SplashActivity;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    // @Override
    // public LinearLayout createSplashLayout(){
    //     LinearLayout view = new LinearLayout(this);
    //     TextView textView = new TextView(this);

    //     view.setBackgroundColor(Color.parseColor("orange"));
    //     view.setGravity(Gravity.CENTER);

    //     textView.setTextColor(Color.parseColor("black"));
    //     textView.setText("Loading...");
    //     textView.setGravity(Gravity.CENTER);
    //     textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);

    //     view.addView(textView);
    //     return view;



    // }

    
    @Override
    protected String getMainComponentName() {
        return "tictactoe";
    }
}
