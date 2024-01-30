3 layout types
linearLayout - 2 dimension  
relativeLayout-2 dimension  
constraint layout-3 dimensions  



Layout => Fragmet First => XML
### 1) Constraint layout
```xml
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".FirstFragment">

    <TextView
        android:id="@+id/textview_first"
        android:layout_width="wrap_content"
        android:layout_height="200dp"
        android:text="@string/hello_first_fragment"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toTopOf="@id/button_first"
        />


    <TextView
        android:id="@+id/textview_second"
        android:layout_width="wrap_content"
        android:layout_height="200dp"
        android:text="Hello 2nd"
        app:layout_constraintTop_toTopOf="@id/textview_first"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toTopOf="@id/button_first"
        />

    <TextView
        android:id="@+id/textview_third"
        android:layout_width="wrap_content"
        android:layout_height="200dp"
        android:text="Hello 3rd"
        app:layout_constraintTop_toTopOf="@id/textview_second"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toTopOf="@id/button_first"
        />

    <Button
        android:id="@+id/button_first"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/next"
        app:layout_constraintTop_toBottomOf="@id/textview_first"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintBottom_toBottomOf="parent"
        />
</androidx.constraintlayout.widget.ConstraintLayout>
```



### 2 - Relative layout simple


```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingLeft="10dp"
    android:paddingRight="10dp">

    <Button
        android:id="@+id/buttonFirst"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:text="Button1"/>
</RelativeLayout>

```


## 3 - Relative layout more complex
``` android:layout_alignParentLeft="true"``` - zarovná tlačítko doleva rodiče  

U tlačítka ```btn3```
``` android:layout_alignStart="@id/buttonFirst"``` a ```android:layout_alignEnd="@id/btn2"``` vám roztáhne tlačítko ```btn3``` po celé šířce

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingLeft="10dp"
    android:paddingRight="10dp">

    <Button
        android:id="@+id/buttonFirst"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:text="Button1"/>


    <Button
        android:id="@+id/btn2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentRight="true"
        android:layout_alignParentEnd="true"
        android:text="Button2"/>

    <Button
        android:id="@+id/btn3"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/buttonFirst"
        android:layout_alignLeft="@id/buttonFirst"
        android:layout_alignStart="@id/buttonFirst"
        android:layout_alignRight="@id/btn2"
        android:layout_alignEnd="@id/btn2"
        android:text="Button3"/>

    <Button
        android:id="@+id/btn4"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/btn3"
        android:layout_alignLeft="@id/btn3"
        android:layout_alignStart="@id/btn3"
        android:layout_alignRight="@id/btn3"
        android:layout_alignEnd="@id/btn3"
        android:text="Button4"/>

    <Button
        android:id="@+id/btn5"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/btn4"
        android:layout_alignLeft="@id/buttonFirst"
        android:layout_alignStart="@id/buttonFirst"
        android:layout_alignRight="@id/buttonFirst"
        android:layout_alignEnd="@id/buttonFirst"
        android:text="Button5"/>


    <Button
        android:id="@+id/btn6"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/btn4"
        android:layout_alignLeft="@id/btn2"
        android:layout_alignStart="@id/btn2"
        android:layout_alignRight="@id/btn2"
        android:layout_alignEnd="@id/btn2"
        android:text="Button6"/>








Layout => ActivtyMain.xml

<?xml version="1.0" encoding="utf-8"?>
<androidx.coordinatorlayout.widget.CoordinatorLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <com.google.android.material.appbar.AppBarLayout
        android:layout_height="wrap_content"
        android:layout_width="match_parent"
        android:theme="@style/Theme.FirstNativeApp.AppBarOverlay">

        <androidx.appcompat.widget.Toolbar
            android:id="@+id/toolbar"
            android:layout_width = "match_parent"
            android:background="?attr/colorPrimary"
              app:popupTheme="@style/Theme.FirstNativeApp.PopupOverlay"
            android:layout_height = "?attr/actionBarSize" />

<!--
        <androidx.appcompat.widget.AppCompatEditText
            android:id="@+id/editText"
            android:layout_width = "match_parent"
            android:background="?attr/colorPrimary"
            app:popupTheme="@style/Theme.FirstNativeApp.PopupOverlay"
            android:layout_height = "?attr/actionBarSize" />
-->





    <com.google.android.material.textfield.TextInputEditText
        android:id="@+id/editTexta"
        android:layout_width="match_parent"
        android:layout_height="?attr/actionBarSize"/>






        <Button
            android:layout_width="100dp"
            android:layout_height="wrap_content"
            android:layout_gravity="right"
            android:text="a" />

  </com.google.android.material.appbar.AppBarLayout>

  <include layout="@layout/content_main"/>

    <com.google.android.material.textfield.TextInputEditText
        android:id="@+id/editTextaMain"
        android:layout_width="match_parent"
        android:layout_height="500dp"/>

    <com.google.android.material.button.MaterialButton
        android:id="@+id/submitButton"
        android:layout_width="200dp"
        android:layout_height="50dp"
        android:text="Submit"/>


  <com.google.android.material.floatingactionbutton.FloatingActionButton
  android:id="@+id/fab"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:layout_gravity="bottom|end"
  android:layout_marginEnd="@dimen/fab_margin"
  android:layout_marginBottom="16dp"
  app:srcCompat="@android:drawable/ic_dialog_email" />

  </androidx.coordinatorlayout.widget.CoordinatorLayout>




</RelativeLayout>
```
