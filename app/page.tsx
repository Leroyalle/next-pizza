import {
  Container,
  Title,
  Categories,
  SortPopup,
  SortBar,
  Filters,
  ProductCart,
  ProductsGroupList,
} from '@/components/shared';
import { Button } from '@/components/ui';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <SortBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чили',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                    price: 123,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
