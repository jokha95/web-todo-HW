//package com.example.servingwebcontent.rest.model;
//
//public class TodoItem {
//    private String title;
//    private boolean completed;
//
//    public String getTitle() {
//        return title;
//    }
//
//   public void setTitle(String title) {
//        this.title = title ;
//   }
//   public boolean isCompleted() {
//        return completed;
//   }
//   public void setCompleted(boolean completed){
//        this.completed = completed;
//   }
//}
//

package com.example.servingwebcontent.rest.model;

public class Task {
    private final int id;
    private final String name;

    public Task(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}