import {Container,VStack,Text,} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: '22', sm: '28' }}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          textAlign={'center'}
          bgGradient={'linear(to-r,cyan.400,blue.500)'}
        >
          Current Products
        </Text>

        <Text fontSize={'xl'} textAlign={"center"} fontWeight={'bold'} color='gray.500'>
          No products found😓{""}
          <Link to ={"/create"}>
          <Text as='span' color='blue.500' _hover={{textDecoration:"underline"}}>
             Create a Product
          </Text> 
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;