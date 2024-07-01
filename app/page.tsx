import {
  Container,
  Title,
  Categories,
  SortPopup,
  SortBar,
  Filters,
  ProductCart,
} from '@/components/shared';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <SortBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
              <ProductGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
              {/* <ProductCart
                id={1}
                name="Чили"
                price={123}
                imageUrl={
                  'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif'
                }
              /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
