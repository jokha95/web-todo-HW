package com.example.servingwebcontent.rest;

import com.example.servingwebcontent.rest.model.Task;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.TreeMap;


@RestController
@CrossOrigin
public class TaskController {

    private final TreeMap<Integer, Task> taskMap;

    public TaskController() {
        taskMap = new TreeMap<>();
        taskMap.put(0, new Task(0, "taskone", true));
        taskMap.put(1, new Task(1, "tasktow", true));
        taskMap.put(2, new Task(2, "taskthree", true));
    }

    @GetMapping("/tasks")
    public Collection<Task> getAllTasks() {
        return taskMap.values();
    }

    @GetMapping("/tasks/{id}")
    public Task getTaskById(@PathVariable Integer id) {
        return taskMap.get(id);
    }


    @PostMapping("/tasks")
    public void createTask(@RequestBody Task task) {
        taskMap.put(task.getId(), task);
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable Integer id){ taskMap.remove(id);}


}