import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Container from '@mui/material/Container';
import {Header} from './header.jsx';
import {Content} from './content.jsx';

function App(){
    return(
        <Container>
            <Header/>
            <Content/>
        </Container>
    )
}

export {App};
