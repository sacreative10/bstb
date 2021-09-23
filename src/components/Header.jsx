import React from 'react'
import {
    Box,
    Stack,
    Heading,
    Flex,
    useDisclosure,
    Menu,
    Button,
    MenuItem,
    MenuList,
    MenuButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Spacer } from '@chakra-ui/layout'
// @ts-ignore
import logo from '../assets/download.png'
import '../styles/layout.module.css'

const Header = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleToggle = () => (isOpen ? onClose() : onOpen())

    return (
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding={6}
                bg="purple"
                color="white"
                {...props}
            >
                <Flex align="center" mr={5}>
                    <img
                        src={logo}
                        alt="school logo"
                        style={{
                            position: 'absolute',
                            maxHeight: '45%',
                            maxWidth: '44px',
                        }}
                    />
                </Flex>
                <Spacer />
                <Spacer />

                <Flex align="center" mr={5}>
                    <Heading
                        as="h1"
                        size="lg"
                        letterSpacing={'tighter'}
                        alignContent="center"
                    >
                        St Bartholomews
                    </Heading>
                </Flex>
                <Spacer />

                <Box
                    display={{ base: 'block', md: 'none' }}
                    onClick={handleToggle}
                >
                    <HamburgerIcon />
                </Box>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="right"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <Menu isLazy>
                        {(isOpen) => (
                            <>
                                <MenuButton
                                    bg="purple"
                                    _hover={{ bg: 'purple' }}
                                    _expanded={{ bg: 'purple' }}
                                    isActive={isOpen}
                                    as={Button}
                                >
                                    Nwes
                                </MenuButton>
                                <MenuList bg="purple">
                                    <MenuItem _hover={{ bg: 'purple' }}>
                                        Bartholonews
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => alert('Kagebunshin')}
                                    >                                        Term Dates
                                    </MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                    <Menu isLazy>
                        {(isOpen) => (
                            <>
                                <MenuButton
                                    bg="purple"
                                    _hover={{ bg: 'purple' }}
                                    _expanded={{ bg: 'purple' }}
                                    isActive={isOpen}
                                    as={Button}
                                >
                                  About
                                </MenuButton>
                                <MenuList bg="purple">
                                <MenuItem _hover={{ bg: 'purple' }}>
                                      Our Heritage
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: 'purple' }}>
                                      Our Future
                                    </MenuItem>
                                    

                                </MenuList>
                            </>
                        )}
                    </Menu>
                    <Menu isLazy>
                        {(isOpen) => (
                            <>
                                <MenuButton
                                    bg="purple"
                                    _hover={{ bg: 'purple' }}
                                    _expanded={{ bg: 'purple' }}
                                    isActive={isOpen}
                                    as={Button}
                                >
                                    Mailing List
                                </MenuButton>
                                <MenuList bg="purple">
                                    <MenuItem _hover={{ bg: 'purple' }}>
                                        Year 7
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: 'purple' }}>
                                        Year 8
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: 'purple' }}>
                                        Year 9
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: 'purple' }}>
                                        Year 10
                                    </MenuItem>
                                    <MenuItem _hover={{ bg: 'purple' }}>
                                        Year 11
                                    </MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </Stack>
            </Flex>
    )
}

export default Header
