'use client';

import React, { useState } from 'react';
import RouterLink from 'next/link'; 
// import { useRouter } from 'next/navigation';
// import Alert from '@mui/material/Alert';
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
// import { register } from '@/lib/authapi'

export function Register() {

  // const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); //show hide the password
  const [errors, setErrors] = useState({});
  // const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: 'test', 
    email: 'test@gmail.com',
    password: '111111',
  });

  //get all field data ot update on change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // clear error on typing start
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    // try {
    //       await register(formData) // use your API function          
    //       setSuccess('User registered successfully!');
    //       setFormData({ name: '', email: '', password: '' });
    //       setErrors({});
    //     } 
    // catch (err) {
    //       setSuccess('');
    //       const response = err?.response; 
    //       console.error('Registration failed', response);
    //       if (response) {
    //         if (response.status === 422) {
    //           setErrors({ email: response.data.message });
    //         }
    //       }
    //     }
  };

    return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h4">Sign up</Typography>
        <Typography color="text.secondary" variant="body2">
          Already have an account?{' '}
          <Link component={RouterLink} href={paths.auth.signIn}>
            Sign in
          </Link>
        </Typography>
      </Stack>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl error={!!errors.name}>
            <InputLabel>Name</InputLabel>
            <OutlinedInput
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors.email}>
            <InputLabel>Email address</InputLabel>
            <OutlinedInput
              name="email"
              label="Email address"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
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
            {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
          </FormControl>        

          <Button type="submit" variant="contained">
            Sign up
          </Button>
        </Stack>
      </form>

      {/* {success && <Alert severity="success">{success}</Alert>} */}
    </Stack>
  );
}
