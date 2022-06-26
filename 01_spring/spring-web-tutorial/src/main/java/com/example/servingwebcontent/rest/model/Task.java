package com.example.servingwebcontent.rest.model;

public class Task {
    private final int id;
    private final String name;
    private Boolean isDone;

    public Task(int id, String name, Boolean isDone) {
        this.id = id;
        this.name = name;
        this.isDone = isDone;
    }

    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public Boolean getIsDone() {
        return isDone;
    }
    public Boolean setIsDone(boolean b) {
        return this.isDone = b;
    }
}