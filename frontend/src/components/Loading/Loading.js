import React from 'react';
import { useLoading } from '../../hooks/useLoading';
import { Loader } from 'lucide-react'; // Import the Loader icon
import classes from './loading.module.css';

export default function Loading() {
  const { isLoading } = useLoading();
  
  if (!isLoading) return null;

  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <div className={classes.iconWrapper}>
          <Loader className={classes.loaderIcon} /> {/* Use the Loader icon */}
        </div>
        <h1 className={classes.loadingText}>Loading...</h1>
        <div className={classes.dots}>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </div>
      </div>
    </div>
  );
}
