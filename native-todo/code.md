




activity_main_xml

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingLeft="10dp"
    android:paddingRight="10dp">

    <EditText
        android:id="@+id/editTextTask"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter a new task"
        android:layout_alignParentTop="true"
        android:layout_marginBottom="16dp" />

    <Button
        android:id="@+id/buttonAddTask"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Add Task"
        android:layout_below="@id/editTextTask"
        android:layout_marginTop="8dp" />

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recyclerViewTasks"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_below="@id/buttonAddTask"
        android:layout_marginTop="8dp" />

</RelativeLayout>
```




## MainActivity.java


```java

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

public class MainActivity extends AppCompatActivity {

    private EditText editTextTask;
    private Button buttonAddTask;
    private RecyclerView recyclerViewTasks;
    private List<String> tasksList;
    private TaskAdapter taskAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Find references to views
        editTextTask = findViewById(R.id.editTextTask);
        buttonAddTask = findViewById(R.id.buttonAddTask);
        recyclerViewTasks = findViewById(R.id.recyclerViewTasks);

        // Set up RecyclerView
        tasksList = new ArrayList<>();
        taskAdapter = new TaskAdapter(tasksList);
        recyclerViewTasks.setLayoutManager(new LinearLayoutManager(this));
        recyclerViewTasks.setAdapter(taskAdapter);




        // Set OnClickListener for the "Add Task" button
        buttonAddTask.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Retrieve text from EditText
                String newTask = editTextTask.getText().toString();

                // Add the new task to the list
                if (!newTask.isEmpty()) {
                    tasksList.add(newTask);
                    taskAdapter.notifyDataSetChanged();
                    editTextTask.setText("");
                } else {
                    Toast.makeText(MainActivity.this, "Please enter a task", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}
```


TaskAdapter.java
```java
package com.example.firstnativeapp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class TaskAdapter extends RecyclerView.Adapter<TaskAdapter.TaskViewHolder> {

    private List<String> tasksList;

    public TaskAdapter(List<String> tasksList) {
        this.tasksList = tasksList;
    }

    @NonNull
    @Override
    public TaskViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_task, parent, false);
        return new TaskViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull TaskViewHolder holder, int position) {
        String task = tasksList.get(position);
        holder.bind(task);
    }

    @Override
    public int getItemCount() {
        return tasksList.size();
    }

    public static class TaskViewHolder extends RecyclerView.ViewHolder {
        private TextView textViewTask;

        public TaskViewHolder(@NonNull View itemView) {
            super(itemView);
            textViewTask = itemView.findViewById(R.id.textViewTask);
        }

        public void bind(String task) {
            textViewTask.setText(task);
        }
    }
}

```


Layout/item_task.xml


```xml
<!-- item_task.xml -->

<TextView xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/textViewTask"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:padding="16dp"
    android:textSize="18sp" />

```
