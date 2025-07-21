'use client';
import React, { useState } from 'react';
import RouterLink from 'next/link';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { EyeIcon } from '@phosphor-icons/react/dist/ssr/Eye';
import { EyeSlashIcon } from '@phosphor-icons/react/dist/ssr/EyeSlash';
import { paths } from '@/paths';
// import { login } from '@/lib/authapi'; 
// import { useAuth } from '@/context/AuthContext';
// import { encryptPayload } from '@/lib/encrypt';

export function Login() {

  // const { loginAuth } = useAuth();
  const [showPassword, setShowPassword] = useState(false); //show hide the password
  // const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' }); 
  const [errors, setErrors] = useState({ email: '', password: '' }); //display errors
  const [invaliddetails, setinvaliDetails] = useState('');

  function handleChange(e){
    //change input value during typing
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error on start typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });

    setinvaliDetails('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    // try {
    //       const formfieldsdata = { //get all field data in this var for sending via api to check or login
    //         email: formData.email,
    //         password: formData.password,
    //       };
    //       // const encrypted = encryptPayload(formfieldsdata);
    //       const response = await login(formfieldsdata);
    //       console.log('success', response);
    //       // loginAuth(response.data.token, response.data.user);
    //     } 
    // catch (err) 
    //     {
    //       const response = err.response;
    //       console.log('error', response);
    //       if (response){
    //         if (err.status === 401){
    //           setinvaliDetails(response.data.message);
    //         }
    //       }
    //     }
    
  }

  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h4">Sign in</Typography>
        <Typography color="text.secondary" variant="body2">
          Don&apos;t have an account?{' '}
          <Link component={RouterLink} href={paths.auth.signUp}>
            Sign up
          </Link>
        </Typography>
      </Stack>

      <form method="POST" onSubmit={handleSubmit}> 
        <Stack spacing={2}>

            {/* email Input */}
              <FormControl error={!!errors.email}>
                <InputLabel>Email address</InputLabel>
                <OutlinedInput 
                  label="Email address" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              <FormHelperText className='errorText'>{errors.email}</FormHelperText>
              </FormControl>  

            {/* password input */}
              <FormControl error={!!errors.password}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  endAdornment={
                    showPassword ? (
                      <EyeIcon
                        cursor="pointer"
                        fontSize="var(--icon-fontSize-md)"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <EyeSlashIcon
                        cursor="pointer"
                        fontSize="var(--icon-fontSize-md)"
                        onClick={() => setShowPassword(true)}
                      />
                    )
                  }
                />
              <FormHelperText className='errorText'>{errors.password}</FormHelperText>
              </FormControl>

          <div>
            <Link component={RouterLink} href={paths.auth.signUp} variant="subtitle2">
              Forgot password?
            </Link>
          </div>

          {/* {errors.root && <Alert color="error">{errors.root.message}</Alert>} */}

          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </Stack>
      </form>

      {invaliddetails && <Alert severity="error">{invaliddetails}</Alert>}
    </Stack>
  );
}
