import { useState } from 'react';
import { Box,Container,Heading,useColorModeValue, VStack, Button,Input,} from '@chakra-ui/react';

const CreatePage = () => {
  const [newProduct, SetNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleAddProduct = () => {
    console.log(newProduct);
  };

  return (
    <Container maxW={'container.md'}>
    
      <VStack spacing={8}>
        <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          p={8} /* Increased padding */
          rounded={'lg'}
          shadow={'md'}
        >
          <VStack spacing={6}>
            {' '}
            {/* Increased spacing between inputs */}
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                SetNewProduct({ ...newProduct, name: e.target.value })
              }
              size="lg" 
              width="full" 
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                SetNewProduct({ ...newProduct, price: e.target.value })
              }
              size="lg"
              width="full"
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                SetNewProduct({ ...newProduct, image: e.target.value })
              }
              size="lg"
              width="full"
            />
            <Button
              colorScheme="blue"
              onClick={handleAddProduct}
              w="full"
              size="lg"
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
