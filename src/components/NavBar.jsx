import styles from "./NavBar.module.css"
import CartWidget from "./CartWidget"
import { Menu, MenuList, MenuButton, MenuItem, Flex, Spacer, Box } from "@chakra-ui/react"

const NavBar = () => {
    return (
        <>
            <Flex className={styles.container}>
                <Box p='10' textAlign={'center'} >
                    <div className={styles.logo}>
                        <img src="src/img/vacation_rental.svg" alt="" />
                    </div>
                </Box>
                <Spacer />
                <Box p='8' flex={1} >
                    <Menu  >
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
                            Category
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Lake House</MenuItem>
                            <MenuItem>Long-term rental</MenuItem>
                            <MenuItem>Resort rentals</MenuItem>
                            <MenuItem>Beachfront rentals</MenuItem>
                        </MenuList>
                    </Menu >
                </Box>
                <Spacer />
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    p='8' justifyContent={"space-between"}
                // border={"solid"}
                >
                    <CartWidget />
                </Box>
            </Flex>
        </>
    )
}

export default NavBar