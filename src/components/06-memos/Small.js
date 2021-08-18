import React, {memo} from 'react'

const Small = memo(({value}) => {
    console.log('Me volvi a mostrar :c')
    return (
        <small>
            {value}
        </small>
    )
})

export default Small
