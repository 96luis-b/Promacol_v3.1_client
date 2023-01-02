import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useAuth from "../contexts/useAuth";
import { useNavigate } from 'react-router-dom';
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import logo from '../assets/logo_2.png'
import CircularIndeterminate from '../components/Modals/Progress';
import LoaderDialog from '../components/Modals/LoaderDialog';

export default function Login() {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      let response = await auth.login({
        username: data.get('username'),
        password: data.get('password'),
      });
      if (response) navigate("/inicio")
    } catch (e) {
      console.error(e)
    }
  };

  return (<>
    <Grid sx={{ height: "100vh" }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid>
        <Container component="main" maxWidth="xs">

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ width: "80%" }}>

              <img
                src={logo}
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nombre de usuario"
                name="username"
                autoComplete="off"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="off"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Inicio de sesión
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvidaste tu contraseña
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  </>
  )

}