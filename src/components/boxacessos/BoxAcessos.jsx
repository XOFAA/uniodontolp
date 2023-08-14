import { Box, Button, Container, Link } from "@mui/material"

export const BoxAcessos = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'}, alignItems:'center',justifyContent: 'space-between', mt: 3 }}>
            <Link href="/">
                    <Box>
                        <img src="images/botoesacessos/link1.svg" alt="Link 5" />
                    </Box>
                </Link>
                <Link href="/">
                    <Box>
                        <img src="images/botoesacessos/link2.svg" alt="Link 5" />
                    </Box>
                </Link>
                <Link href="/">
                    <Box>
                        <img src="images/botoesacessos/link3.svg" alt="Link 5" />
                    </Box>
                </Link>
                <Link href="/">
                    <Box>
                        <img src="images/botoesacessos/link4.svg" alt="Link 5" />
                    </Box>
                </Link>
                <Link href="/">
                    <Box>
                        <img src="images/botoesacessos/link5.svg" alt="Link 5" />
                    </Box>
                </Link>
            </Box>
        </Container>
    )
}
