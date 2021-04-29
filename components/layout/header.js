import React from 'react';
import Link from 'next/link'
import { Stack, Heading, Button, Flex, Spacer, IconButton, Container, Box } from "@chakra-ui/react";


const Header = () => {
    return (
        <>
            <Box bg="teal" px={5} py={6}>
                <Flex alignItems={'center'}>
                    <Box color="white">
                        <Heading size="lg">
                            <Link href="/">
                                PCK Roster
                            </Link>
                        </Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <Stack direction="row" spacing={4} align="center">
                            <Button color="white" variant="link">
                                <Link href="/equipos">
                                    Equipos
                                </Link>
                            </Button>
                            <Button color="white" variant="link">
                                <Link href="/jugadores">
                                    Jugadores
                                </Link>
                            </Button>
                            <Button
                                color="white"
                                variant="outline"
                                _hover={{ bg: "#319795" }}
                            >
                                <Link href="/login">
                                    Login
                                </Link>
                            </Button>
                        </Stack>
                    </Box>
                </Flex>
        </Box>

        </>
    );
}

export default Header;