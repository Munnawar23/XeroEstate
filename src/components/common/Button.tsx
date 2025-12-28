import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  disabled,
  className,
  ...props
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-light-primary dark:bg-dark-primary',
    secondary: 'bg-light-accent dark:bg-dark-accent',
    outline: 'bg-transparent border-2 border-light-primary dark:border-dark-primary',
  };

  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2',
    medium: 'px-6 py-3',
    large: 'px-8 py-4',
  };

  // Text size styles
  const textSizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  // Text color based on variant
  const textColorStyles = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-light-primary dark:text-dark-primary',
  };

  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      className={`rounded-lg items-center justify-center ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${isDisabled ? 'opacity-50' : ''} ${className || ''}`}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#1E40AF' : '#FFFFFF'} />
      ) : (
        <Text className={`font-bodyMedium ${textSizeStyles[size]} ${textColorStyles[variant]}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
