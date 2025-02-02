"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface ImageAvatarType {
    src: string
}

export default function ImageAvatars({src}: ImageAvatarType) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={src} />
    </Stack>
  );
}