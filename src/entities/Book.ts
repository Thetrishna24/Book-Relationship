import { Entity, PrimaryGeneratedColumn, Column, Relation, ManyToMany, OneToMany } from 'typeorm';
import { Author } from './Author';
import { Review } from './Review';
import { User } from './User';
// import { Book } from './Book';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  yearOfFirstPublication: number;

  @Column({ default: false })
  isPublicDomain: boolean;

  @ManyToMany(() => Author, (author) => author.book)
  book: Relation<Book>;

  @OneToMany(() => Review, (review) => review.user)
  user: Relation<User>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reviews: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  author: any;
}
