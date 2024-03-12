import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'redemptions'})
export class Redemption {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;
    
    @Column('text', {name: 'team_name'})
    teamName: string

    @Column('text', {name: 'redeemed_by'})
    redeemedBy: string

    @CreateDateColumn({name: 'redeemed_at'})
    redeemedAt: Date;
};