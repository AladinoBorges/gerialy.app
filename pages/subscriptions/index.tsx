import CardProductWithImagePrice from '@/components/Cards/ProductWithImagePrice';
import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { Divider, Flex, Grid, Heading } from '@chakra-ui/react';

export default function Main() {
  const onBuyNow = () => {};
  const onAddToCart = () => {};

  const productsList = new Array(4).fill(null);

  return (
    <DashboardNavigation isLogged={false} complementaryHeader='subscriptions'>
      <Flex
        alignItems='center'
        direction='column'
        gap={{ base: '2rem', md: '5rem' }}
        marginX='auto'
        padding={{ base: '4rem 0rem', md: '8rem 4rem' }}
      >
        <Heading as='h1' fontSize='1.3rem' fontWeight={500} textAlign='center'>
          here, you can find some of the best subscription plans for your needs.
          <br />
          choose wisely and enjoy the benefits!
        </Heading>

        <Divider marginY={4} />

        <Grid templateColumns={{ base: '1', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
          {productsList.map((_, index) => (
            <CardProductWithImagePrice
              key={index}
              imageUrl='https://images.unsplash.com/photo-1520531158340-44015069e78e?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              imageAlt='Green double couch with wooden legs'
              title={`Mussum #${index + 1}`}
              description='Mussum debitis. Culpa, Adipisci. Aliquid, corporis.'
              price={(1 + index) * 3.99}
              onBuyNow={onBuyNow}
              onAddToCart={onAddToCart}
            />
          ))}
        </Grid>
      </Flex>
    </DashboardNavigation>
  );
}
