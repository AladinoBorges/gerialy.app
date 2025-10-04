import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

interface CardWithImagePriceProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
  onBuyNow: () => void;
  onAddToCart: () => void;
}

export default function CardProductWithImagePrice(props: CardWithImagePriceProps) {
  const months = 12;
  const fullPrice = props.price.toFixed(2);
  const monthlyPrice = (props.price / months).toFixed(2);

  return (
    <Card maxWidth='md' variant='elevated'>
      <CardBody textAlign='center'>
        <Image src={props.imageUrl} alt={props?.imageAlt} borderRadius='md' />

        <Stack marginTop='6' spacing='4'>
          <Heading as='h3' fontSize='1.8rem' fontWeight={400}>
            {props.title}
          </Heading>

          <Text>{props.description}</Text>

          <Text color='gray.600' fontSize='1rem' fontWeight={600}>
            ${fullPrice} or ${monthlyPrice}/mo. for {months} mo.
          </Text>
        </Stack>
      </CardBody>

      <CardFooter justify='center'>
        <ButtonGroup spacing='2'>
          <Button isDisabled variant='solid' colorScheme='blue'>
            add to cart
          </Button>

          <Button isDisabled variant='ghost' colorScheme='blue'>
            buy now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
