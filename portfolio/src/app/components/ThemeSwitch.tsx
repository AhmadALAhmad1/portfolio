'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Brightness6OutlinedIcon />;

  if (resolvedTheme === 'dark') {
    return <WbSunnyOutlinedIcon onClick={() => setTheme('light')} />;
  }

  if (resolvedTheme === 'light') {
    return <BedtimeOutlinedIcon onClick={() => setTheme('dark')} />;
  }
}
