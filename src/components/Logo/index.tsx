import { Image } from "native-base";
import React from "react";

const Logo = () => {
    return(
        <Image source={require('../../assets/Logo.jpeg')} />
    )
}

export default React.memo(Logo);