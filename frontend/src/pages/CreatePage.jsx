import { useState } from 'react';
import {Box,Container,Heading,useColorModeValue,VStack,Button,Input,} from '@chakra-ui/react';
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });
  const toast = useToast();

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        isClosable: true,
      });
    } else {
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        isClosable: true,
      });
    }
    setNewProduct({ name: '', price: '', image: '' });
  };

  return (
    <Container maxW={'container.md'}>
      <VStack spacing={8}>
        <Heading
          as={'h1'}
          size={'2xl'}
          textAlign={'center'}
          mb={8}
          bgGradient="linear(to-r, teal.500, blue.500)"
          bgClip="text"
        >
          Create New Product
        </Heading>
        <Box
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          p={8}
          rounded={'lg'}
          shadow={'lg'}
          _hover={{ shadow: 'xl', transform: 'translateY(-5px)' }} // subtle hover animation
          transition="all 0.3s ease"
        >
          <VStack spacing={6}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              size="lg"
              width="full"
              bg={useColorModeValue('gray.50', 'gray.700')}
              borderColor={useColorModeValue('gray.200', 'gray.600')}
              shadow="sm"
              rounded="md"
              _focus={{ borderColor: 'teal.400', boxShadow: 'md' }}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              size="lg"
              width="full"
              bg={useColorModeValue('gray.50', 'gray.700')}
              borderColor={useColorModeValue('gray.200', 'gray.600')}
              shadow="sm"
              rounded="md"
              _focus={{ borderColor: 'teal.400', boxShadow: 'md' }}
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              size="lg"
              width="full"
              bg={useColorModeValue('gray.50', 'gray.700')}
              borderColor={useColorModeValue('gray.200', 'gray.600')}
              shadow="sm"
              rounded="md"
              _focus={{ borderColor: 'teal.400', boxShadow: 'md' }}
            />
            <Button
              colorScheme="teal"
              w="full"
              size="lg"
              bgGradient="linear(to-r, teal.400, blue.500)"
              _hover={{
                bgGradient: 'linear(to-l, teal.400, blue.500)',
                boxShadow: 'lg',
              }}
              onClick={handleAddProduct}
              shadow="md"
              rounded="md"
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
