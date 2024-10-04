import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'1140px'} px={4} py={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        {/* Logo / Title */}
        <Text
          fontSize={{ base: '24px', sm: '32px' }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>

        {/* Right Actions (Add Product & Theme Toggle) */}
        <HStack spacing={4} alignItems="center">
          <Link to="/create">
            <Button
              leftIcon={<PlusSquareIcon fontSize={20} />}
              colorScheme="teal"
              variant="solid"
              _hover={{ bgGradient: 'linear(to-r, teal.400, blue.500)' }}
            >
              Add Product
            </Button>
          </Link>

          <Button
            onClick={toggleColorMode}
            bg={useColorMode() === 'light' ? 'gray.200' : 'gray.700'}
            _hover={{
              bg: useColorMode() === 'light' ? 'gray.300' : 'gray.600',
            }}
            size="lg"
            rounded="full"
          >
            {colorMode === 'light' ? <IoMoon size="20" /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
