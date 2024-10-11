import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ asChild, size = 'md', children, className, ...props }) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  const buttonClasses = `bg-blue-500 text-white rounded ${sizeClasses[size]} ${className || ''}`

  if (asChild) {
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...child.props,
          className: `${child.props.className || ''} ${buttonClasses}`.trim()
        } as React.HTMLAttributes<HTMLElement>)
      }
      return child
    })
  }

  return <button {...props} className={buttonClasses}>{children}</button>
}