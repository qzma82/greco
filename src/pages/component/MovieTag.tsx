import { useState } from 'react';
type Props = {
    title: string;
};
const MovieTag = ({ title }: Props) => {
return (
    <div>{title}</div>
);
}
export default MovieTag;