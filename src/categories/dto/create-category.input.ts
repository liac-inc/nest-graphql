import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  iconUrl: string;

  @Field()
  name: string;
}
