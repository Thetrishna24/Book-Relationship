import { Entity, PrimaryGeneratedColumn, Column, Relation, ManyToMany } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  authorId: string;

  @Column()
  name: string;

  @Column({ default: 'unknown' })
  countryOfOrigin: string;

  @ManyToMany(() => Book, (book) => book.author)
  book: Relation<Book>;
}
