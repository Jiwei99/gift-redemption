import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'staffs'})
export class Staff {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;
    
    @Column('text', {name: 'staff_pass_id'})
    staffPassId: string

    @Column('text', {name: 'team_name'})
    teamName: string

    @Column('datetime', {name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
};