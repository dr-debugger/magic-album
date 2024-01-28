import React, { useState } from "react";
import LoginSignupGuard from "../layouts/guards/LoginSignupGuard";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../components/Logo";
import { useAuth } from "../hooks/contextHooks";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { onLoginSuccess } = useAuth();

  const onLogin = async () => {
    onLoginSuccess();
  };

  return (
    <LoginSignupGuard>
      <Box sx={{ p: 2 }}>
        <Logo />
      </Box>
      <Box
        sx={{
          minHeight: "90vh",
        }}
        className="flex_center_display"
      >
        <Paper
          elevation={2}
          sx={{
            p: 3,
            borderRadius: "20px",
            maxWidth: "400px",
            my: 1,
            mx: 3,
          }}
        >
          <Box className="flex_center_display" sx={{ gap: 0.5, mb: 2 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Enter your Login details
            </Typography>
            <img src="/images/emoji1.png" alt="img" />
          </Box>

          <TextField
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "20px",
                mb: 2,
              },
            }}
            placeholder="Enter Username"
            size="small"
          />
          <FormControl
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "20px",
                mb: 2,
              },
            }}
          >
            <OutlinedInput
              placeholder="Enter Password"
              size="small"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            sx={{
              bgcolor: "#00A3FF",
              borderRadius: "20px",
              py: "8px",
              fontWeight: "bold",
              mb: 2,
            }}
            variant="contained"
            fullWidth
            onClick={onLogin}
          >
            Continue
          </Button>
          <Box
            className="flex_center_display"
            sx={{
              gap: 1,
              mb: 2,
            }}
          >
            <img src="/images/line.png" alt="img" width="150px" />
            <Typography
              sx={{
                color: "#D9D9D9",
              }}
            >
              or
            </Typography>
            <img src="/images/line.png" alt="img" width="150px" />
          </Box>
          <Button
            sx={{
              background: "linear-gradient(to right, #F5AB4C , #F6D852)",
              borderRadius: "20px",
              color: "black",
              fontWeight: "bold",
              py: "8px",
            }}
            variant="contained"
            fullWidth
            startIcon={<AutoAwesomeIcon />}
          >
            Join Gold
          </Button>
        </Paper>
      </Box>
    </LoginSignupGuard>
  );
};

export default Login;
