import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard, { Product } from './components/product-card';


const products: Product[] = [
    {
        id: '1',
        name: 'Strawberry Delight',
        description: 'A refreshing and creamy strawberry ice cream made with real strawberries.',
        image: '/strawberry.png',
        price: 60,
    },
    {
        id: '2',
        name: 'Mango Mania',
        description: 'A tropical mango ice cream that brings the taste of summer in every scoop.',
        image: '/mango.png',
        price: 60,
    },
    {
        id: '3',
        name: 'Chocolate Heaven',
        description: 'Rich and indulgent chocolate ice cream for the ultimate chocolate lover.',
        image: '/chocolate.png',
        price: 100,
    },
    {
        id: '4',
        name: 'Mint Chocolate Chip',
        description: 'Cool mint ice cream with delightful chocolate chips for a refreshing treat.',
        image: '/mint-chocolate.png',
        price: 500,
    },
    {
        id: '5',
        name: 'Rainbow Swirl',
        description: 'A fun and colorful mix of multiple flavors in one delicious scoop.',
        image: '/multi-flavour.png',
        price: 450,
    },
    {
        id: '6',
        name: 'Mango Mania',
        description: 'A tropical mango ice cream that brings the taste of summer in every scoop.',
        image: '/mango.png',
        price: 60,
    },
    {
        id: '7',
        name: 'Chocolate Heaven',
        description: 'Rich and indulgent chocolate ice cream for the ultimate chocolate lover.',
        image: '/chocolate.png',
        price: 100,
    },
    {
        id: '8',
        name: 'Mint Chocolate Chip',
        description: 'Cool mint ice cream with delightful chocolate chips for a refreshing treat.',
        image: '/mint-chocolate.png',
        price: 500,
    },
    {
        id: '9',
        name: 'Mango Mania',
        description: 'A tropical mango ice cream that brings the taste of summer in every scoop.',
        image: '/mango.png',
        price: 60,
    },
    {
        id: '10',
        name: 'Chocolate Heaven',
        description: 'Rich and indulgent chocolate ice cream for the ultimate chocolate lover.',
        image: '/chocolate.png',
        price: 100,
    },
    {
        id: '11',
        name: 'Mint Chocolate Chip',
        description: 'Cool mint ice cream with delightful chocolate chips for a refreshing treat.',
        image: '/mint-chocolate.png',
        price: 500,
    },
    
];

export default function Home() {
    return (
        <>
            <section className="bg-white">
                <div className="container flex items-center justify-between py-24">
                    <div>
                        <h1 className="text-7xl font-black font-sans leading-2">
                        Delightful Scoops! <br />
                            <span className="text-primary">Your Ice Cream Paradise!</span>
                        </h1>
                        <p className="text-2xl mt-8 max-w-lg leading-snug">
                        Indulge in our creamy, dreamy flavors and make every scoop a moment to remember!
                        </p>
                        <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
                            Get your scoop now
                        </Button>
                    </div>
                    <div>
                        <Image alt="icecream-main" src={'/icecream-main.png'} width={400} height={400} />
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-12">
                    <Tabs defaultValue="Cone">
                        <TabsList>
                            <TabsTrigger value="cone" className="text-md">
                            Cone
                            </TabsTrigger>
                            <TabsTrigger value="cup" className="text-md">
                                Cup
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="cone">
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="beverages">
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}