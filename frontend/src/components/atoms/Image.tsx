import React, { useMemo } from 'react'

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageName: string // NOTE: xxx.jpg のように指定する
}

export const Image = (props: IProps) => {

  const imageSrc: string = useMemo(() => `/images/${props.imageName}`, [props.imageName])

  return (
    <img src={imageSrc} alt={props.alt} {...props} />
  )
}