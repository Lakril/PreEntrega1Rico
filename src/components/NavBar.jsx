import styles from './NavBar.module.css';
import CartWidget from './CartWidget';
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import brand from '../assets/vacasa.svg';

const NavBar = () => {
  return (
    <Flex className={styles.container}>
      <Box p='10' textAlign={'center'}>
        <Link to={'/'}>
          <div className={styles.logo}>
            <img src={brand} alt='' />
          </div>
        </Link>
      </Box>
      <Spacer />
      <Box p='8' flex={1}>
        <Menu>
          <MenuButton
            bg='red.400'
            px={15}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            Categories
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to={`/category/${"men's clothing"}`}>
                Men&apos;s cloting
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'jewelery'}`}>Jewelery</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${'electronics'}`}>Electronics</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/category/${"women's clothing"}`}>
                Women&apos;s clothing
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box
        display={'flex'}
        alignItems={'center'}
        p='8'
        justifyContent={'space-between'}
        // border={"solid"}
      >
        <Link to={'/cart'}>
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
