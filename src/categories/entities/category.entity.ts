import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  id: string;

  @Field()
  iconUrl: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
