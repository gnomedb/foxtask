import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";

@Module({
    imports: [TypeOrmModule.forFeature([])],
    providers: [TaskController, TaskService],
    exports: []
})
export class TaskModule {}