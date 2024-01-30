```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingLeft="10dp"
    android:paddingRight="10dp">


    <!-- activity_main.xml -->
        <Button
            android:id="@+id/buttonFirst"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_alignParentLeft="true"
            android:layout_alignParentStart="true"
            android:text="Button12" />

        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/editTextaMain"
            android:layout_width="match_parent"
            android:layout_height="500dp"
            android:layout_below="@id/buttonFirst" />
</RelativeLayout>
```

main_activity_java

```java
package com.example.firstnativeapp;

/*
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.textfield.TextInputEditText;

public class MainActivity extends AppCompatActivity {

    private TextInputEditText editTextaMain;
    private Button buttonFirst;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Find references to views
        editTextaMain = findViewById(R.id.editTextaMain);
        buttonFirst = findViewById(R.id.buttonFirst);

        // Set OnClickListener for the button
        buttonFirst.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Retrieve text from TextInputEditText
                String enteredText = editTextaMain.getText().toString();

                // Display the text in an alert dialog
                showAlert("Entered Text", enteredText);
            }
        });
    }

    // Method to display an alert dialog with the given title and message
    private void showAlert(String title, String message) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle(title)
                .setMessage(message)
                .setPositiveButton("OK", null); // You can add a listener for the OK button if needed
        AlertDialog alertDialog = builder.create();
        alertDialog.show();
    }
}
*/

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.textfield.TextInputEditText;

public class MainActivity extends AppCompatActivity {

    private TextInputEditText editTextaMain;
    private Button buttonFirst;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Find references to views
        editTextaMain = findViewById(R.id.editTextaMain);
        buttonFirst = findViewById(R.id.buttonFirst);

        // Set OnClickListener for the button
        buttonFirst.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Retrieve text from TextInputEditText
                String enteredText = editTextaMain.getText().toString();

                // Display the text in an alert dialog
                showAlert("Entered Text", enteredText);
            }
        });
    }

    // Method to display an alert dialog with the given title and message
    private void showAlert(String title, String message) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle(title)
                .setMessage(message)
                .setPositiveButton("OK", null); // You can add a listener for the OK button if needed
        AlertDialog alertDialog = builder.create();
        alertDialog.show();
    }
}

```
