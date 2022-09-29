import React, { HTMLAttributes, useEffect, useState } from 'react'
import classNames from 'classnames'
import style from './avatar.module.css'
import { Spinner } from '@/components/icons/Spinner'

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  url?: string
}

export function Avatar({ className, url, ...props }: AvatarProps): JSX.Element {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) {
      setLoading(true)
      return
    }

    const img = new window.Image()
    img.src = url
    img.addEventListener('error', () => {
      console.error(`Failed to load image ${url}`)
    })
    img.addEventListener('load', () => setLoading(false))

    return () => {
      img.onload = null
    }
  }, [url])

  return (
    <div className={classNames(className, style.avatar)} {...props} role="img">
      {isLoading ? (
        <Spinner className={classNames(style.spinner, { [style.loading]: isLoading })} />
      ) : (
        <img src={url} alt="Player head" />
      )}
    </div>
  )
}
