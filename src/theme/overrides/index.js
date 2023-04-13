// third-party
import { merge } from 'lodash';
import Button from './Button';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
    return merge(
        Button(theme),
    );
}
