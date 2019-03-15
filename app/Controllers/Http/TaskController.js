'use strict';
const Task = use('App/Models/Task');

class TaskController {
  async index({ response }) {
    let tasks = await Task.all();
    return response.json(tasks);
  }
}

module.exports = TaskController;
