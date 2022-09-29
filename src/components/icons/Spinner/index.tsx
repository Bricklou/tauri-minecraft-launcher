import React, { forwardRef } from 'react'
import { LucideProps } from 'lucide-react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Spinner = forwardRef<SVGSVGElement, LucideProps>(
  ({ className, color = 'currentColor', size = 24, strokeWidth = 2, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        className={classNames(className, 'animate-spin -ml-1 mr-3 h-5 w-5 text-white')}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        {...rest}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth={strokeWidth}
        ></circle>
        <path
          className="opacity-75"
          fill={color}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    )
  }
)

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Spinner.displayName = 'Spinner'
