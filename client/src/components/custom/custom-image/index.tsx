import React from 'react';
import { Image } from 'antd';

interface ExpandedImageProps {
  src: string;
}

const ExpandedImage: React.FC<ExpandedImageProps> = ({ src }) => {
  return <Image src={src} width={200} height={200} preview={false} alt="Image" />;
};

export default ExpandedImage;