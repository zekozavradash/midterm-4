import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './products.service';
import { Product } from './products.schema';
import { CreateProductInput } from './dto/create-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])   // განსაზღვრავს ქუაერის ტიპს
  async products() {
    return this.productService.findAll();
  }

  @Mutation(() => Product)  // განსაზღვრავს მუტაციის ტიპს
  async createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productService.create(createProductInput);
  }
}
