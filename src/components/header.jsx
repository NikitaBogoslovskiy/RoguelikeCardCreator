import { Container, Toolbar, Typography, AppBar } from '@mui/material';

function Header(props){
    return (
        <Container>
            <AppBar>
                <Toolbar sx={{ backgroundColor: "#ffd8ad" }}>
                    <Typography sx={{ flexGrow: 1, fontSize: 32, fontFamily: 'Calibri', textAlign: "center", fontWeight: "bold", color: "#f9fff0" }}>
                        Roguelike Card Creator
                    </Typography>
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export {Header}