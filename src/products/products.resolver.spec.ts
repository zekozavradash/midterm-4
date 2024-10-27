import { Test, TestingModule } from '@nestjs/testing';
import { ProductResolver } from './products.resolver';
import { ProductService } from './products.service';

describe('ProductsResolver', () => {
  let resolver: ProductResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductResolver, ProductService],
    }).compile();

    resolver = module.get<ProductResolver>(ProductResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
