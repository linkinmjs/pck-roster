import React from 'react';
import { Stack, Heading, Button, Flex, Spacer, IconButton, Container, Box } from "@chakra-ui/react";


const Header = () => {
    return (
        <>
            <Container maxW="container.xl" p={4} bg="tomato">
                <Flex bg="tomato">
                    <Box>
                        <Heading size="md">PCK Roster</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <Stack direction="row" spacing={4} align="center">
                            <Button colorScheme="teal" variant="link">
                                Link 1
                            </Button>
                            <Button colorScheme="teal" variant="link">
                                Link 2
                            </Button>
                            <Button colorScheme="teal" variant="outline">
                                Button
                            </Button>
                        </Stack>
                    </Box>
                </Flex>
            </Container>

        </>
    );
}

export default Header;